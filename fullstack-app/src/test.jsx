import { useEffect, useState } from 'react';

const { console, fetch } = globalThis;

export default () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch('http://localhost:4000/api/hello');

    const data = await response.text();
    console.log(data);

    setData(data);
  }

  return (
    <div>
      <h1>Test</h1>
      <div className='text-orange-500'>Testing</div>
      {data && <>{data}</>}
    </div>
  );
};
