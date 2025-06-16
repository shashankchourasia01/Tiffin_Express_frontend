import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { StoreContextProvider } from './context/StoreContext';
import './App.css';
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import Footer from './components/Footer';
import HelpSupport from './pages/HelpAndSupport';
import Login from './pages/Login';
import Register from './pages/Register';
import GroceryPage from './pages/Grocery';
import FindKitchen from './pages/FindKitchen';

const App = () => {
  return (
    <StoreContextProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/howItWorks" element={<HowItWorks />} />
              <Route path="/help" element={<HelpSupport />} />
              <Route path='/login' element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='/grocery' element={<GroceryPage />} />
              <Route path='/find' element={<FindKitchen />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;
