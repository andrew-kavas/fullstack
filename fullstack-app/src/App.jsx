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
    <Test testParam1={'ok'} />
    <Test testParam1='ok' testError={true} />
  </>
);

export default App;
