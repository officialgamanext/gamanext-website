import fs from 'fs';

const categories = {
  "WEBSITE SERVICES": [
    { title: "Web Designing & Development", slug: "web-designing" },
    { title: "Custom Web Development", slug: "custom-web-development" },
    { title: "E-Commerce Development", slug: "e-commerce-development" },
    { title: "CMS Development", slug: "cms-development" },
    { title: "Responsive Web Design", slug: "responsive-web-design" },
    { title: "Landing Page Design", slug: "landing-page-design" },
    { title: "Website Redesign", slug: "website-redesign" },
    { title: "Web Maintenance", slug: "web-maintenance" }
  ],
  "DIGITAL MARKETING": [
    { title: "Digital Marketing & SEO", slug: "digital-marketing" },
    { title: "SEO Services", slug: "seo-services" },
    { title: "Social Media Marketing", slug: "social-media-marketing" },
    { title: "PPC Advertising", slug: "ppc-advertising" },
    { title: "Content Marketing", slug: "content-marketing" },
    { title: "Email Marketing", slug: "email-marketing" },
    { title: "Influencer Marketing", slug: "influencer-marketing" },
    { title: "Online Reputation Management", slug: "online-reputation-management" },
    { title: "Marketing Analytics", slug: "marketing-analytics" }
  ],
  "CREATIVE & BRANDING": [
    { title: "Logo Design", slug: "logo-design" },
    { title: "Brand Identity", slug: "brand-identity" },
    { title: "Graphic Design", slug: "graphic-design" },
    { title: "UI/UX Design", slug: "ui-ux-design" },
    { title: "Video Production", slug: "video-production" },
    { title: "Animation Services", slug: "animation-services" },
    { title: "Print Design", slug: "print-design" }
  ],
  "BUSINESS & AI SOLUTIONS": [
    { title: "AI Tools Development", slug: "ai-tools" },
    { title: "Automatic Chatbots", slug: "automatic-chatbots" },
    { title: "Custom Software (ERP/CRM)", slug: "custom-software" },
    { title: "Billing & Invoicing Software", slug: "billing-software" },
    { title: "Business Consulting", slug: "business-consulting" },
    { title: "IT Consulting", slug: "it-consulting" },
    { title: "CRM Solutions", slug: "crm-solutions" },
    { title: "ERP Solutions", slug: "erp-solutions" },
    { title: "Cloud Services", slug: "cloud-services" },
    { title: "Cybersecurity", slug: "cybersecurity" },
    { title: "Mobile App Development", slug: "mobile-app-development" }
  ]
};

const customServices = {
  "ai-tools": {
    name: "AI Tools Development",
    iconName: "Cpu",
    subtitle: "Automate intelligently, Decide faster, Grow exponentially",
    description: "Embrace the future with Gamanext's custom artificial intelligence solutions. Our machine learning models and predictive analytics tools help businesses automate complex workflows, uncover deep data insights, and maintain a sharp competitive edge.",
    subServicesTitle: "Our AI Services",
    subServices: [
       { title: "Machine Learning Models", desc: "Train intelligent models on your proprietary data to automate decision-making." }, 
       { title: "Predictive Analytics", desc: "Forecast trends, customer behaviors, and market shifts with high accuracy." },
       { title: "Natural Language Processing", desc: "Extract insights from text and speech or build intelligent sentiment analysis." },
       { title: "Computer Vision", desc: "Implement image recognition and visual analysis systems into your products." }
    ],
    whyChooseTitle: "Why Choose Gamanext for AI?",
    whyChoose: [
       { title: "Proven Accuracy", desc: "Rigorous testing ensures our AI models deliver precise and reliable results." },
       { title: "Seamless Integration", desc: "We deploy AI smoothly into your existing software and business operations." },
       { title: "Data Security First", desc: "Your proprietary data is encrypted and handled with enterprise-grade security." },
       { title: "Scalable Architecture", desc: "Our AI systems effortlessly scale as your business and data requirements grow." }
    ],
    process: [
      { step: "01", title: "Data Discovery", desc: "We analyze your business goals and existing data infrastructure." },
      { step: "02", title: "Model Design", desc: "We architect algorithms tailored for your specific use cases." },
      { step: "03", title: "Training & Testing", desc: "Rigorous model training and validation to guarantee high performance." },
      { step: "04", title: "Deployment", desc: "Seamless launch, integration, and continuous monitoring of the AI." }
    ],
    metrics: [
      { title: "Process Automation", desc: "Reduce manual tasks and hours" },
      { title: "Decision Accuracy", desc: "Improve data-driven outcomes" },
      { title: "Operational Costs", desc: "Lower overhead across departments" },
      { title: "Revenue Uplift", desc: "Identify and convert new opportunities" }
    ]
  },
  "custom-software": {
    name: "Custom Software (ERP/CRM)",
    iconName: "Code",
    subtitle: "Bespoke software built perfectly for your unique workflows",
    description: "Off-the-shelf software doesn't always fit. Gamanext develops tailored Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems that align perfectly with your unique operational workflows, maximizing efficiency and eliminating data silos.",
    subServicesTitle: "Our Custom Software Solutions",
    subServices: [
       { title: "Enterprise Resource Planning", desc: "Connect all your functional departments into a single source of truth." }, 
       { title: "Customer Relationship", desc: "Manage leads, sales, and support securely inside custom CRM software." },
       { title: "Legacy Modernization", desc: "Upgrade and migrate outdated systems to secure, cloud-native architectures." },
       { title: "Third-Party Integrations", desc: "Connect your software seamlessly via custom API development." }
    ],
    whyChooseTitle: "Why Choose Gamanext for Custom Software?",
    whyChoose: [
       { title: "Perfect Fit", desc: "We map your exact business logic directly into the software's DNA." },
       { title: "Scalability", desc: "Systems designed to handle an unlimited scale of data and users." },
       { title: "Rapid Deployment", desc: "Agile development methodology ensures fast delivery without compromising quality." },
       { title: "Dedicated Support", desc: "Ongoing maintenance, updates, and 24/7 technical support." }
    ],
    process: [
      { step: "01", title: "Requirement Gathering", desc: "Deep dive into your business operations and pain points." },
      { step: "02", title: "System Architecture", desc: "Wireframing and database structuring based on defined goals." },
      { step: "03", title: "Agile Development", desc: "Iterative coding, sprint cycles, and constant feedback loops." },
      { step: "04", title: "Testing & Launch", desc: "Quality assurance, beta testing, followed by a smooth go-live." }
    ],
    metrics: [
      { title: "Workflow Speed", desc: "Accelerate daily operational tasks" },
      { title: "Data Visibility", desc: "Gain unified business insights" },
      { title: "User Adoption", desc: "High engagement through great UX" },
      { title: "System Uptime", desc: "Reliable 99.9% application stability" }
    ]
  },
  "web-designing": {
    name: "Web Designing & Development",
    iconName: "Layout",
    subtitle: "High-performance websites that represent your brand's true value",
    description: "Your digital storefront needs to be exceptional. Gamanext designs and develops aesthetically pleasing, fast, and conversion-optimized websites that turn casual browsers into loyal customers. We blend stunning UI/UX with robust frontend and backend technologies.",
    subServicesTitle: "Our Web Services",
    subServices: [
       { title: "UI/UX Design", desc: "Create stunning, intuitive interfaces built on user psychology." }, 
       { title: "Responsive Web Apps", desc: "Complex web applications that feel like native software." },
       { title: "E-Commerce Platforms", desc: "Build highly converting online stores with secure checkout limits." },
       { title: "CMS Development", desc: "Easily manage your content with custom WordPress or Headless CMS." }
    ],
    whyChooseTitle: "Why Choose Gamanext for Web Design?",
    whyChoose: [
       { title: "Mobile-First Approach", desc: "Your site will look flawless and function perfectly on any device." },
       { title: "Lightning Fast", desc: "Optimized code and assets for rapid loading speeds and better Core Web Vitals." },
       { title: "SEO Friendly", desc: "Built with clean semantic HTML and structured data out of the box." },
       { title: "High Conversion Focus", desc: "Strategic placement of CTAs and copy to maximize lead generation." }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understand your brand, audience, and primary competitors." },
      { step: "02", title: "Wireframing & UI", desc: "Create structural mockups followed by high-fidelity design." },
      { step: "03", title: "Development", desc: "Write clean, scalable code connected to a robust backend system." },
      { step: "04", title: "QA & Launch", desc: "Cross-browser testing, performance checks, and final server deployment." }
    ],
    metrics: [
      { title: "Load Time", desc: "Achieve near-instant page renders" },
      { title: "Bounce Rate", desc: "Keep users engaged on your site" },
      { title: "Mobile Traffic", desc: "Capture users on smartphones" },
      { title: "Lead Generation", desc: "Increase form fills and calls" }
    ]
  },
  "digital-marketing": {
    name: "Digital Marketing & SEO Services",
    iconName: "TrendingUp",
    subtitle: "Rank Higher, Get More Traffic, Grow Your Business",
    description: "Dominate search engine results with Gamanext's comprehensive digital marketing and SEO services. Our data-driven strategies and proven techniques help businesses increase organic visibility, drive qualified traffic, and achieve sustainable growth. From technical optimization to content strategy, we handle every aspect of your success.",
    subServicesTitle: "Our Marketing Services",
    subServices: [
       { title: "On-Page SEO", desc: "Optimize content, meta tags, headers, and internal linking for better search rankings." },
       { title: "Technical SEO", desc: "Fix crawl errors, improve site speed, mobile optimization, and structured data implementation." },
       { title: "Off-Page SEO", desc: "Build high-quality backlinks and improve domain authority through strategic link building." },
       { title: "Content Strategy", desc: "Create SEO-optimized content that ranks well and engages your target audience." }
    ],
    whyChooseTitle: "Why Choose Gamanext for Digital Marketing?",
    whyChoose: [
       { title: "Proven Results", desc: "Track record of improving rankings and driving organic traffic growth." },
       { title: "White Hat Techniques", desc: "Ethical SEO practices that comply with search engine guidelines." },
       { title: "Transparent Reporting", desc: "Detailed monthly reports showing progress, rankings, and traffic metrics." },
       { title: "Customized Strategy", desc: "Tailored approach based on your specific industry, competition, and goals." }
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "Comprehensive analysis of your website's current SEO performance." },
      { step: "02", title: "Strategy Development", desc: "Create customized SEO roadmap based on audit findings and goals." },
      { step: "03", title: "Implementation", desc: "Execute on-page, technical, and off-page SEO optimizations." },
      { step: "04", title: "Monitor & Optimize", desc: "Track results, analyze data, and continuously improve strategies." }
    ],
    metrics: [
      { title: "Organic Traffic", desc: "Increase visitors from search engines" },
      { title: "Keyword Rankings", desc: "Improve positions for target keywords" },
      { title: "Domain Authority", desc: "Build website credibility and trust" },
      { title: "Conversion Rate", desc: "Turn visitors into customers" }
    ]
  },
  "automatic-chatbots": {
    name: "Automatic Chatbots",
    iconName: "Bot",
    subtitle: "Enhance customer engagement with intelligent, 24/7 AI chatbots",
    description: "Never miss a lead or leave a customer waiting again. Gamanext develops highly capable, conversational AI chatbots capable of handling inquiries, processing orders, and providing empathetic support across all your platforms without human intervention.",
    subServicesTitle: "Our Chatbot Solutions",
    subServices: [
       { title: "Customer Support Bots", desc: "Resolve tier-1 and tier-2 customer support tickets instantly, 24/7." }, 
       { title: "Lead Generation Bots", desc: "Qualify website visitors and capture contact information conversationally." },
       { title: "E-Commerce Assistants", desc: "Recommend products, track orders, and process payments inside the chat." },
       { title: "Omnichannel Deployment", desc: "Deploy seamlessly on WhatsApp, Messenger, your website, and SMS." }
    ],
    whyChooseTitle: "Why Choose Gamanext for Chatbots?",
    whyChoose: [
       { title: "NLP Driven", desc: "Our bots understand human intent, typos, and nuanced questioning easily." },
       { title: "Human Handoff", desc: "Seamlessly routes highly complex queries to live human agents without friction." },
       { title: "Custom Personalities", desc: "Bots crafted to speak exactly in your brand's unique tone and voice." },
       { title: "Data Analytics", desc: "Rich dashboards showing conversation flows, drop-offs, and user sentiment." }
    ],
    process: [
      { step: "01", title: "Conversation Mapping", desc: "We design logic trees and map out optimal user conversational flows." },
      { step: "02", title: "Bot Training", desc: "Train the NLP engine using your actual historical customer data." },
      { step: "03", title: "Integration", desc: "Connect the bot directly into your CRM, database, and messaging platforms." },
      { step: "04", title: "Optimization", desc: "Review chat logs constantly to train the bot on missing intents and queries." }
    ],
    metrics: [
      { title: "Response Time", desc: "Reduce wait times to 0 seconds" },
      { title: "Resolution Rate", desc: "Solve issues without human agents" },
      { title: "Support Costs", desc: "Reduce expenditure on massive teams" },
      { title: "Customer Satisfaction", desc: "Keep users happy with instant help" }
    ]
  },
  "billing-software": {
    name: "Billing & Invoicing Software",
    iconName: "MessageSquare",
    subtitle: "Streamline your financial operations securely and effortlessly",
    description: "Take control of your cash flow. Gamanext creates intuitive, ultra-secure billing and invoicing software that automates payment collection, manages subscriptions, tracks expenses, and provides real-time financial reporting for your business.",
    subServicesTitle: "Our Billing Features",
    subServices: [
       { title: "Automated Invoicing", desc: "Generate and send perfectly branded invoices on flexible recurring schedules." }, 
       { title: "Payment Gateways", desc: "Direct integration with Stripe, PayPal, Razorpay, or your preferred bank." },
       { title: "Expense Tracking", desc: "Capture receipts, categorize spending, and balance your books instantly." },
       { title: "Subscription Management", desc: "Handle upgrades, downgrades, prorations, and cancellations automatically." }
    ],
    whyChooseTitle: "Why Choose Gamanext for Billing Software?",
    whyChoose: [
       { title: "Bank-Grade Security", desc: "PCI-DSS compliance and high-level encryption for all financial data." },
       { title: "Tax Compliance", desc: "Automatic calculation of regional taxes, GST, VAT, and comprehensive reporting." },
       { title: "User-Friendly", desc: "A beautiful, clean interface that requires absolutely zero accounting background." },
       { title: "API Accessibility", desc: "Connect your billing data easily to your custom software or external apps." }
    ],
    process: [
      { step: "01", title: "Needs Assessment", desc: "Analyze your pricing models, tax liabilities, and payment gateways." },
      { step: "02", title: "System Configuration", desc: "Set up the rules, templates, and backend architecture." },
      { step: "03", title: "Gateway Integration", desc: "Securely connect the platform to live banking and payment networks." },
      { step: "04", title: "Data Migration", desc: "Safely port your historical financial data into the new platform." }
    ],
    metrics: [
      { title: "Payment Speed", desc: "Get invoices paid significantly faster" },
      { title: "Churn Rate", desc: "Reduce involuntary payment failures" },
      { title: "Time Saved", desc: "Eliminate manual data entry hours" },
      { title: "Financial Clarity", desc: "Real-time transparent cash flow" }
    ]
  }
};

let output = `import React from 'react';\nimport { Code, Layout, Bot, TrendingUp, Presentation, Globe, Shield, Smartphone } from 'lucide-react';\n\n`;
output += `export const servicesData = {\n`;

// First append the 6 custom services
for (const [slug, data] of Object.entries(customServices)) {
    
    // Find category for the custom service
    let category = "BUSINESS & AI SOLUTIONS";
    for(const [cat, items] of Object.entries(categories)) {
        if(items.find(i => i.slug === slug)) {
            category = cat;
            break;
        }
    }

    output += `  "${slug}": ${JSON.stringify({...data, category}, null, 4)},\n`;
}

// Then dynamically generate the remaining services
for (const [cat, items] of Object.entries(categories)) {
  for (const item of items) {
    if (customServices[item.slug]) continue; // Skip the ones we already did
    
    if (item.slug === 'seo-services') {
        output += `  "${item.slug}": {
    name: "SEO Services",
    category: "${cat}",
    iconName: "TrendingUp",
    subtitle: "Rank Higher, Get More Traffic, Grow Your Business",
    description: "Dominate search engine results with Gamanext's comprehensive SEO services. Our data-driven strategies and proven techniques help businesses increase organic visibility, drive qualified traffic, and achieve sustainable growth. From technical optimization to content strategy, we handle every aspect of your SEO success.",
    subServicesTitle: "Our SEO Services",
    subServices: [
       { title: "On-Page SEO", desc: "Optimize content, meta tags, headers, and internal linking for better search rankings." }, 
       { title: "Technical SEO", desc: "Fix crawl errors, improve site speed, mobile optimization, and structured data implementation." },
       { title: "Off-Page SEO", desc: "Build high-quality backlinks and improve domain authority through strategic link building." },
       { title: "Local SEO", desc: "Optimize for local searches, Google My Business, and location-based keywords." },
       { title: "Keyword Research", desc: "Identify profitable keywords with high search volume and low competition." },
       { title: "Content Strategy", desc: "Create SEO-optimized content that ranks well and engages your target audience." }
    ],
    whyChooseTitle: "Why Choose Gamanext for SEO?",
    whyChoose: [
       { title: "Proven Results", desc: "Track record of improving rankings and driving organic traffic growth." },
       { title: "White Hat Techniques", desc: "Ethical SEO practices that comply with search engine guidelines." },
       { title: "Transparent Reporting", desc: "Detailed monthly reports showing progress, rankings, and traffic metrics." },
       { title: "Customized Strategy", desc: "Tailored SEO approach based on your industry, competition, and goals." }
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "Comprehensive analysis of your website's current SEO performance." },
      { step: "02", title: "Strategy Development", desc: "Create customized SEO roadmap based on audit findings and goals." },
      { step: "03", title: "Implementation", desc: "Execute on-page, technical, and off-page SEO optimizations." },
      { step: "04", title: "Monitor & Optimize", desc: "Track results, analyze data, and continuously improve strategies." }
    ],
    metrics: [
      { title: "Organic Traffic", desc: "Increase visitors from search engines" },
      { title: "Keyword Rankings", desc: "Improve positions for target keywords" },
      { title: "Domain Authority", desc: "Build website credibility and trust" },
      { title: "Conversion Rate", desc: "Turn visitors into customers" }
    ]
  },\n`;
    } else {
        output += `  "${item.slug}": {
    name: "${item.title}",
    category: "${cat}",
    iconName: "Layout",
    subtitle: "Professional ${item.title} to grow your business",
    description: "Our comprehensive ${item.title} services help businesses adapt, scale, and thrive in the modern landscape. We tailor our approach to meet your specific goals and drive measurable results.",
    subServicesTitle: "Our ${item.title} Offerings",
    subServices: [
       { title: "Strategy & Planning", desc: "We develop a custom strategy designed to align with your business objectives." }, 
       { title: "Implementation", desc: "Seamless execution of the plan using industry best practices and tools." },
       { title: "Ongoing Optimization", desc: "Continuous improvements to ensure maximum performance and returns." },
       { title: "Management & Support", desc: "Dedicated support to keep your operations running smoothly at all times." }
    ],
    whyChooseTitle: "Why Choose Us for ${item.title}?",
    whyChoose: [
       { title: "Expertise You Can Trust", desc: "Years of experience delivering top-tier solutions in this domain." },
       { title: "Tailored Solutions", desc: "We don't believe in one-size-fits-all; everything is customized to you." },
       { title: "Transparent Reporting", desc: "Full visibility into our processes and the results we are driving." },
       { title: "Client First Approach", desc: "Your success is our primary goal, and we prioritize your needs." }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Understanding your current position, challenges, and goals." },
      { step: "02", title: "Strategy", desc: "Crafting a detailed roadmap tailored to your specific requirements." },
      { step: "03", title: "Execution", desc: "Deploying the strategy with precision and agility." },
      { step: "04", title: "Evaluation", desc: "Measuring performance and refining the approach for sustained success." }
    ],
    metrics: [
      { title: "Performance", desc: "Boost efficiency and output" },
      { title: "Conversion", desc: "Turn prospects into partners" },
      { title: "Retention", desc: "Keep your audience engagement high" },
      { title: "ROI", desc: "Maximize return on investment" }
    ]
  },\n`;
    }
  }
}

output += `};\n\n`;
output += `export const megaMenuStructure = ${JSON.stringify(categories, null, 2)};\n`;

fs.writeFileSync('c:\\\\Users\\\\Arumulla SivaKrishna\\\\Desktop\\\\GamaNext Projects\\\\gamanext-website\\\\src\\\\data\\\\servicesData.js', output);
console.log('Done generating servicesData with ALL old properties kept safely!');
