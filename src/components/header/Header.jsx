import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/books.png";
import { useCart } from "../../context/CartContext";



const Header = ({title = "Relatos de Papel", subtitle = "Bienmvenidos" }) => {

    const { cartCount } = useCart();
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
                <Link to="/products" className="app-header_link">
                    Productos
                </Link>
            </nav>

            <div className="app-header_right">
                <Link to="/cart" className="app-header_iconBtn" aria-label="Carrito">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6h15l-2 8H8L6 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="9" cy="20" r="1.6" fill="currentColor"/>
                        <circle cx="18" cy="20" r="1.6" fill="currentColor"/>
                    </svg>

                    {cartCount > 0 && <span className="app-header_badge">{cartCount}</span>}
                </Link>

                <Link to="/register" className="app-header_btn app-header_btn-link">
                    Registro
                </Link>
            </div>

        </div>
    </header>
  );
}

export default Header

