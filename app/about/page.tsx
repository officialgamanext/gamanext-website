"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Users,
  Layers,
  Target,
  ShieldCheck,
  Globe,
  Clock,
  Sparkles,
  Award,
  Lightbulb,
  Rocket,
  Handshake,
  ShieldAlert,
  Mail,
  CheckCircle2,
  TrendingUp,
  Building2,
  Cpu,
  Smile,
  Cloud,
} from "lucide-react";

export default function AboutPage() {
  const scrollToJourney = () => {
    const element = document.getElementById("our-journey");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const teamMembers = [
    {
      name: "Arumulla Siva Krishna",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:ceo@gamanext.com",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:priya@gamanext.com",
    },
    {
      name: "Rohit Verma",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:rohit@gamanext.com",
    },
    {
      name: "Ananya Reddy",
      role: "UI/UX Design Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:ananya@gamanext.com",
    },
    {
      name: "Vikram Patel",
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:vikram@gamanext.com",
    },
  ];

  const journeySteps = [
    {
      year: "2019",
      title: "The Beginning",
      desc: "Gamanext was founded with a vision to deliver impactful digital solutions.",
      color: "bg-blue-600 text-white",
    },
    {
      year: "2020",
      title: "Expanding Services",
      desc: "Expanded our service portfolio and onboarded our first 50+ clients.",
      color: "bg-emerald-600 text-white",
    },
    {
      year: "2021",
      title: "Growing Team",
      desc: "Built a talented team of experts and delivered 150+ projects.",
      color: "bg-purple-600 text-white",
    },
    {
      year: "2022",
      title: "Global Reach",
      desc: "Started serving international clients and strengthened our global presence.",
      color: "bg-amber-600 text-white",
    },
    {
      year: "2023",
      title: "AI & Innovation",
      desc: "Launched AI solutions to help businesses automate and scale.",
      color: "bg-teal-600 text-white",
    },
    {
      year: "2024+",
      title: "The Future",
      desc: "Continuing our journey of innovation and delivering excellence every day.",
      color: "bg-pink-600 text-white",
    },
  ];

  return (
    <div className="space-y-20 pb-20 bg-slate-50/50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 bg-hero-gradient bg-dot-pattern border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-extrabold uppercase tracking-wider">
                ABOUT GAMANEXT
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                We Build Solutions <br />
                That Make a <span className="text-gradient-blue">Difference</span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                At Gamanext, we combine creativity, technology, and strategy to deliver digital solutions that help businesses grow, automate, and lead in the digital world.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToJourney}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Our Journey
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-full border border-slate-300 shadow-sm transition-all duration-200"
                >
                  Watch Video
                  <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                </a>
              </div>
            </div>

            {/* Right Photo with Floating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Gamanext Office Workspace"
                  width={800}
                  height={550}
                  className="w-full h-80 sm:h-[420px] object-cover"
                />

                {/* Floating "Since 2019" Badge Overlay */}
                <div className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs animate-float-slow">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Since</div>
                    <div className="text-xl font-black text-slate-900">2019</div>
                    <p className="text-[11px] text-slate-500 leading-tight">Delivering digital excellence for businesses worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS / STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-4 first:pl-0">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">250+</div>
                <div className="text-[11px] text-slate-500 font-medium">Projects Completed</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">150+</div>
                <div className="text-[11px] text-slate-500 font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">98%</div>
                <div className="text-[11px] text-slate-500 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">5+</div>
                <div className="text-[11px] text-slate-500 font-medium">Years of Experience</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">10+</div>
                <div className="text-[11px] text-slate-500 font-medium">Countries Served</div>
              </div>
            </div>

            {/* Stat 6 */}
            <div className="flex items-center gap-3 pt-4 md:pt-0 md:pl-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">24/7</div>
                <div className="text-[11px] text-slate-500 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-blue-50/70 rounded-3xl p-8 border border-blue-100 shadow-sm flex items-start gap-5 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">OUR MISSION</span>
              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create lasting value.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-indigo-50/70 rounded-3xl p-8 border border-indigo-100 shadow-sm flex items-start gap-5 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider">OUR VISION</span>
              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                To be a global leader in digital transformation by delivering intelligent, scalable, and future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            OUR VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Principles That Drive Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Our core values shape everything we do and every solution we deliver.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Value 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Integrity</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We believe in transparency, honesty, and building trust with our clients.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Innovation</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We embrace new ideas and technologies to build smarter solutions.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Client First</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our clients are at the heart of everything we plan and do.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Excellence</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We are committed to delivering the highest quality in our work.
            </p>
          </div>

          {/* Value 5 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mx-auto group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Collaboration</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We work together as a team and with our clients to achieve success.
            </p>
          </div>

          {/* Value 6 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm">Accountability</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We take ownership of our commitments and results, always.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            OUR TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Minds Behind Gamanext
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            A passionate team of creators, innovators, and problem solvers.
          </p>
        </div>

        {/* 5 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center p-5 space-y-4"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-extrabold text-slate-900 text-sm">{member.name}</h3>
                <p className="text-xs text-slate-500">{member.role}</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2 pt-2 border-t border-slate-100 w-full justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href={member.email}
                  className="p-2 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-600 text-blue-600 font-bold text-xs rounded-full shadow-sm hover:bg-blue-50 transition-colors"
          >
            Join Our Team
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. OUR JOURNEY SECTION */}
      <section id="our-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            OUR JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Journey So Far
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            From a small idea to a digital solutions company trusted by businesses worldwide.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm text-center space-y-3 hover:shadow-lg transition-all relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-2xl ${step.color} font-bold text-xs flex items-center justify-center mx-auto shadow-sm`}>
                  {step.year}
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TRUSTED BRANDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">TRUSTED BY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Brands That Trust Us</h2>
        </div>

        {/* Brands Logo Grid Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>TechCorp</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <span>Innovate</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <Rocket className="w-5 h-5 text-emerald-600" />
              <span>StartupHub</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <Cpu className="w-5 h-5 text-purple-600" />
              <span>DigitalEdge</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>Growtify</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-base">
              <Cloud className="w-5 h-5 text-sky-600" />
              <span>CloudNest</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
