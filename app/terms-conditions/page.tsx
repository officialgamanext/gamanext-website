import React from "react";
import Link from "next/link";
import { ArrowRight, Scale, FileText } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* Page Hero */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-2">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500">Last updated: July 18, 2026</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
        {/* Intro */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            1. Agreement to Terms
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            By accessing or using the Gamanext Software Solutions website and services, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, you must not use our website or services.
          </p>
        </div>

        {/* Services & Project Terms */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            2. Services & Project Scope
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All design, web development, custom software, and AI solutions provided by Gamanext are executed based on a detailed Project Scope of Work (SOW) mutually signed before kickoff. Any modifications or feature additions requested outside the SOW will be billed separately.
          </p>
        </div>

        {/* Payments */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            3. Payment Terms
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Clients agree to pay project costs according to the milestones specified in their respective contracts. Invoices must be paid within 7 calendar days of receipt. Delayed payments may result in work suspension or deployment delays.
          </p>
        </div>

        {/* IP Intellectual Property */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            4. Intellectual Property
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Upon receipt of full and final payment, ownership of custom source code, website designs, graphic assets, and custom configurations is transferred to the Client.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Gamanext retains ownership of pre-existing intellectual property, core software components, custom libraries, templates, and general design patterns developed prior to or independently of the client project.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            5. Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Gamanext shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our custom software, websites, or AI systems once deployed to production.
          </p>
        </div>

        {/* Contact info */}
        <div className="space-y-3 pt-6 border-t border-slate-100 text-center sm:text-left">
          <h3 className="font-bold text-slate-900 text-sm">Need clarification on terms?</h3>
          <p className="text-xs text-slate-500">
            For inquiries regarding our terms, email us at{" "}
            <a href="mailto:official.gamanext@gmail.com" className="text-blue-600 font-bold hover:underline">
              official.gamanext@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
