import React from 'react';
import { Bot, Code, Cpu, Layout, MessageSquare, CheckCircle2, TrendingUp } from 'lucide-react';
import '../css/Services.css';

export default function Services() {
  const detailedServices = [
    {
      icon: <Cpu size={40} strokeWidth={1.5} />,
      title: "AI Tools Development",
      description: "Leverage the power of artificial intelligence. We build custom AI solutions including predictive analytics models, machine learning algorithms, and intelligent data processing tools designed to automate tasks and provide deep business insights.",
      features: ["Machine Learning Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: <Code size={40} strokeWidth={1.5} />,
      title: "Custom Software (ERP/CRM)",
      description: "Off-the-shelf software doesn't always fit. We develop tailored Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems that align perfectly with your unique operational workflows.",
      features: ["Custom ERP Systems", "Scalable CRM Solutions", "Legacy System Integration", "Cloud-Native Architecture"]
    },
    {
      icon: <Layout size={40} strokeWidth={1.5} />,
      title: "Web Designing & Development",
      description: "Your digital storefront needs to be exceptional. We design and develop high-performance, aesthetically pleasing, and conversion-optimized websites that represent your brand's true value.",
      features: ["UI/UX Design", "Responsive Web Apps", "E-commerce Platforms", "Content Management Systems"]
    },
    {
      icon: <TrendingUp size={40} strokeWidth={1.5} />,
      title: "Digital Marketing",
      description: "Amplify your reach. Our data-driven digital marketing strategies ensure your brand gets in front of the right audience, driving traffic, engagement, and verifiable ROI.",
      features: ["SEO Optimization", "Performance Marketing", "Social Media Strategy", "Conversion Rate Optimization"]
    },
    {
      icon: <Bot size={40} strokeWidth={1.5} />,
      title: "Automatic Chatbots",
      description: "Enhance customer engagement with intelligent, 24/7 AI chatbots. Capable of handling inquiries, processing orders, and providing support without human intervention.",
      features: ["AI-Powered Conversations", "Multi-platform Integration", "Automated Workflows", "Sentiment Analysis"]
    },
    {
      icon: <MessageSquare size={40} strokeWidth={1.5} />,
      title: "Billing & Invoicing Software",
      description: "Streamline your financial operations with secure, fast, and intuitive billing software. Automate invoices, track payments, and manage subscriptions effortlessly.",
      features: ["Automated Invoicing", "Payment Gateway Integration", "Financial Reporting", "Subscription Management"]
    }
  ];

  return (
    <div className="page-content inner-page border-t-divide">
      <div className="section-container">
        <div className="page-header center pt-24 pb-20">
          <h1 className="text-5xl font-extrabold mb-6">Our <span className="text-blue">Services</span></h1>
          <p className="page-desc text-xl max-w-3xl mx-auto text-muted-dark leading-relaxed">End-to-end technological solutions designed to accelerate your business growth, from intelligent algorithms to captivating digital experiences.</p>
        </div>

        <div className="detailed-services-grid pb-24">
          {detailedServices.map((service, index) => (
            <div className="detailed-service-card bg-card border rounded-3xl p-8 transition-all duration-300" key={index}>
              <div className="detailed-service-header mb-6">
                <div className="service-icon-lg bg-blue-10/10 text-blue mb-6 w-16 h-16 rounded-2xl flex items-center justify-center p-3">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-dark leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="service-features mt-6 space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-medium">
                    <CheckCircle2 size={18} className="text-blue flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
