import React from "react";
import LoginComponent from "../../components/LoginComponent";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="dropdown-item" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              className="me-2"
              height="20"
              alt="MDB Logo"
              loading="lazy"
              />
          </Link>
        </div>
      </nav>
      <LoginComponent />
      <Footer />
    </React.Fragment>
  );
}

export default LoginPage;
