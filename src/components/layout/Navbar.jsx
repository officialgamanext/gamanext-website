import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo-h.png';
import { megaMenuStructure } from '../../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    setIsMegaMenuOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <nav className="navbar">
      <div className="section-container nav-content">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} className='logo' alt="" />
        </Link>
        <div className={`mobile-overlay ${isOpen ? 'show' : ''}`} onClick={closeMenu}></div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          
          <div className="offcanvas-header">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              <img src={logo} className='logo-mobile' alt="Gamanext" />
            </Link>
            <button className="close-offcanvas" onClick={closeMenu}>
              <X size={28} color="#0f172a" />
            </button>
          </div>

          <div className="offcanvas-body">
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

            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={closeMenu}>Products</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
            
            <div className="mobile-cta">
              <Link to="/contact" className="btn-primary w-full text-center block mt-2" onClick={closeMenu}>Get Started</Link>
            </div>
          </div>

          <div className="offcanvas-footer">
            <div className="offcanvas-socials">
              <a href="tel:+916281288314"><Phone size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
            </div>
            <p className="offcanvas-copy">© 2026 Gamanext. All rights reserved.</p>
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
