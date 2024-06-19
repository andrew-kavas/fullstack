import { useEffect, useState } from 'react';

import config from '#src/config.js';

const { console, fetch, window } = globalThis;

console.log(globalThis);

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  console.log(config);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <p>API_URL: {window._env_.API_URL}</p>
      <h1 className='text-4xl text-blue-500'>{message}</h1>
    </div>
  );
}

export default App;
