import { useCallback, useRef } from 'react';

/**
 * @template {(...args: any[]) => any} T
 * @param {T} fn
 */
const useEvent = fn => {
  const ref = useRef(fn);
  ref.current = fn;
  return useCallback(/** @type {T} */ ((...args) => ref.current(...args)), []);
};

export default useEvent;
