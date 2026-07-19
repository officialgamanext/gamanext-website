"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Bot,
  Zap,
  BarChart3,
  Cpu,
  LineChart,
  Network,
  Sliders,
  Eye,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Code,
  Layers,
  Gauge,
  Send,
  Lock,
  MessageSquare,
  FileText,
  Activity,
  Lightbulb,
} from "lucide-react";

export default function AISolutionsPage() {
  const [activeUseCase, setActiveUseCase] = useState("Ecommerce");

  const aiServices = [
    {
      icon: Bot,
      title: "AI Chatbot & Virtual Assistants",
      badge: "POPULAR",
      desc: "Advanced conversational AI chatbots built with LLMs and Retrieval-Augmented Generation (RAG). Trained on your proprietary company data to handle complex queries, customer support, and lead capture 24/7.",
      bullets: ["RAG knowledge base integration", "WhatsApp & Web widget support", "Multi-language capabilities"],
      color: "from-blue-600 to-indigo-600",
      lightColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: Zap,
      title: "AI Workflow Automation",
      badge: "AUTOMATION",
      desc: "End-to-end process automation connecting AI reasoning models with enterprise APIs, CRMs, and databases to eliminate repetitive manual data entry and streamline operations.",
      bullets: ["API & database integration", "Automated email & document workflows", "Custom webhook triggers"],
      color: "from-purple-600 to-indigo-600",
      lightColor: "bg-purple-50 text-purple-600",
    },
    {
      icon: LineChart,
      title: "Machine Learning & Predictive Modeling",
      badge: "ANALYTICS",
      desc: "Data-driven ML algorithms engineered to forecast sales trends, predict customer churn, optimize pricing models, and detect data anomalies with high precision.",
      bullets: ["Time-series sales forecasting", "Customer churn prediction", "Automated anomaly detection"],
      color: "from-indigo-600 to-blue-600",
      lightColor: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing (NLP)",
      badge: "NLP",
      desc: "Intelligent NLP models for text summarization, sentiment analysis, automated contract parsing, semantic search, and real-time multi-language translation.",
      bullets: ["Sentiment & feedback classification", "Contract & document extraction", "Semantic vector search"],
      color: "from-sky-600 to-blue-600",
      lightColor: "bg-sky-50 text-sky-600",
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      badge: "VISION",
      desc: "State-of-the-art computer vision models for image recognition, automated visual quality inspection, OCR document scanning, and real-time video stream analytics.",
      bullets: ["Automated OCR document parsing", "Defect & visual inspection AI", "Real-time video analytics"],
      color: "from-teal-600 to-emerald-600",
      lightColor: "bg-teal-50 text-teal-600",
    },
    {
      icon: Sliders,
      title: "AI Tool & API Integration",
      badge: "INTEGRATION",
      desc: "Seamless integration of OpenAI GPT-4, Claude, Gemini, or open-source Llama APIs directly into your web platforms, mobile apps, and internal enterprise tools.",
      bullets: ["OpenAI & Claude API integration", "Custom prompt engineering", "Low-latency streaming setup"],
      color: "from-emerald-600 to-teal-600",
      lightColor: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Network,
      title: "Custom AI Model Training & Fine-Tuning",
      badge: "CUSTOM AI",
      desc: "Fine-tuning open and closed AI models on your private company datasets, hosted on secure, high-performance GPU microservice endpoints.",
      bullets: ["Domain-specific LLM fine-tuning", "Private GPU cloud deployment", "Data privacy & encryption"],
      color: "from-purple-600 to-pink-600",
      lightColor: "bg-purple-50 text-purple-600",
    },
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      badge: "STRATEGY",
      desc: "Technical audits, feasibility assessments, AI architecture design, and compliance roadmaps to help enterprise organizations adopt AI safely and effectively.",
      bullets: ["AI ROI & feasibility analysis", "Architecture & security audit", "Enterprise rollout roadmap"],
      color: "from-blue-600 to-cyan-600",
      lightColor: "bg-blue-50 text-blue-600",
    },
  ];

  const useCases = {
    Ecommerce: {
      title: "E-Commerce & Retail AI",
      desc: "Personalize shopping experiences, automate product recommendations, and optimize inventory management.",
      features: [
        "AI-driven product recommendation engines",
        "Automated customer query handling chatbots",
        "Predictive inventory demand forecasting",
        "Visual search and visual matching",
      ],
    },
    Finance: {
      title: "Finance & Banking AI",
      desc: "Detect fraudulent transactions in real-time, automate credit scoring, and analyze risk portfolios.",
      features: [
        "Real-time fraud & anomaly detection",
        "Automated loan document parsing",
        "Predictive credit risk scoring models",
        "Algorithmic market trend analysis",
      ],
    },
    Healthcare: {
      title: "Healthcare & Life Sciences AI",
      desc: "Streamline patient record processing, assist medical diagnostics, and automate appointment scheduling.",
      features: [
        "Medical document OCR & indexing",
        "AI diagnostic assistance algorithms",
        "24/7 Virtual health assistance bots",
        "HIPAA-compliant data processing",
      ],
    },
    Enterprise: {
      title: "Enterprise & Business Operations AI",
      desc: "Automate internal HR queries, extract unstructured contract data, and boost overall team productivity.",
      features: [
        "RAG internal company wiki assistants",
        "Automated invoice & receipt processing",
        "Executive report & text summarization",
        "Workflow integration across Slack & Teams",
      ],
    },
  };

  return (
    <div className="space-y-20 pb-20 bg-slate-50/50 min-h-screen">
      {/* 1. FUTURISTIC HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 bg-navy-gradient text-white overflow-hidden border-b border-slate-800">
        {/* Glowing Background Orbs & Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI SOLUTIONS • NEXT-GEN INTELLIGENCE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Transforming Businesses <br />
                with <span className="text-gradient-cyan">Intelligent AI</span> Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Leverage artificial intelligence, natural language processing, machine learning, and computer vision to automate workflows, reduce costs, and scale your business.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore AI Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-full border border-white/20 backdrop-blur-md transition-all duration-200"
                >
                  <Headphones className="w-4 h-4 text-blue-400" />
                  Book AI Consultation
                </Link>
              </div>
            </div>

            {/* Right Interactive AI Globe/Brain Graphic */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '25s' }} />
                <div className="absolute inset-6 rounded-full border border-purple-500/30 animate-spin-slow" />
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 border border-blue-400/30">
                  <Brain className="w-24 h-24 text-white animate-pulse" />
                </div>

                {/* Floating Micro Badges */}
                <div className="absolute top-2 left-0 p-2.5 bg-slate-900/90 border border-blue-500/40 rounded-xl text-xs font-bold text-blue-300 backdrop-blur-md flex items-center gap-2 shadow-lg animate-float">
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span>RAG AI Chatbot</span>
                </div>

                <div className="absolute bottom-2 right-0 p-2.5 bg-slate-900/90 border border-purple-500/40 rounded-xl text-xs font-bold text-purple-300 backdrop-blur-md flex items-center gap-2 shadow-lg animate-float-slow">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Custom ML Models</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 PERFORMANCE METRICS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-4 first:pl-0">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">99.8%</div>
                <div className="text-xs text-slate-500 font-medium">Model Accuracy</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 shrink-0">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">10x</div>
                <div className="text-xs text-slate-500 font-medium">Workflow Speedup</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">60%</div>
                <div className="text-xs text-slate-500 font-medium">Cost Reduction</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500 font-medium">Automated Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 DETAILED AI SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            OUR AI SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive AI Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            From smart chatbots to predictive ML models, we build solutions that accelerate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${service.lightColor} flex items-center justify-center font-bold shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 gap-1.5 group-hover:gap-2 transition-all"
                  >
                    Request AI Solution <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. AI USE CASES / INDUSTRY APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            INDUSTRY APPLICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI Built for Every Industry
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Discover how our tailored AI models solve real challenges across sector verticals.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {Object.keys(useCases).map((key) => (
            <button
              key={key}
              onClick={() => setActiveUseCase(key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeUseCase === key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {key === "Ecommerce" ? "E-Commerce" : key}
            </button>
          ))}
        </div>

        {/* Active Use Case Card Display */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              {useCases[activeUseCase as keyof typeof useCases].title}
            </h3>
            <p className="text-sm text-slate-600">
              {useCases[activeUseCase as keyof typeof useCases].desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {useCases[activeUseCase as keyof typeof useCases].features.map((feat, fIdx) => (
              <div key={fIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4-STEP AI IMPLEMENTATION PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our AI Implementation Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            A structured, secure, and fast deployment roadmap to bring AI into your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center relative">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto shadow-md">
              01
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Discovery & AI Audit</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We analyze your data infrastructure, business workflows, and pain points to identify high-ROI AI opportunities.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center relative">
            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto shadow-md">
              02
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Model Architecture</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We design custom RAG pipelines, fine-tune domain LLMs, and engineer prompts tailored to your enterprise data.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center relative">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto shadow-md">
              03
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">API Integration</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We seamlessly connect AI models with your existing web apps, CRMs, and mobile interfaces with low-latency streaming.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 text-center relative">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center mx-auto shadow-md">
              04
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">Deployment & Scale</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We deploy on secure GPU cloud microservices with continuous monitoring, data security, and accuracy tuning.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL AI CONVERSION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-gradient rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              READY FOR AI?
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to AI-Power Your Business?
            </h2>
            <p className="text-slate-300 text-sm">
              Schedule a free 30-minute AI strategy call with our solution architects today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-full shadow-lg transition-all"
            >
              Get Free AI Assessment
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-900/40 hover:bg-blue-900/60 border border-white/20 text-white font-semibold text-sm rounded-full transition-all"
            >
              <Headphones className="w-4 h-4 text-blue-400" />
              Book Demo Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
