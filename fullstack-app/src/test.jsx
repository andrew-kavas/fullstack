import { useEffect, useRef, useState } from 'react';

import Boundary from '#src/components/boundary.jsx';
import Clickable from '#src/components/clickable.jsx';
import useAsync from '#src/hooks/use-async.js';

const { console, fetch } = globalThis;

const Test = () => {
  // export default () => {
  // const [displayData, setDisplayData] = useState();
  // const isFetching = useRef(false); // Use a ref to track if the data is being fetched

  // useEffect(() => {
  //   if (data || isFetching.current) return;
  //   isFetching.current = true; // Mark as fetching
  //   getData();
  // }, [data]);

  // async function getData() {
  //   const response = await fetch('http://localhost:4000/api/hello');
  //   const data = await response.text();
  //   console.log(data);
  //   setDisplayData(data);
  //   isFetching.current = false; // Reset the fetching status
  // }
  const { data, error, execute, isLoading } = useAsync(async () => {
    // const response = await fetch('http://localhost:4000/api/hello');
    const response = await fetch('http://localhost:4000/api/error');
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const text = await response.text();
    console.log(text);
    return text;
  });
  console.log({ error });

  if (error) return <div className='text-red-500'>{error.message}</div>;

  return (
    <Boundary>
      <div>Test</div>
      {/* {error && <div className='text-red-500'>Error: {error}</div>} */}
      {isLoading && <div>Loading...</div>}
      <div className='text-red-500'>Test</div>
      <Clickable onClick={execute}>Fetch Data</Clickable>
      <div className='text-orange-500'>Testing</div>
      {data && <>{data}</>}
    </Boundary>
  );
};

export default Test;
