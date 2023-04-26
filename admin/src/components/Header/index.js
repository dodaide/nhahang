import { Link } from 'react-router-dom';
import './header.css'
import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function Header() {
  const sessionId = Cookies.get('session_admin')

  const handleLogout = () => {
    axios.post('/api/logout', { sessionId });
    Cookies.remove('session_admin')
    window.location.href = '/';
  };

  return (
    <nav className="header navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="d-flex align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Đơn hàng</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/images">Hình ảnh</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">Danh mục</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Thực đơn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
          <div className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li class="text-center">
                Admin
                <hr></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
