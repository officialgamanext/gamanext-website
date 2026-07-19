"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Megaphone,
  Palette,
  Briefcase,
  Brain,
  ChevronRight,
  Headphones,
  ArrowRight,
  Code,
  Laptop,
  ShoppingCart,
  Layers,
  Smartphone,
  Target,
  RefreshCw,
  Wrench,
  Search,
  Mail,
  Share2,
  BarChart2,
  FileText,
  PieChart,
  ShieldCheck,
  Edit3,
  Video,
  Film,
  Printer,
  Database,
  Cloud,
  Lock,
  Receipt,
  Zap,
  LineChart,
  Eye,
  Cpu,
  Bot,
  Sliders,
  Sparkles,
  Layout,
  UserCheck,
  Network,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("website-services");
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activePill = pillRefs.current[activeSection];
    const container = containerRef.current;
    if (activePill && container) {
      const pillLeft = activePill.offsetLeft;
      const pillWidth = activePill.clientWidth;
      const containerWidth = container.clientWidth;
      container.scrollTo({
        left: pillLeft - containerWidth / 2 + pillWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "website-services",
        "digital-marketing",
        "creative-branding",
        "business-ai-solutions",
        "ai-solutions",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "website-services", name: "Website Services", icon: Globe },
    { id: "digital-marketing", name: "Digital Marketing", icon: Megaphone },
    { id: "creative-branding", name: "Creative & Branding", icon: Palette },
    { id: "business-ai-solutions", name: "Business & AI Solutions", icon: Briefcase },
    { id: "ai-solutions", name: "AI Solutions", icon: Brain },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Title & Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                SERVICES
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Comprehensive Solutions <br />
                for <span className="text-gradient-blue">Every Business</span> Need
              </h1>
              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                Explore our wide range of detailed services designed to help your business grow, automate, and lead in the digital world.
              </p>
            </div>

            {/* Right Hero Laptop Illustration */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative max-w-sm w-full bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-slate-200 shadow-xl space-y-3">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center p-4 border border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-indigo-900/20 to-transparent" />
                  <div className="text-center space-y-1 relative z-10">
                    <div className="inline-flex p-2.5 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-400/30 backdrop-blur-sm">
                      <Laptop className="w-7 h-7" />
                    </div>
                    <h3 className="text-white text-sm font-bold tracking-tight">Gamanext</h3>
                    <p className="text-[10px] text-blue-300/80 font-medium">SOFTWARE SOLUTIONS</p>
                  </div>
                </div>

                {/* Floating Micro Icons */}
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center">
                    <Code className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-purple-50 rounded-xl text-purple-600 flex items-center justify-center">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                  <div className="p-2 bg-sky-50 rounded-xl text-sky-600 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT WITH STICKY SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* STICKY HORIZONTAL CATEGORY NAVIGATION FOR MOBILE */}
        <div className="sticky top-[65px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm lg:hidden -mx-4 sm:-mx-6 px-4 sm:px-6 mb-6">
          <div
            ref={containerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    pillRefs.current[item.id] = el;
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT STICKY SIDEBAR (DESKTOP ONLY) */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 space-y-6">
            {/* Sidebar Navigation */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold text-blue-600 uppercase tracking-wider px-2">
                Explore Our Services
              </h3>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all text-left ${
                        isActive
                          ? "bg-blue-50 text-blue-600 border border-blue-200/80 shadow-sm"
                          : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-blue-600 translate-x-0.5" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar CTA Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 text-sm">Need a Custom Solution?</h4>
                <p className="text-xs text-slate-500">Let's discuss how we can help your business.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 bg-white border border-blue-600 text-blue-600 font-bold text-xs rounded-full hover:bg-blue-50 transition-colors shadow-sm"
              >
                Talk to Expert
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>

          {/* RIGHT MAIN SERVICES BLOCKS */}
          <main className="lg:col-span-9 space-y-10">
            
            {/* BLOCK 1: WEBSITE SERVICES */}
            <section id="website-services" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 scroll-mt-36 lg:scroll-mt-28">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    1. WEBSITE SERVICES
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We build fast, responsive, and user-friendly websites that create a lasting impression and deliver real business results.
                  </p>
                </div>
              </div>

              {/* Sub-services 2-Column Grid with Expanded Explanations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Layout className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Web Designing & Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modern, visually appealing designs with clean code to build a strong online presence. We blend aesthetics with optimal user experience, fast load speeds, and intuitive layouts tailored to your brand.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Custom UI/UX wireframing & prototyping</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> SEO-friendly frontend code structure</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Responsive Web Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mobile-first designs that look perfect on all devices and screen sizes. We ensure smooth navigation, fluid grids, and touch-optimized interfaces across smartphones, tablets, and desktops.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Fluid breakpoint grid adaptation</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Cross-browser & device compatibility</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Custom Web Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tailored websites and complex web applications built to meet unique business requirements. Includes bespoke database architecture, custom API endpoints, and secure admin management portals.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Modern stack (React, Next.js, Node.js)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Secure user role & access management</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Landing Page Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-converting landing pages designed to generate leads and boost marketing campaigns. Engineered with psychological call-to-action placement, social proof elements, and conversion tracking.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> High conversion rate optimization (CRO)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Fast loading speed for paid campaigns</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">E-Commerce Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secure and scalable online stores that convert visitors into loyal customers. Feature-rich platforms complete with automated product management, multi-currency checkout, and order tracking.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Integrated payment gateways (Stripe/Razorpay)</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Inventory & order management system</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Website Redesign</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Revamp your existing website with a modern look, enhanced user flows, and improved site performance. Transform outdated layouts into fresh, high-performing digital assets.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> UX audit & performance overhaul</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Zero downtime SEO migration</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">CMS Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Easy-to-manage websites built on powerful CMS platforms like WordPress, Drupal, or Headless CMS. Empowers your team to publish blogs, update products, and manage media without coding knowledge.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Custom theme & plugin integration</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> User-friendly content editor dashboards</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Web Maintenance</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ongoing technical support and maintenance to keep your website secure, fast, and up-to-date. Proactive monitoring, routine cloud backups, security scans, and instant bug fixes.
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-500 pt-1">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> 24/7 uptime & performance monitoring</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" /> Automated backups & security patches</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* BLOCK 2: DIGITAL MARKETING */}
            <section id="digital-marketing" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 scroll-mt-36 lg:scroll-mt-28">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    2. DIGITAL MARKETING
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Drive targeted traffic, generate qualified leads, and grow your brand online with our result-driven digital marketing strategies.
                  </p>
                </div>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <Search className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Digital Marketing & SEO</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive multi-channel digital growth campaigns to increase brand reach, search visibility, and inbound customer inquiries through data-backed methodologies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Email Marketing</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Build lasting relationships and drive repeat conversions with automated email workflows, product launch announcements, customer segmentation, and performance newsletters.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <BarChart2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">SEO Services</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On-page, off-page, technical SEO, and local search optimization designed to get your site ranked on Google page #1 for high-intent business keywords.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Influencer Marketing</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collaborate with strategic niche influencers and industry experts to build social proof, boost brand awareness, and reach targeted audiences effectively.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Social Media Marketing</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engage your audience across Instagram, LinkedIn, Facebook, and Twitter with creative content strategies, graphic posts, video reels, and community interaction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Online Reputation Management</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monitor, protect, and enhance your brand's digital reputation. We track online reviews, manage customer feedback, and promote positive brand narratives.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">PPC Advertising</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Target high-intent customers with ROI-driven Google Search Ads, Display Ads, and Meta paid campaigns optimized for maximum return on ad spend (ROAS).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <PieChart className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Marketing Analytics</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Data-driven tracking setup, custom conversion dashboards, multi-touch attribution modeling, and actionable insights to continuously optimize marketing spend.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all space-y-2.5 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Content Marketing</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Create valuable, informative content including blogs, whitepapers, case studies, and buyer guides that build authority, educate prospects, and drive organic traffic.
                  </p>
                </div>
              </div>
            </section>

            {/* BLOCK 3: CREATIVE & BRANDING */}
            <section id="creative-branding" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 scroll-mt-36 lg:scroll-mt-28">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    3. CREATIVE & BRANDING
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Creative designs and strong visual branding that help your business stand out in competitive markets and leave a lasting impression.
                  </p>
                </div>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Logo Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unique, memorable, and scalable logo marks designed to convey your company's core mission, market positioning, and visual personality across all mediums.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Layout className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">UI/UX Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Intuitive, user-centered digital interfaces crafted through Figma wireframing, interactive prototypes, visual aesthetics, and seamless user interaction design.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Brand Identity</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complete brand style guides including typography hierarchies, color palettes, iconography systems, brand voice guidelines, and visual asset libraries.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Video Production</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-quality commercial video production including brand story videos, product walkthroughs, customer interview reels, and promotional ad commercials.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Graphic Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stunning graphic assets for marketing campaigns, ad banners, corporate pitch decks, infographics, and digital social media collateral.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Film className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Animation Services</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Captivating 2D and 3D motion graphics, animated explainer videos, logo intro animations, and interactive web motion effects that drive user engagement.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 hover:border-purple-200 transition-all space-y-2.5 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <Printer className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Print Design</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional high-resolution print design materials including corporate brochures, business cards, trade show booth banners, sales flyers, and custom product packaging.
                  </p>
                </div>
              </div>
            </section>

            {/* BLOCK 4: BUSINESS & AI SOLUTIONS */}
            <section id="business-ai-solutions" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 scroll-mt-36 lg:scroll-mt-28">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    4. BUSINESS & AI SOLUTIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Smart enterprise software, custom CRM/ERP systems, and technology solutions built to streamline business workflows and improve operational efficiency.
                  </p>
                </div>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Custom Software (ERP/CRM)</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tailored Enterprise Resource Planning and Customer Relationship Management platforms designed specifically around your company's operational processes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Business Consulting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategic technology advisory to identify operational bottlenecks, digitize manual tasks, optimize resource allocation, and accelerate business growth.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Cloud Services</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secure and scalable AWS, Azure, and Google Cloud infrastructure setup, database migration, serverless hosting, and automated DevOps deployment pipelines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">AI Tools Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bespoke internal AI software utilities, web automation scrapers, intelligent data extraction tools, and decision support algorithms tailored to your needs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">IT Consulting</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expert guidance on infrastructure architecture, technical stack selection, system reliability, legacy software migration, and IT security protocols.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Cybersecurity</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive digital security audits, penetration testing, data encryption, role-based access management, and compliance protection against cyber threats.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Automatic Chatbots</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated customer support assistants integrated into your website or WhatsApp to handle client queries, qualify leads, and provide 24/7 engagement.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">CRM Solutions</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Build stronger customer relationships with lead pipeline management, sales stage tracking, customer order histories, and automated sales notifications.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Mobile App Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-performance native (iOS/Android) and cross-platform (React Native/Flutter) mobile apps equipped with push notifications and seamless UI/UX.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Billing & Invoicing Software</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated invoicing software featuring recurring billing schedules, GST/tax calculation, digital invoice generation, and revenue reporting dashboards.
                  </p>
                </div>
              </div>
            </section>

            {/* BLOCK 5: AI SOLUTIONS */}
            <section id="ai-solutions" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6 scroll-mt-36 lg:scroll-mt-28">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                    5. AI SOLUTIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Leverage cutting-edge artificial intelligence, machine learning, and predictive analytics to automate operations and accelerate business growth.
                  </p>
                </div>
              </div>

              {/* Sub-services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">AI Chatbot Development</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advanced conversational AI chatbots using LLMs and Retrieval-Augmented Generation (RAG) trained on your internal documentation for instant, accurate customer responses.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Machine Learning Solutions</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom data-driven ML algorithms for predictive forecasting, automated customer segmentation, recommendation systems, and anomaly detection.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Code className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Natural Language Processing</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    NLP technology solutions for automated text summarization, sentiment analysis, document parsing, information retrieval, and language translation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">AI Automation Solutions</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    End-to-end intelligent workflow automation connecting AI logic to internal business APIs, reducing manual task handling and operational overhead.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <LineChart className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Predictive Analytics</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Data intelligence forecasting market trends, revenue projections, customer churn metrics, and inventory demand with actionable executive analytics.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">AI Model Training & Deployment</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom fine-tuning of open-source and proprietary AI models, cloud deployment on dedicated GPU servers, and microservice API endpoint management.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Sliders className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">AI Tool Integration</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seamless integration of OpenAI, Claude, or custom open-source AI APIs directly into your existing web platforms, mobile apps, and SaaS tools.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-indigo-50/40 hover:border-indigo-200 transition-all space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Computer Vision Solutions</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Computer vision and image processing models for automated object recognition, video analytics, visual inspection, and OCR document processing.
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
