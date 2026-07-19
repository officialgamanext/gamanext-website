"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, MessageSquare, Mail, Phone, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "services", name: "Services & Scope" },
    { id: "pricing", name: "Pricing & Billing" },
    { id: "ai", name: "AI Solutions & Data" },
  ];

  const faqs = [
    {
      category: "services",
      q: "What types of websites do you develop?",
      a: "We develop everything from high-converting landing pages and business websites to complex e-commerce stores, custom CMS configurations, and bespoke web applications using Next.js and Tailwind CSS.",
    },
    {
      category: "services",
      q: "How long does a standard website project take?",
      a: "A typical corporate website takes 3-5 weeks. Complex custom applications and feature-rich e-commerce portals can take 6-12 weeks depending on custom features, backend configurations, and design iterations.",
    },
    {
      category: "pricing",
      q: "How do you structure project payments?",
      a: "We usually operate on a milestone payment structure: 30% upfront initialization fee, 40% upon design approval and development start, and 30% upon final quality checks and site launch.",
    },
    {
      category: "ai",
      q: "Is my business data secure when using your AI Solutions?",
      a: "Absolutely. We build security-first AI solutions. When we train or fine-tune models on your company data, we host them on secure private GPU instances with strict data encryption. Your data is never shared with third-party public models.",
    },
    {
      category: "ai",
      q: "Do you integrate AI chatbots on channels like WhatsApp?",
      a: "Yes! We build and deploy intelligent RAG-based AI chatbots that integrate seamlessly across your website widget, WhatsApp Business API, Telegram, Slack, and Facebook Messenger.",
    },
    {
      category: "pricing",
      q: "Are there any recurring fees for website maintenance?",
      a: "Maintenance is optional but highly recommended. Our monthly plans cover cloud hosting management, database backups, security patches, plugin updates, and dedicated developer support hours.",
    },
    {
      category: "services",
      q: "Do you assist with website domain registration and hosting?",
      a: "Yes, we handle the entire deployment process. We assist with choosing domain registers, setting up fast cloud hosting (Vercel, AWS, Hostinger), and configuring free SSL security certificates.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* Page Hero */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold uppercase tracking-wider">
            SUPPORT CENTER
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about our web development, custom software, and AI solutions.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-white shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Categories Sidebar */}
        <aside className="lg:col-span-3 space-y-2">
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-3">Categories</h3>
          <div className="flex flex-wrap lg:flex-col gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </aside>

        {/* FAQs List */}
        <main className="lg:col-span-9 space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
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
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-700">No results found</p>
              <p className="text-xs text-slate-500 mt-1">Try refining your search terms or view another category.</p>
            </div>
          )}

          {/* Direct Help CTA */}
          <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-3xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-slate-900 text-sm">Still have questions?</h4>
              <p className="text-xs text-slate-500">Our customer experience team is ready to support you.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-full hover:bg-blue-700 transition-colors shadow-sm shrink-0"
            >
              Contact Support
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
