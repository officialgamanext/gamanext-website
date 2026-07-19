"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Award,
  Clock,
  Target,
  Globe,
  Megaphone,
  Palette,
  Briefcase,
  Brain,
  CheckCircle2,
  FileCode,
  Users,
  ShieldCheck,
  Sparkles,
  Bot,
  Laptop,
  Layers,
  ChevronRight,
  Quote,
  Calendar,
  Send,
  Phone,
  Cpu,
  BarChart3,
  Zap,
  Code,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "Websites",
      subtitle: "Fashion Store",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "CRM Software",
      category: "Software",
      subtitle: "Business Solution",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "Branding",
      subtitle: "Logo & Branding",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "AI Chatbot Solution",
      category: "Software",
      subtitle: "Customer Support Bot",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab || (activeTab === "E-Commerce" && p.subtitle.includes("Fashion")));

  return (
    <div className="space-y-24 pb-16 overflow-hidden relative bg-slate-50/50">
      {/* Background Decorative Ambient Blobs & Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-[35%] right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-[65%] left-10 w-[30rem] h-[30rem] bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      {/* SECTION 1: HERO SECTION WITH PATTERN & CURVES */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 bg-hero-gradient bg-dot-pattern border-b border-slate-200/60">
        {/* Decorative Top SVG Curved Wave */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-600 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>INNOVATE • AUTOMATE • ACCELERATE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Smart Solutions. <br />
                Stronger{" "}
                <span className="text-gradient-blue">Businesses.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                We design websites, build powerful software and deliver AI-driven solutions that help your business grow, automate and lead in the digital world.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-full border border-slate-300 shadow-sm transition-all duration-200 hover:border-slate-400 hover:-translate-y-0.5"
                >
                  <Headphones className="w-4 h-4 text-blue-600" />
                  Talk to Expert
                </Link>
              </div>

              {/* Trust Features Bar */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">100%</h4>
                    <p className="text-[11px] text-slate-500">Satisfaction</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">On-Time</h4>
                    <p className="text-[11px] text-slate-500">Delivery</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 shadow-sm">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">24/7</h4>
                    <p className="text-[11px] text-slate-500">Support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 shadow-sm">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Result</h4>
                    <p className="text-[11px] text-slate-500">Driven</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Illustration Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background concentric circles */}
                <div className="absolute -inset-6 rounded-full border border-blue-200/50 animate-spin-slow pointer-events-none" />
                <div className="absolute -inset-12 rounded-full border border-indigo-100/40 pointer-events-none" />

                {/* Glowing backdrop circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow" />

                {/* Laptop Mockup Box */}
                <div className="relative bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-2xl space-y-4">
                  {/* Laptop Mockup visual */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-inner flex items-center justify-center p-4 border border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-indigo-900/20 to-transparent" />
                    <div className="text-center space-y-2 relative z-10">
                      <div className="inline-flex p-3 rounded-2xl bg-blue-600/30 text-blue-400 border border-blue-400/30 backdrop-blur-sm">
                        <Laptop className="w-8 h-8" />
                      </div>
                      <h3 className="text-white text-base font-bold tracking-tight">Gamanext</h3>
                      <p className="text-xs text-blue-300/80 font-medium">SOFTWARE SOLUTIONS</p>
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-100 flex items-center gap-2 shadow-sm">
                      <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                        <FileCode className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">Website Dev</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-purple-50/90 border border-purple-100 flex items-center gap-2 shadow-sm">
                      <div className="p-1.5 rounded-lg bg-purple-600 text-white">
                        <Brain className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">AI Solutions</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-indigo-50/90 border border-indigo-100 flex items-center gap-2 shadow-sm">
                      <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
                        <Megaphone className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">Digital Marketing</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-sky-50/90 border border-sky-100 flex items-center gap-2 shadow-sm">
                      <div className="p-1.5 rounded-lg bg-sky-600 text-white">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">AI Chatbot</span>
                    </div>
                  </div>
                </div>

                {/* Outer floating pill cards */}
                <div className="hidden sm:flex absolute -top-4 -left-4 p-2.5 bg-white rounded-2xl shadow-xl border border-slate-100 items-center gap-2.5 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    <Code className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 pr-2">Software Dev</span>
                </div>

                <div className="hidden sm:flex absolute -bottom-4 -right-4 p-2.5 bg-white rounded-2xl shadow-xl border border-slate-100 items-center gap-2.5 animate-float-slow">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 pr-2">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Curve Divider */}
        <div className="w-full overflow-hidden leading-none text-slate-50/80 -mb-1">
          <svg className="w-full h-8 sm:h-12 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 2: OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Complete digital solutions to grow your business
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Card 1: WEBSITE SERVICES */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                WEBSITE SERVICES
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Web Designing & Development</li>
                <li>Custom Web Development</li>
                <li>E-Commerce Development</li>
                <li>CMS Development</li>
                <li>Responsive Web Design</li>
                <li>Landing Page Design</li>
                <li>Website Redesign</li>
                <li>Web Maintenance</li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services#website"
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1 group-hover:gap-2 transition-all"
              >
                View All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: DIGITAL MARKETING */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                DIGITAL MARKETING
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Digital Marketing & SEO</li>
                <li>SEO Services</li>
                <li>Social Media Marketing</li>
                <li>PPC Advertising</li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
                <li>Influencer Marketing</li>
                <li>Online Reputation Management</li>
                <li>Marketing Analytics</li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services#marketing"
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1 group-hover:gap-2 transition-all"
              >
                View All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: CREATIVE & BRANDING */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                CREATIVE & BRANDING
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Logo Design</li>
                <li>Brand Identity</li>
                <li>Graphic Design</li>
                <li>UI/UX Design</li>
                <li>Video Production</li>
                <li>Animation Services</li>
                <li>Print Design</li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services#branding"
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1 group-hover:gap-2 transition-all"
              >
                View All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: BUSINESS & AI SOLUTIONS */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                BUSINESS & AI SOLUTIONS
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>Custom Software (ERP/CRM)</li>
                <li>AI Tools Development</li>
                <li>Automatic Chatbots</li>
                <li>Billing & Invoicing Software</li>
                <li>Business Consulting</li>
                <li>IT Consulting</li>
                <li>CRM Solutions</li>
                <li>ERP Solutions</li>
                <li>Cloud Services</li>
                <li>Cybersecurity</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/services#business"
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1 group-hover:gap-2 transition-all"
              >
                View All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: AI SOLUTIONS (NEW Badge) */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-purple-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-extrabold text-purple-700 bg-purple-100 rounded-full">
              NEW
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                AI SOLUTIONS
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>AI Chatbot Development</li>
                <li>AI Automation Solutions</li>
                <li>AI Tool Integration</li>
                <li>Machine Learning Solutions</li>
                <li>Predictive Analytics</li>
                <li>Computer Vision Solutions</li>
                <li>Natural Language Processing</li>
                <li>AI Model Training & Deployment</li>
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/ai-solutions"
                className="inline-flex items-center text-xs font-bold text-purple-600 hover:text-purple-700 gap-1 group-hover:gap-2 transition-all"
              >
                Explore AI Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS & METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-sm bg-dot-pattern relative overflow-hidden">
          {/* Subtle curved background overlay */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center divide-y sm:divide-y-0 sm:divide-x divide-blue-200/60 relative z-10">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-4 first:pl-0">
              <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">250+</div>
                <div className="text-xs text-slate-500 font-medium">Projects Completed</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">150+</div>
                <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">98%</div>
                <div className="text-xs text-slate-500 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 bg-white text-blue-600 rounded-2xl shadow-sm border border-slate-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">5+</div>
                <div className="text-xs text-slate-500 font-medium">Years of Experience</div>
              </div>
            </div>

            {/* Trust Avatars Box */}
            <div className="col-span-2 lg:col-span-1 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center">
              <p className="text-xs font-bold text-slate-800 mb-1.5">Trusted by businesses of all sizes</p>
              <div className="flex items-center -space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Client Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Client Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Client Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Client Avatar"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US & FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Why Choose Us Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              We turn ideas into <br className="hidden sm:inline" />
              <span className="text-blue-600">impactful</span> digital solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine creativity, technology and strategy to deliver solutions that not only look great but also drive real business results.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Experienced & Skilled Team",
                "Custom Solutions for Your Business",
                "On-Time Delivery, Every Time",
                "Transparent Communication",
                "Affordable Pricing",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md transition-all"
              >
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Container with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Gamanext Team Working"
                width={800}
                height={550}
                className="w-full h-80 sm:h-96 object-cover"
              />
              {/* Badge overlay bottom left */}
              <div className="absolute bottom-6 left-6 p-4 bg-blue-600 text-white rounded-2xl shadow-xl space-y-1">
                <div className="text-2xl font-black">5+</div>
                <div className="text-xs font-semibold uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">OUR WORK SPEAKS</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 p-1.5 rounded-full text-xs font-semibold">
              {["All", "Websites", "E-Commerce", "Software", "Branding"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{project.title}</h4>
                    <p className="text-xs text-slate-500">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 gap-1.5"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: SMARTER WITH AI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-gradient rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Background Ambient Grid & Glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left AI Sphere Graphic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-indigo-500/40 animate-ping opacity-20" />
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <Brain className="w-16 h-16 sm:w-20 sm:h-20 text-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
                SMARTER WITH AI
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                AI-Powered Solutions for the <br className="hidden sm:inline" />
                <span className="text-blue-400">Future-Ready</span> Business
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                We build intelligent AI solutions that automate processes, enhance customer experiences and help you make data-driven decisions.
              </p>

              <div>
                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-full shadow-lg transition-all"
                >
                  Explore AI Solutions
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </Link>
              </div>

              {/* 4 Feature Pills Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Automate Workflows</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Reduce Operational Costs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Users className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Improve Customer Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Data-Driven Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            WHAT CLIENTS SAY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Clients Worldwide
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between relative space-y-6">
            <Quote className="w-8 h-8 text-blue-600 opacity-80" />
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "Gamanext delivered a stunning website that perfectly represents our brand. Their team is professional, creative and always on time."
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Ravi Sharma"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Ravi Sharma</h4>
                <p className="text-xs text-slate-500">CEO, ShopSmart</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between relative space-y-6">
            <Quote className="w-8 h-8 text-blue-600 opacity-80" />
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "Their digital marketing strategies helped us grow our online presence and generate quality leads. Highly recommended!"
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Priya Mehta"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Priya Mehta</h4>
                <p className="text-xs text-slate-500">Marketing Head, Trendz India</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between relative space-y-6">
            <Quote className="w-8 h-8 text-blue-600 opacity-80" />
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "The AI chatbot they built for us has improved our customer support, and saved us tons of time."
            </p>
            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                alt="Arun Kumar"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Arun Kumar</h4>
                <p className="text-xs text-slate-500">Founder, QuickAssist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 pt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
      </section>

      {/* SECTION 7: LATEST INSIGHTS / BLOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
              LATEST INSIGHTS
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">From Our Blog</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 gap-1.5"
          >
            View All Blogs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog 1 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group">
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80"
                alt="10 Web Design Trends to Watch in 2024"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-bold">Web Development</span>
                <span className="text-slate-400">May 20, 2024</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                10 Web Design Trends to Watch in 2024
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-bold text-blue-600 gap-1 hover:gap-1.5 transition-all pt-2"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group">
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80"
                alt="How SEO Can Boost Your Business Growth"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 font-bold">Digital Marketing</span>
                <span className="text-slate-400">May 15, 2024</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                How SEO Can Boost Your Business Growth
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-bold text-blue-600 gap-1 hover:gap-1.5 transition-all pt-2"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group">
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"
                alt="AI Automation: The Future of Smart Business"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-600 font-bold">AI Solutions</span>
                <span className="text-slate-400">May 10, 2024</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                AI Automation: The Future of Smart Business
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-bold text-blue-600 gap-1 hover:gap-1.5 transition-all pt-2"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Blog 4 */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col group">
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
                alt="Why Branding is Important for Your Business"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-600 font-bold">Branding</span>
                <span className="text-slate-400">May 05, 2024</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                Why Branding is Important for Your Business
              </h3>
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-bold text-blue-600 gap-1 hover:gap-1.5 transition-all pt-2"
              >
                Read More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-banner-gradient rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
              <Send className="w-7 h-7 text-white" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-blue-100 text-sm">Let's build something amazing together.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 hover:bg-slate-100 font-bold text-sm rounded-full shadow-md transition-all"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900/40 hover:bg-blue-900/60 border border-white/30 text-white font-semibold text-sm rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
