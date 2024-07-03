import { useState } from 'react';

import reactLogo from '#src/assets/react.svg';
import Test from '#src/test.jsx';

import viteLogo from '/vite.svg';
import '#src/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-row'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <Test />
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
