import React from 'react'
import "./Header.css";

import logo from "../assets/books.png";

const Header = ({title = "Relatos de Papel", subtitle = "Bienmvenidos" }) => {
  return (
   <header className="app-header">
        <div className="app-header_container">
            <div className="app-header_left">
                <img className="app-header_logo" src={logo} alt="Logo" />
                <div className="app-header_brand">
                    <h1 className="app-header_title">{title}</h1>
                    <p className="app-header_subtitle">{subtitle}</p>
                </div>
            </div>
        

            <nav className="app-header_nav">
                <a className="app-header_link" href="#inicio">Inicio</a>
                <a className="app-header_link" href="#servicios">Servicios</a>
                <a className="app-header_link" href="#contacto">Contacto</a>
            </nav>
            <div className="app-header_right">
                <button className="app-header_btn" type="button">
                    Inicio Sesión
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header

