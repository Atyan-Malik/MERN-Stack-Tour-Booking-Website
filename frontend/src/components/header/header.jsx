import React, { useState, useContext } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <>
      <Container>
        <Row>
          <div className="h-container">
            <div className="icon">
              <img src="web-icon.png" alt="logo" />
              Global <strong>Glimpses</strong>{" "}
            </div>

            <nav className="desktop-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/tours">Tours</NavLink>
            </nav>

            <div className="register">
              {user ? (
                <>
                  <span className="username">{user.username}</span>
                  <button className="primary__btn btn-1" onClick={logoutUser}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="primary__btn">
                    <NavLink to="/login" className="Link">
                      Login
                    </NavLink>
                  </button>
                  <Link to="/register">
                    <button className="primary__btn btn1 reg-btn">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>

            <span className="m-menu" onClick={() => setMenuOpen(true)}>
              <i className="ri-menu-fill"></i>
            </span>
          </div>
        </Row>
      </Container>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="ri-close-line"></i>
        </span>

        <div className="mobile-links">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/tours" onClick={() => setMenuOpen(false)}>
            Tours
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
