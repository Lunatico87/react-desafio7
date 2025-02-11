import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import iconCart from "../assets/img/icon-cart.png";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  
  const { formatted_total } = useContext(CartContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active btnav navbar-brand text-white btn btn-sm" : 'btnav navbar-brand text-white btn btn-sm');
  const { token, actualizarToken } = useContext(UserContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
          <div className="col-3 text-black">
            <span>LOGO</span>
          </div>
          <div className="col-6 text-black-center me-auto">
          <ul class="navbar-nav justify-content-evenly me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <NavLink
              to="/"
              className={setActiveClass} 
              id="home"
              
            >
              Home
            </NavLink>
              
            </li>
            <li class="nav-item">
            <NavLink
              to="/productos"
              className={setActiveClass} 
              id="productos"
              
            > Productos
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
              to="/quienes-somos"
              className={setActiveClass} 
              id="quienes-somos"
              
            >
              Quienes somos
            </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
              to="/contacto"
              className={setActiveClass} 
              id="contacto"
              
            >
              Contáctanos
            </NavLink>
            </li>
          </ul>
            </div>
            
            <div className="col-3 display-flex align-items-end">
            {token ? (
              <>
              <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink
                  to="/profile"
                  className={setActiveClass} 
                  id="profile"
                >
                  {" "}
                  Perfil
                </NavLink>        </li>
        <li class="nav-item">
        <NavLink
                  to="/login"
                  id="logout"
                  className='btnav navbar-brand text-black btn btn-sm'
                  onClick={actualizarToken}
                >
                  Salir
                </NavLink>{" "}        </li>
                <li class="nav-item">
                <NavLink
              to="/cart"
              id="total"
              className={setActiveClass} 
              
            >
              <img
                src={iconCart}
                alt="icon cart"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
            </NavLink>
            </li>
      </ul>
              </>
            ) : (
              <>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink
                  to="/login"
                  id="login"
                  className={setActiveClass} 
                >
                  Login
                </NavLink>        </li>
        <li class="nav-item">
        <NavLink
                  to="/register"
                  id="register"
                  className={setActiveClass} 
                >
                  Register
                </NavLink>        </li>
      </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;