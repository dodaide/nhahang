import './App.css';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Menu from './pages/Menu';
import FoodDetail from './pages/FoodDetail';
import BlogDetail from './pages/BlogDetail';
import Blog from './pages/Blog';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<FoodDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
