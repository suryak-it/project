import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Profile from './components/Profile';
import About from './components/About'; // Import the About component
import Navbar from './components/Navbar';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      {user && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/main" /> : <Login setUser={setUser} />} />
        <Route path="/signup" element={user ? <Navigate to="/main" /> : <Signup setUser={setUser} />} />
        <Route path="/main" element={user ? <MainPage user={user} /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={user ? <ProductList addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/products/:id" element={user ? <ProductDetails addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart cart={cart} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/login" />} />
         {/* Add the About page route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;