import { useState } from 'react';

import Clickable from '#src/components/clickable.jsx';
import LoadingArea from '#src/components/loading-area.jsx';
import config from '#src/config.js';
import useAsync from '#src/hooks/use-async.js';

const { fetch } = globalThis;

const { apiUrl } = config.fullstack;

type TestProps = {
  testInput: string;
  testOptionalNumber?: number;
};

// test app change

const Test = ({ testInput, testOptionalNumber }: TestProps) => {
  const { data, error, execute, isLoading } = useAsync(async () => {
    // switch to the commented line to test the error handling
    const response = await fetch(`${apiUrl}/api/hello`);
    // const response = await fetch(`${apiUrl}/api/error`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const text = await response.text();
    return text;
  });

  return (
    <>
      <div className='text-orange-500'>Testing</div>
      <Clickable onClick={execute}>Fetch Data</Clickable>
      <div>{testInput}</div>
      <div>{testOptionalNumber}</div>
      {isLoading && <LoadingArea />}
      {error && <div className='text-red-500'>Error: {error.message}</div>}
      {data && <div className='text-green-500'>{data}</div>}
    </>
  );
};

export default Test;
