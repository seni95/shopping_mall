import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  );
}

export default App;
