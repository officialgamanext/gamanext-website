import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  
  return (
    <nav className="navbar">
      <div className="section-container nav-content">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="nav-logo-icon">G</div>
          <span className="nav-logo-text">amanext</span>
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>Services</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          
          <div className="mobile-cta">
            <Link to="/contact" className="btn-primary w-full text-center block mt-2" onClick={closeMenu}>Get Started</Link>
          </div>
        </div>
        
        <div className="nav-actions">
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          {isOpen ? <X size={28} color="#0f172a" /> : <Menu size={28} color="#0f172a" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
