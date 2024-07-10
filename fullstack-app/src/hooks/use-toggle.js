import { useState } from 'react';

import useEvent from '#src/hooks/use-event.js';

const useToggle = initial => {
  const [value, setValue] = useState(!!initial);
  const setTrue = useEvent(() => setValue(true));
  const setFalse = useEvent(() => setValue(false));
  const toggle = useEvent(() => setValue(value ? false : true));
  return /** @type {const} */ ([value, setTrue, setFalse, toggle]);
};

export default useToggle;
