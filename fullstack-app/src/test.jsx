import Boundary from '#src/components/boundary.jsx';
import Clickable from '#src/components/clickable.jsx';
import LoadingArea from '#src/components/loading-area.jsx';
import useAsync from '#src/hooks/use-async.js';

const { console, fetch } = globalThis;

const Test = () => {
  const { data, error, execute, isLoading } = useAsync(async () => {
    // switch to the commented line to test the error handling
    const response = await fetch('http://localhost:4000/api/hello');
    // const response = await fetch('http://localhost:4000/api/error');
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const text = await response.text();
    console.log(text);
    return text;
  });
  console.log({ error });

  return (
    <Boundary>
      <div className='text-orange-500'>Testing</div>
      <Clickable onClick={execute}>Fetch Data</Clickable>
      {isLoading && <LoadingArea />}
      {error && <div className='text-red-500'>Error: {error.message}</div>}
      {data && <div className='text-green-500'>{data}</div>}
    </Boundary>
  );
};

export default Test;
