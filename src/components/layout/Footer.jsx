import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Youtube, MessageCircle } from 'lucide-react';
import Logo from '../../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img src={Logo} alt="" style={{width: '200px', height: '60px'}} />
            </Link>
            <p>Empowering businesses with next-generation AI tools, custom software solutions, and digital marketing strategies.</p>
            <div className="social-links">
              <a href="tel:+916281288314" title="Call Us"><Phone size={20} /></a>
              <a href="#" title="WhatsApp"><MessageCircle size={20} /></a>
              <a href="#" title="Instagram"><Instagram size={20} /></a>
              <a href="#" title="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">AI Tools Development</Link></li>
              <li><Link to="/services">Web Designing</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Billing & ERP Software</Link></li>
              <li><Link to="/services">Automatic Chatbots</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={20} />
              <span>Nellore, Andhra Pradesh, India</span>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <span>+91 628 1288 314</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <span>connect.gamanext@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Gamanext. All rights reserved.</p>
          <p>Designed with precision for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
