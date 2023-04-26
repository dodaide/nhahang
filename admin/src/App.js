import './App.css';
import Order from './pages/Order';
import Promote from './pages/Promote';
import Menu from './pages/Menu';
import Category from './pages/Category';
import FoodDetail from './pages/FoodDetail';
import FoodAdd from './pages/FoodAdd';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import BlogAdd from './pages/BlogAdd';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import Cookies from 'js-cookie';

function App() {
  const sessionId = Cookies.get('session_admin')
  console.log(sessionId);
  if(sessionId){
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/images" element={<Promote />} />
          <Route path="/category" element={<Category />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<FoodDetail />} />
          <Route path="/menu/add" element={<FoodAdd />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/add" element={<BlogAdd />} />
        </Routes>
      </React.Fragment>
    );
  }
  else{
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </React.Fragment>
    )
  }
}

export default App;
