import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import './App.css';
//import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar2/Navbar';
import Home from './pages/home/Home'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App