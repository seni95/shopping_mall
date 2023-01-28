import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './pages/context/AuthContext';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
