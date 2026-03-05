import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { megaMenuStructure, servicesData } from '../data/servicesData';
import '../css/Services.css';

export default function Services() {
  return (
    <div className="page-content inner-page border-t-divide">
      <div className="section-container">
        <div className="page-header center pt-24 pb-12">
          <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-blue">Services</span></h1>
          <p className="page-desc text-xl max-w-3xl mx-auto text-muted-dark leading-relaxed">
            End-to-end technological and digital solutions designed to accelerate your business growth. From intelligent web development to captivating digital experiences, explore our full suite of solutions.
          </p>
        </div>

        {Object.entries(megaMenuStructure).map(([category, items], catIndex) => (
          <div className="services-category pb-20" key={category}>
            <div className="mb-10 text-center">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
               <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
            </div>
            
            <div className="detailed-services-grid">
              {items.map((item, index) => {
                const service = servicesData[item.slug];
                if (!service) return null;
                
                return (
                  <div className="detailed-service-card bg-card border rounded-3xl p-8 transition-all duration-300" style={{display: 'flex', flexDirection: 'column'}} key={index}>
                    <div className="detailed-service-header mb-6">
                      <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                      <p className="text-muted-dark leading-relaxed text-sm mb-2">{service.description.substring(0, 150)}...</p>
                    </div>
                    
                    <ul className="service-features mt-2 space-y-3 mb-6 flex-grow">
                      {service.subServices.slice(0, 3).map((subService, i) => (
                        <li key={i} className="flex gap-3 items-center text-sm font-medium">
                          <CheckCircle2 size={18} className="text-blue flex-shrink-0" />
                          <span>{subService.title}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <Link to={'/services/' + item.slug} className="text-blue font-semibold hover:underline flex items-center gap-2">
                        View Full Service Details &rarr;
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
