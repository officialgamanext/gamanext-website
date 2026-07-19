import React from "react";
import Link from "next/link";
import { HelpCircle, Mail, Phone, BookOpen, MessageSquare, ShieldAlert, ArrowRight, LifeBuoy } from "lucide-react";

export default function HelpCenterPage() {
  const supportCategories = [
    {
      icon: BookOpen,
      title: "Self-Service & FAQs",
      desc: "Find immediate answers to questions about our project timelines, billing milestones, and custom solutions.",
      linkText: "Browse FAQs",
      href: "/faq",
    },
    {
      icon: MessageSquare,
      title: "Project Consultation",
      desc: "Discuss custom requirements, AI chatbot configurations, or schedule a roadmap discussion with our technical team.",
      linkText: "Book Consultation",
      href: "/contact",
    },
    {
      icon: ShieldAlert,
      title: "Security & Legal",
      desc: "Read our privacy policies, data encryption measures, terms of service, and NDA documentation procedures.",
      linkText: "Read Policies",
      href: "/privacy-policy",
    },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* Page Hero */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-2">
            <LifeBuoy className="w-8 h-8 animate-spin-slow" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Gamanext Help Center
          </h1>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            We are here to support your business. Explore resources, read documentation, or get in touch with our solutions experts.
          </p>
        </div>
      </section>

      {/* Main Support Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">{cat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1.5 group-hover:gap-2 transition-all"
                  >
                    {cat.linkText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information Bar */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Need Direct Technical Support?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you have a live server issue, need hosting credentials, or have invoicing questions, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:official.gamanext@gmail.com"
              className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-200 rounded-2xl text-center space-y-2 group transition-all"
            >
              <Mail className="w-6 h-6 text-blue-600 mx-auto" />
              <div className="font-bold text-slate-900 text-xs">Email Support</div>
              <p className="text-[10px] text-slate-500 truncate">official.gamanext@gmail.com</p>
            </a>

            <a
              href="tel:+916281288314"
              className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-200 rounded-2xl text-center space-y-2 group transition-all"
            >
              <Phone className="w-6 h-6 text-blue-600 mx-auto" />
              <div className="font-bold text-slate-900 text-xs">Call Support</div>
              <p className="text-[10px] text-slate-500">+91 62812 88314</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
