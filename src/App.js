import './App.css';
import { Login } from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/Test.jsx';
import Test2 from './components/Test2';

function App() {

  return (
   <>
    <BrowserRouter>
    <Login/>
    <Test/>
    <Test2/>
    </BrowserRouter>
    </>
  );
}

export default App;
