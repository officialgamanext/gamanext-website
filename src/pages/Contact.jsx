import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram } from 'lucide-react';
import '../css/Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to Gamanext. We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <div className="page-content inner-page contact-page border-t-divide pb-24">
      <div className="section-container max-w-5xl">
        <div className="page-header center pt-24 pb-16 max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">Get in <span className="text-blue">Touch</span></h1>
          <p className="page-desc text-xl leading-relaxed">Ready to start your next project? Have questions about our services? Our team is ready to provide the answers and solutions you need.</p>
        </div>

        <div className="contact-grid grid md:grid-cols-3 gap-10">
          <div className="contact-info space-y-6 md:col-span-1">
            
            {/* Quick Connect Card */}
            <div className="contact-card border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Quick Connect</h3>
              <div className="quick-connect-links flex gap-3">
                <a href="tel:+916281288314" title="Call Us" className="qc-icon">
                  <Phone size={22} />
                </a>
                <a href="#" title="WhatsApp" className="qc-icon">
                  <MessageCircle size={22} />
                </a>
                <a href="#" title="Instagram" className="qc-icon">
                  <Instagram size={22} />
                </a>
                <a href="mailto:connect.gamanext@gmail.com" title="Email Us" className="qc-icon">
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="contact-card border rounded-2xl p-6 shadow-sm">
              <div className="contact-icon bg-blue-10/10 text-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="mb-1">+91 628 1288 314</p>
              <p className="text-sm">Mon-Fri, 9am - 6pm IST</p>
            </div>
            
            <div className="contact-card border rounded-2xl p-6 shadow-sm">
              <div className="contact-icon bg-blue-10/10 text-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="mb-1">connect.gamanext@gmail.com</p>
            </div>

            <div className="contact-card border rounded-2xl p-6 shadow-sm">
              <div className="contact-icon bg-blue-10/10 text-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Office</h3>
              <p>Nellore,<br/>Andhra Pradesh,<br/>India</p>
            </div>
          </div>

          <div className="contact-form-container md:col-span-2 border rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="w-full form-control" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="w-full form-control" required placeholder="Doe" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="w-full form-control" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="w-full form-control" required placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="w-full form-control" rows="5" required placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-4" style={{width: '100%', borderRadius: '12px', padding: '14px'}}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
