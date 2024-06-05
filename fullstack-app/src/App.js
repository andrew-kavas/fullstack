import { useEffect, useState } from 'react';

const { fetch } = globalThis;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl text-blue-500'>{message}</h1>
    </div>
  );
}

export default App;
