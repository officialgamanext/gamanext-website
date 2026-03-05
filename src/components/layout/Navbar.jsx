import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';
import { megaMenuStructure } from '../../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setIsMegaMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="section-container nav-content">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} className='logo' alt="" />
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          
          <div 
            className={`nav-item has-dropdown ${isMegaMenuOpen ? 'open-mobile' : ''}`}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button 
              className={`nav-link-btn ${location.pathname.includes('/services') ? 'active' : ''}`}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Services <ChevronDown size={14} />
            </button>
            <div className={`mega-menu ${isMegaMenuOpen ? 'show' : ''}`}>
              <div className="mega-menu-inner">
                {Object.entries(megaMenuStructure).map(([category, items]) => (
                  <div className="mega-category" key={category}>
                    <h5>{category}</h5>
                    {items.map(item => (
                      <Link 
                        key={item.slug} 
                        to={`/services/${item.slug}`} 
                        onClick={closeMenu}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
