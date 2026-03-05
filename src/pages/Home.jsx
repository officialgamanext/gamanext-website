import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Laptop, Code, Megaphone, Bot, FileText, CheckCircle2 } from 'lucide-react';
import '../css/Home.css';

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="section-container">
          <div className="hero-content">
            <div className="hero-badge">WELCOME TO GAMANEXT</div>
            <h1 className="hero-title">
              Architecting the <br />
              <span className="text-blue">Next Generation</span><br />
              of Software.
            </h1>
            <p className="hero-desc">
              We provide cutting-edge AI tools, custom ERP/CRM solutions, and innovative digital strategies to propel your business into the future.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary">
                Explore Solutions <span className="btn-arrow">&rarr;</span>
              </Link>
              <Link to="/contact" className="btn-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Previously Missing 'Why Choose Us' / Benefits Section */}
      <section className="benefits-section">
        <div className="section-container benefits-container">
          <div className="benefits-grid">
            <div className="benefits-left">
              <h2 className="section-title">Why Industry Leaders Choose Gamanext</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <CheckCircle2 className="benefit-icon text-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Innovation-First Approach</h4>
                    <p className="benefit-text">We stay ahead of the curve by integrating the latest AI research and software engineering practices into every project.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <CheckCircle2 className="benefit-icon text-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Scalable Architecture</h4>
                    <p className="benefit-text">Our software is built to grow with you, from startup phase to global enterprise, without performance bottlenecks.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <CheckCircle2 className="benefit-icon text-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="benefit-title">Security by Design</h4>
                    <p className="benefit-text">Every line of code is written with a security-first mindset, ensuring your data and operations remain protected.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="benefits-right">
              <div className="stats-grid">
                <div className="stat-card light-card">
                  <h3 className="stat-value text-blue">99%</h3>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
                <div className="stat-card blue-card">
                  <h3 className="stat-value">24/7</h3>
                  <p className="stat-label">Support Available</p>
                </div>
                <div className="stat-card dark-card">
                  <h3 className="stat-value">500+</h3>
                  <p className="stat-label">Projects Delivered</p>
                </div>
                <div className="stat-card light-card">
                  <h3 className="stat-value text-blue">15+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-bg-grid"></div>
        <div className="section-container">
          <div className="services-header">
            <h2 className="services-title">Comprehensive Solutions for<br/>Modern Enterprises</h2>
            <p className="services-desc">
              From intelligent chatbots to full-scale ERP systems, our suite of services is designed to optimize every facet of your operations.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Cpu size={32} /></div>
              <h3>AI Tools</h3>
              <p>Intelligent automation and predictive algorithms tailored for your business needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Laptop size={32} /></div>
              <h3>Web Designing</h3>
              <p>Stunning, responsive, and high-performance websites that capture your brand's essence.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Code size={32} /></div>
              <h3>Custom Software</h3>
              <p>Bespoke CRM, ERP, and enterprise software solutions to streamline operations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Megaphone size={32} /></div>
              <h3>Digital Marketing</h3>
              <p>Data-driven marketing strategies to expand your reach and accelerate growth.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Bot size={32} /></div>
              <h3>Automatic Chatbots</h3>
              <p>24/7 intelligent customer support bots integrated seamlessly into your platforms.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FileText size={32} /></div>
              <h3>Billing Software</h3>
              <p>Secure, efficient, and user-friendly invoicing and billing management systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-desc">Partner with Gamanext to leverage powerful AI, stunning web design, and robust custom software.</p>
            <Link to="/contact" className="btn-primary">Get in Touch Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
