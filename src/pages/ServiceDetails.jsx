import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { MessageSquare, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import '../css/ServiceDetails.css';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="page-content inner-page border-t-divide pb-24 text-center">
        <div className="section-container" style={{paddingTop: '100px'}}>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-dark mb-8">The service you are looking for does not exist.</p>
          <Link to="/services" className="btn-primary">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content inner-page border-t-divide pb-0">
      
      {/* Hero Section */}
      <div className="section-container" style={{marginTop: '48px', marginBottom: '48px'}}>
        <div className="sd-hero">
          <div className="sd-breadcrumb">
            HOME <span>•</span> SERVICES <span>•</span> {service.name.toUpperCase()}
          </div>
          <h1 className="text-blue text-lg font-bold mb-4">{service.name}</h1>
          <h2 className="sd-hero-title">{service.subtitle}</h2>
          <p className="sd-hero-desc">{service.description}</p>
          
          <div className="sd-hero-buttons">
            <Link to="/contact" className="btn-primary flex items-center gap-2 justify-center">
              Chat with Us <MessageSquare size={18} />
            </Link>
            <Link to="/contact" className="btn-outline text-black border-black hover:bg-gray-100 flex items-center gap-2 justify-center">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Sub-Services Block */}
      <div className="section-container pb-24" style={{marginTop: '48px', marginBottom: '48px'}}>
        <h3 className="sd-section-title">{service.subServicesTitle}</h3>
        <div className="sd-grid">
          {service.subServices.map((sub, idx) => (
            <div className="sd-card" key={idx}>
              <h4 className="font-bold text-xl mb-3 text-blue">{sub.title}</h4>
              <p className="text-muted-light line-height-1.6">{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Block */}
      <div className="section-container pb-24" style={{marginTop: '48px', marginBottom: '48px'}}>
        <h3 className="sd-section-title">{service.whyChooseTitle}</h3>
        <div className="sd-grid">
          {service.whyChoose.map((reason, idx) => (
            <div className="sd-card" key={idx}>
              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-blue flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-2">{reason.title}</h4>
                  <p className="text-muted-light line-height-1.6">{reason.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Block */}
      <div className="sd-process-wrapper">
        <div className="section-container" style={{marginTop: '48px', marginBottom: '48px'}}>
          <h3 className="sd-section-title mb-16">Our Process</h3>
          <div className="sd-process-grid">
            {service.process.map((proc, idx) => (
              <div className="sd-process-card" key={idx}>
                <div className="sd-process-step">{proc.step}</div>
                <h4 className="font-bold text-xl mb-3">{proc.title}</h4>
                <p className="text-gray-400 line-height-1.6 text-sm">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Block */}
      <div className="section-container pt-24 pb-24" style={{marginTop: '48px', marginBottom: '48px'}}>
        <h3 className="sd-section-title">What We Track & Improve</h3>
        <div className="sd-metrics-grid">
          {service.metrics.map((metric, idx) => (
            <div className="sd-metric-card" key={idx}>
              <TrendingUp size={32} className="text-blue mx-auto mb-6" />
              <h4 className="font-bold text-lg mb-2">{metric.title}</h4>
              <p className="text-muted-light text-sm">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
