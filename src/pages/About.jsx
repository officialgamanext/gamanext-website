import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import '../css/About.css';

export default function About() {
  const whyChooseUs = [
    "Holistic approach from design to deployment",
    "Expertise in cutting-edge AI and automation",
    "Custom-tailored solutions, no forced templates",
    "Commitment to scalable and secure architectures",
    "Dedicated ongoing support and maintenance"
  ];

  return (
    <div className="page-content inner-page border-t-divide">
      <div className="section-container max-w-5xl">
        <div className="page-header center pt-24 pb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">About <span className="text-blue">Gamanext</span></h1>
          <p className="page-desc text-xl leading-relaxed text-muted-dark">We are a forward-thinking software company dedicated to building the tools that define tomorrow. At Gamanext, innovation is not just a buzzword; it's our foundational architecture.</p>
        </div>

        <div className="about-grid pb-24 grid md:grid-cols-2 gap-12">
          <div className="about-col">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-dark leading-relaxed mb-4">To empower businesses of all sizes with enterprise-grade technology. We believe that robust software, intelligent AI, and stunning design should be accessible, scalable, and tailored to individual business needs.</p>
            <p className="text-muted-dark leading-relaxed">We strive to bridge the gap between complex technological capabilities and practical, everyday business utility, delivering solutions that are as intuitive as they are powerful.</p>
          </div>
          
          <div className="about-col bg-card border rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {whyChooseUs.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 size={24} className="text-blue flex-shrink-0" />
                  <span className="font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
