import React from "react";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto text-center space-y-6">
      <div className="inline-flex items-center justify-center p-4 bg-sky-50 text-sky-600 rounded-2xl">
        <Newspaper className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Latest Insights & Blog
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600">
        Stay updated with trends in web development, AI automation, digital marketing, and brand strategies.
      </p>
      <div className="pt-4">
        <div className="inline-block p-6 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-md">
          <p className="text-slate-500 text-sm font-medium">
            Page under active construction. Full blog articles will be published here soon.
          </p>
        </div>
      </div>
      <div className="pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition-colors"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
