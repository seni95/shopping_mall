import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './pages/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </AuthContextProvider>
  );
}

export default App;
