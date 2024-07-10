import { useMemo, useRef, useState } from 'react';

import reportError from '#src/functions/report-error.js';
import useEvent from '#src/hooks/use-event.js';
import useToggle from '#src/hooks/use-toggle.js';

const ourFaultError = new Error('Our part of the code failed');

const isOurFault = er =>
  er instanceof EvalError ||
  er instanceof RangeError ||
  er instanceof ReferenceError ||
  er instanceof SyntaxError ||
  er instanceof TypeError ||
  er instanceof URIError;

/**
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 */
export default fn => {
  const executeIdRef = useRef(0);
  const [error, setError] = useState(/** @type {Error | null} */ (null));
  const [data, setData] = useState(
    /** @type {Awaited<ReturnType<T>> | undefined} */ (undefined)
  );
  const [isLoading, startLoading, endLoading] = useToggle();

  const execute = useEvent(
    /** @param {Parameters<T>} args */ async (...args) => {
      const id = ++executeIdRef.current;
      setData(undefined);
      setError(null);
      startLoading();
      let _data;
      let _error = null;
      try {
        _data = await fn(...args);
      } catch (er) {
        if (isOurFault(er)) {
          reportError(er);
          _error = ourFaultError;
        } else _error = er;
      }
      if (id !== executeIdRef.current) return;

      setData(_data);
      setError(_error);
      endLoading();
    }
  );

  const reset = useEvent(() => {
    ++executeIdRef.current;
    setData(undefined);
    setError(null);
    endLoading();
  });

  return useMemo(
    () => ({ data, error, execute, isLoading, reset }),
    [data, error, execute, isLoading, reset]
  );
};
