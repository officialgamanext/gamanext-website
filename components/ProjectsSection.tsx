"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Websites",
    subtitle: "Fashion Store",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "CRM Software",
    category: "Software",
    subtitle: "Business Solution",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Branding",
    subtitle: "Logo & Branding",
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "AI Chatbot Solution",
    category: "Software",
    subtitle: "Customer Support Bot",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeTab ||
            (activeTab === "E-Commerce" && p.subtitle.includes("Fashion"))
        );

  return (
    <div className="space-y-8 pt-8 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            OUR WORK SPEAKS
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 p-1.5 rounded-full text-xs font-semibold">
          {["All", "Websites", "E-Commerce", "Software", "Branding"].map(
            (tab) => (
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
            )
          )}
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
                <h4 className="font-bold text-slate-900 text-sm">
                  {project.title}
                </h4>
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
  );
}
