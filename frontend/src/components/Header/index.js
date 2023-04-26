import { FaShoppingBag, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './header.css'
import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function Header() {
  const [user, setUser] = useState({});
  const sessionId = Cookies.get('session_id')
  
  useEffect(() => {
    axios.post('/api/user', { sessionId })
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleLogout = () => {
    axios.post('/api/logout', { sessionId });
    Cookies.remove('session_id')
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
              <Link className="nav-link" to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/intro">Giới thiệu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Thực đơn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <FaShoppingBag />
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
            </li>
            {!sessionId ?   
            <li className="nav-item">
              <Link className="nav-link" to="/login"><FaSignInAlt/></Link>
            </li>
            :
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  src={user.avar || "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"}
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
                  {user.name || "Name"}
                  <hr></hr>
                </li>
                <li>
                  <a className="dropdown-item">Profile</a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
