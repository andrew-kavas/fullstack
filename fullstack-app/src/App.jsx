import reactLogo from '#src/assets/react.svg';
import Test from '#src/components/test.jsx';

import viteLogo from '/vite.svg';
import '#src/App.css';

const Header = () => (
  <div className='flex flex-row justify-center'>
    <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
      <img src={viteLogo} className='logo' alt='Vite logo' />
    </a>
    <a href='https://react.dev' target='_blank' rel='noreferrer'>
      <img src={reactLogo} className='logo react' alt='React logo' />
    </a>
  </div>
);

const App = () => (
  <>
    <Header />
    <Test testParram1={'ok'} />
    <Test testParram1='ok' testParram2={2} />
  </>
);

export default App;
