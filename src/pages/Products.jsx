import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { productsData } from '../data/productsData';
import '../css/Products.css';

export default function Products() {
  return (
    <div className="page-content inner-page products-page">
      <div className="section-container">
        <div className="page-header center pt-24 pb-16 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Innovative <span className="text-blue">Products</span></h1>
          <p className="page-desc text-xl max-w-3xl mx-auto text-muted-dark leading-relaxed">
            Discover our suite of specialized software solutions designed to streamline your business operations and drive efficiency.
          </p>
        </div>

        <div className="products-grid pb-24">
          {productsData.map((product, index) => (
            <div className="product-card-premium" key={product.id}>
              <div className="product-card-inner">
                <div className="product-card-header">
                  <div className="product-icon-wrapper" style={{ backgroundColor: `${product.color}20`, color: product.color }}>
                    <product.icon size={32} />
                  </div>
                  <div className="product-badge">{product.category}</div>
                </div>
                
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-features-list">
                  <h4 className="features-title">Key Features</h4>
                  <ul>
                    {product.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} className="text-blue" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="product-card-footer">
                  <button className="btn-product-demo">
                    Request Demo <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="custom-software-cta">
          <div className="cta-inner">
            <h2 className="cta-title">Need a Tailored Solution?</h2>
            <p className="cta-description">
              If our standard products don't meet your specific needs, we can build a bespoke software architecture from the ground up designed specifically for your business workflow.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary">
                Talk to Our Experts <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
