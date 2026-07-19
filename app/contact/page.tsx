"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Lock,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", company: "", message: "" });
      }, 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How quickly will you respond to my inquiry?",
      a: "We reply to all inquiries within 24 hours. During business hours (Mon - Sat: 9 AM - 7 PM), our team typically responds within 1 to 2 hours.",
    },
    {
      q: "What information should I include in my message?",
      a: "Please include a brief overview of your business goals, target completion timeline, required services (e.g., Web Dev, AI Solutions, Branding), and any specific feature requirements.",
    },
    {
      q: "Do you offer free consultation?",
      a: "Yes! We provide a complimentary 30-minute consultation call with our solution experts to analyze your requirements and propose the best approach.",
    },
    {
      q: "Can you sign an NDA for my project?",
      a: "Absolutely. We treat your proprietary ideas and data with strict confidentiality. We are happy to sign a Non-Disclosure Agreement (NDA) before starting any discussion.",
    },
  ];

  return (
    <div className="space-y-20 pb-20 bg-slate-50/50 min-h-screen pt-6">
      {/* 1. HERO & CONTACT FORM SECTION */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                  GET IN TOUCH
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Let's Build Something <br />
                  Amazing <span className="text-gradient-blue">Together</span>
                </h1>
                <p className="text-base text-slate-600 leading-relaxed max-w-lg">
                  Have a project in mind or need expert advice? We'd love to hear from you. Fill out the form or reach out to us using the details below.
                </p>
              </div>

              {/* 3 Value Highlights */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Quick Response</h3>
                    <p className="text-xs text-slate-500 mt-0.5">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Expert Support</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Talk to our experienced team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Tailored Solutions</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Solutions designed for your business</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">Send Us a Message</h2>
                    <p className="text-xs text-slate-500">We'll get back to you as soon as possible.</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-emerald-900 text-base">Message Sent Successfully!</h3>
                    <p className="text-xs text-emerald-700">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Subject</label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="What is this regarding?"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Company Name (Optional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enter your company name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or requirements..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                      <Lock className="w-3 h-3 text-slate-400" />
                      Your information is secure and will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 5 CONTACT INFO CARDS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1: Call Us */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Call Us</h3>
            <div className="space-y-0.5">
              <a href="tel:+916281288314" className="text-xs font-bold text-blue-600 hover:underline block">
                +91 62812 88314
              </a>
              <p className="text-[11px] text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Email Us</h3>
            <div className="space-y-0.5">
              <a href="mailto:official.gamanext@gmail.com" className="text-xs font-bold text-blue-600 hover:underline block truncate">
                official.gamanext@gmail.com
              </a>
              <p className="text-[11px] text-slate-400">We reply within 24 hours</p>
            </div>
          </div>

          {/* Card 3: Visit Us */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Visit Us</h3>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-slate-800 leading-snug">
                1st street Chandra Mouli Nagar, Vedayapalem
              </p>
              <p className="text-[11px] text-slate-500">Nellore, Andhra Pradesh, India</p>
            </div>
          </div>

          {/* Card 4: WhatsApp */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">WhatsApp</h3>
            <div className="space-y-0.5">
              <a
                href="https://wa.me/916281288314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:underline block"
              >
                +91 62812 88314
              </a>
              <p className="text-[11px] text-slate-400">Chat with us on WhatsApp</p>
            </div>
          </div>

          {/* Card 5: Support Hours */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Support Hours</h3>
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-slate-800">24/7 Support</p>
              <p className="text-[11px] text-slate-400">We're here for you anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OFFICE LOCATION & INTERACTIVE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Description Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-wider border border-blue-100">
                OUR OFFICE
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Let's Connect <br />
                In Person
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We'd love to meet you! Visit our office for a coffee and a discussion about your ideas.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Easy to reach location</span>
                </li>
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Professional environment</span>
                </li>
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Ample parking available</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Vedayapalem+Nellore+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-600 text-blue-600 font-bold text-xs rounded-full shadow-sm hover:bg-blue-50 transition-colors"
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Location Map View */}
          <div className="lg:col-span-7 bg-slate-100 relative min-h-[350px] border-t lg:border-t-0 lg:border-l border-slate-200">
            {/* Map Frame Graphic */}
            <iframe
              title="Gamanext Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.02341234567!2d79.9750!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzMzLjQiTiA3OcKwNTgnMzAuMCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full filter brightness-95 contrast-105"
            />
            {/* Map Pin Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Gamanext Software Solutions</h4>
                <p className="text-[11px] text-slate-500">Chandra Mouli Nagar, Vedayapalem, Nellore, AP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-wider border border-blue-100">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Find quick answers to common questions.
          </p>
        </div>

        {/* Stacked Single-Column FAQ Accordion List (One by One) */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-slate-900 text-sm hover:text-blue-600 focus:outline-none transition-colors cursor-pointer select-none"
                >
                  <span className="text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? "bg-blue-50 text-blue-600 rotate-180" : "bg-slate-100 text-slate-400"}`}>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
