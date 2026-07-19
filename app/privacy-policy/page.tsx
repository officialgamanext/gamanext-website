import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* Page Hero */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-2">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Privacy Policy
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
            1. Introduction
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Welcome to Gamanext Software Solutions. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, store, share, and protect your information when you visit our website or use our services.
          </p>
        </div>

        {/* Info We Collect */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            2. Information We Collect
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We collect personal information that you provide to us directly through contact forms, quote requests, and email communications. This may include:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
            <li>Contact details such as name, email address, phone number, and physical address.</li>
            <li>Business details including company name, team sizes, project budgets, and technical requirements.</li>
            <li>Any custom documents or project assets uploaded for evaluation or development.</li>
          </ul>
        </div>

        {/* How We Use Your Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            3. How We Use Your Information
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We use the information we collect to provide, maintain, and optimize our software development, design, and AI services. Specifically, this includes:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
            <li>Responding to your support queries, consultation bookings, and quote requests.</li>
            <li>Developing custom software platforms, CRM integrations, and fine-tuning private AI models.</li>
            <li>Sending project status updates, administrative messages, and periodic newsletters.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            4. Data Security & Storage
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The security of your personal data and business information is our priority. We implement appropriate technical, server-side, and administrative security measures to prevent unauthorized access, loss, or alteration of data.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            When training private AI models or processing business data, all operations are conducted inside secure, encrypted GPU cloud compute environments.
          </p>
        </div>

        {/* Cookies */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            5. Cookies and Tracking Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We use cookies to analyze web traffic, optimize loading performance, and improve your overall browsing experience. You can choose to disable cookies through your individual browser settings.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 pt-6 border-t border-slate-100 text-center sm:text-left">
          <h3 className="font-bold text-slate-900 text-sm">Have privacy concerns?</h3>
          <p className="text-xs text-slate-500">
            If you have questions about how we manage data, email us at{" "}
            <a href="mailto:official.gamanext@gmail.com" className="text-blue-600 font-bold hover:underline">
              official.gamanext@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
