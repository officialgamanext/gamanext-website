import React from "react";
import Link from "next/link";
import { ArrowRight, Receipt, FileText } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 pt-6">
      {/* Page Hero */}
      <section className="relative bg-hero-gradient bg-dot-pattern border-b border-slate-200/80 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-2">
            <Receipt className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: July 18, 2026</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
        {/* Software Dev Refunds */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            1. Software & Design Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Due to the custom nature of our web design, custom software development, and AI solutions, payments made for milestone completion are generally non-refundable once work has commenced.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Upfront initialization fees are partially refundable under specific conditions before work begins, as detailed in individual project contracts.
          </p>
        </div>

        {/* Support & Maintenance Refunds */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            2. Support & Maintenance Subscriptions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Monthly website maintenance, security monitoring, and custom cloud hosting packages operate on recurring billing cycles. You can cancel your subscription plan at any time. Cancelled plans will remain active until the end of the current billing cycle, and no partial-month refunds are provided.
          </p>
        </div>

        {/* Refund Processing */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            3. Refund Process & Processing Time
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            If a refund request is evaluated and approved under the terms of your contract, the refund will be processed back to the original payment source within 10 to 14 business days.
          </p>
        </div>

        {/* Contact info */}
        <div className="space-y-3 pt-6 border-t border-slate-100 text-center sm:text-left">
          <h3 className="font-bold text-slate-900 text-sm">Have billing questions?</h3>
          <p className="text-xs text-slate-500">
            For support regarding invoices or billing questions, email us at{" "}
            <a href="mailto:official.gamanext@gmail.com" className="text-blue-600 font-bold hover:underline">
              official.gamanext@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
