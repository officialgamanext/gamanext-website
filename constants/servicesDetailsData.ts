export interface SubServiceOffering {
    id: string;
    title: string;
    badge: string;
    shortDesc: string;
    description: string;
    highlights: string[];
    technologies: string[];
    deliverables: string[];
}

export interface ServiceDetailData {
    slug: string;
    badge: string;
    title: string;
    subtitle: string;
    themeColor: string;
    heroDesc: string;
    stats: { value: string; label: string }[];
    overview: string;
    offeringsTitle: string;
    offeringsSubtitle: string;
    offerings: SubServiceOffering[];
    whyChooseList: { title: string; desc: string }[];
    processSteps: { step: string; title: string; desc: string }[];
    demoHighlights: string[];
}

export const SERVICES_DETAILS: Record<string, ServiceDetailData> = {
    development: {
        slug: "development",
        badge: "DEVELOPMENT",
        title: "Software & Web Development Solutions",
        subtitle: "High-Performance Websites, Mobile Apps & Enterprise Cloud Platforms",
        themeColor: "#2563eb",
        heroDesc:
            "From high-converting web applications and native mobile apps to mission-critical CRM/ERP ecosystems, Gamanext builds modern, resilient, and scalable digital solutions tailored to accelerate your business growth.",
        stats: [
            { value: "100+", label: "Projects Delivered" },
            { value: "99.9%", label: "Uptime Reliability" },
            { value: "4x", label: "Faster Deployment" },
            { value: "24/7", label: "Technical Support" },
        ],
        overview:
            "Our engineering team uses industry-leading architectures, cloud infrastructure, and modern frameworks to transform complex requirements into fast, secure, and beautiful software. Whether you need a brand-new MVP or an enterprise overhaul, we ensure end-to-end execution with clean code and high performance.",
        offeringsTitle: "Comprehensive Development Services",
        offeringsSubtitle: "Explore our specialized software engineering capabilities built for modern enterprises.",
        offerings: [
            {
                id: "web-development",
                title: "Website & Web Application Development",
                badge: "FRONTEND & BACKEND",
                shortDesc: "Ultra-fast, responsive web applications engineered for seamless conversion and scale.",
                description:
                    "We architect lightning-fast web applications and customer-facing portals using modern frameworks like Next.js, React, and Node.js. Optimized for Core Web Vitals, enterprise security, and responsive performance across all screen sizes.",
                highlights: [
                    "Next.js App Router & SSR Performance",
                    "Progressive Web App (PWA) Capabilities",
                    "Restful APIs & GraphQL Integrations",
                    "Enterprise SEO & Core Web Vitals Optimization",
                ],
                technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
                deliverables: [
                    "Production-ready responsive web application",
                    "CMS & Admin dashboard integration",
                    "Complete source code & CI/CD deployment",
                    "Comprehensive API documentation",
                ],
            },
            {
                id: "mobile-development",
                title: "Mobile App Development (iOS & Android)",
                badge: "MOBILE APPS",
                shortDesc: "Native and cross-platform mobile apps with fluid animations and offline sync.",
                description:
                    "Deliver delightful mobile experiences to your users. We build high-performance mobile applications using React Native and Flutter, ensuring native performance, rapid release cycles, and intuitive UI on both Apple App Store and Google Play Store.",
                highlights: [
                    "Single codebase for iOS and Android",
                    "Native hardware feature integrations (Camera, GPS, Biometrics)",
                    "Offline-first architecture with local data caching",
                    "App Store & Play Store publishing assistance",
                ],
                technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux Toolkit"],
                deliverables: [
                    "Published iOS and Android builds",
                    "Push notification setup & analytics tracking",
                    "App store review submission package",
                    "Post-launch bug fix warranty",
                ],
            },
            {
                id: "custom-software",
                title: "Custom Software & Cloud Solutions",
                badge: "ENTERPRISE SOFTWARE",
                shortDesc: "Bespoke software systems designed around your proprietary business workflows.",
                description:
                    "Off-the-shelf software often forces you to compromise your business logic. We design custom cloud software, microservices, and automated data pipelines that eliminate bottlenecks and streamline internal operations.",
                highlights: [
                    "Custom business logic & rules engine",
                    "Microservices & event-driven cloud architecture",
                    "Role-based access control (RBAC) & security compliance",
                    "Automated cloud backup & disaster recovery",
                ],
                technologies: ["Docker", "AWS", "Google Cloud", "Python", "Go", "Redis", "MongoDB"],
                deliverables: [
                    "Custom backend architecture & cloud database",
                    "Scalable cloud deployment scripts",
                    "Automated data migration pipelines",
                    "User access management suite",
                ],
            },
            {
                id: "crm-erp",
                title: "CRM & ERP Solutions",
                badge: "BUSINESS MANAGEMENT",
                shortDesc: "Unified business management systems for inventory, customer lifecycle, and finances.",
                description:
                    "Empower your teams with real-time operational visibility. We construct bespoke CRM and ERP platforms that synchronize sales pipelines, inventory, automated invoicing, customer communications, and executive reporting in a single unified interface.",
                highlights: [
                    "Real-time sales tracking & deal pipeline management",
                    "Inventory control & automated purchase orders",
                    "Billing, invoices, and payment gateway sync",
                    "Custom KPI dashboards & executive analytics",
                ],
                technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Stripe", "Razorpay", "Chart.js"],
                deliverables: [
                    "Custom-branded CRM/ERP dashboard",
                    "Automated email & SMS notification triggers",
                    "Role-specific permission settings",
                    "Staff onboarding and training walkthrough",
                ],
            },
        ],
        whyChooseList: [
            {
                title: "Experienced & Skilled Engineers",
                desc: "Senior full-stack developers and solution architects dedicated to clean, maintainable code standards.",
            },
            {
                title: "Custom Solutions for Your Business",
                desc: "Zero cookie-cutter templates; every architecture is customized to your operational goals.",
            },
            {
                title: "On-Time Delivery, Every Time",
                desc: "Rigorous agile sprints and scheduled milestone demos keep your launch strictly on track.",
            },
            {
                title: "Transparent Communication",
                desc: "Direct communication with engineering leads, live staging environments, and weekly progress reports.",
            },
            {
                title: "Affordable Pricing & Max ROI",
                desc: "Transparent milestone-based pricing without hidden costs, delivering enterprise value at competitive rates.",
            },
        ],
        processSteps: [
            {
                step: "01",
                title: "Discovery & Architecture",
                desc: "We analyze your business requirements, determine technical stack, and design system architecture diagrams.",
            },
            {
                step: "02",
                title: "Iterative Sprint Development",
                desc: "Features are engineered in two-week agile sprints with bi-weekly staging releases for your review.",
            },
            {
                step: "03",
                title: "Rigorous QA & Security",
                desc: "Automated test suites, manual security penetration audits, and cross-browser performance testing.",
            },
            {
                step: "04",
                title: "Production Launch & Support",
                desc: "Seamless cloud deployment, zero-downtime cutover, and continuous monitoring with dedicated support.",
            },
        ],
        demoHighlights: [
            "Live system architecture & codebase walkthrough",
            "Interactive demonstration of similar software built for clients",
            "Technical roadmap and timeline assessment for your project",
            "Transparent pricing and milestone estimation",
        ],
    },

    design: {
        slug: "design",
        badge: "DESIGN",
        title: "Creative Design & Branding Solutions",
        subtitle: "Iconic Logos, Cohesive Brand Identities & High-Converting UI/UX",
        themeColor: "#d946ef",
        heroDesc:
            "Transform your visual presence with creative design that captivates and converts. Gamanext crafts unforgettable logos, corporate branding guidelines, marketing banners, and modern UI/UX design systems that make your business stand out.",
        stats: [
            { value: "250+", label: "Brand Identities Created" },
            { value: "100%", label: "Vector & Source Assets" },
            { value: "48h", label: "Initial Concept Delivery" },
            { value: "5/5", label: "Client Satisfaction" },
        ],
        overview:
            "Design is not just how something looks — it's how your customers perceive your credibility. We combine psychology, typography, color theory, and human-centered design principles to craft distinctive visual languages that command attention and drive business results.",
        offeringsTitle: "Complete Graphic & Digital Design Suite",
        offeringsSubtitle: "Everything your business needs to build an unforgettable, premium brand image.",
        offerings: [
            {
                id: "logo-branding",
                title: "Logo Designing & Brand Identity",
                badge: "BRAND IDENTITY",
                shortDesc: "Iconic, memorable brand marks with full copyright ownership and brand manuals.",
                description:
                    "We design distinctive, scalable logos that tell your company's story. Accompanied by comprehensive brand manuals detailing primary & secondary color palettes, font pairings, monochrome variations, and spacing rules.",
                highlights: [
                    "Multiple original logo concepts to choose from",
                    "Comprehensive brand style guide (typography, colors, iconography)",
                    "Complete vector source packages (AI, EPS, SVG, PNG, PDF)",
                    "Full intellectual property and copyright handover",
                ],
                technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
                deliverables: [
                    "Vector source files (.AI, .SVG, .EPS, .PDF)",
                    "High-resolution transparent PNGs and JPEGs",
                    "Print and web ready color profile formats (CMYK / RGB)",
                    "Complete Brand Guidelines PDF documentation",
                ],
            },
            {
                id: "ui-ux-design",
                title: "UI/UX & Product Design",
                badge: "DIGITAL PRODUCTS",
                shortDesc: "Intuitive, human-centered interfaces designed in Figma with interactive prototypes.",
                description:
                    "From wireframes and journey maps to pixel-perfect design systems, we craft user experiences that minimize friction and maximize engagement. Every screen is engineered for intuitive usability across web and mobile platforms.",
                highlights: [
                    "Interactive clickable Figma prototypes for user testing",
                    "Complete reusable design system tokens (buttons, forms, typography)",
                    "Mobile responsive breakpoints (Desktop, Tablet, Mobile)",
                    "Developer-ready inspect specs and asset handoff",
                ],
                technologies: ["Figma", "FigJam", "Adobe XD", "Miro"],
                deliverables: [
                    "Interactive Figma design prototype",
                    "Complete design system & component library",
                    "Developer handoff guide with CSS tokens",
                    "High-resolution visual asset export pack",
                ],
            },
            {
                id: "marketing-posters",
                title: "Poster & Banner Designing",
                badge: "MARKETING COLLATERAL",
                shortDesc: "Eye-catching marketing graphics for social media, display ads, and outdoor prints.",
                description:
                    "Engage your target audience across physical and digital touchpoints. We produce print-ready event posters, trade show roll-up banners, social media creative packs, and billboard graphics designed to convert viewers into leads.",
                highlights: [
                    "Print-ready 300 DPI high-resolution CMYK files",
                    "Custom dimensions for roll-ups, flyers, brochures & billboards",
                    "Optimized social media formats for Instagram, LinkedIn & Facebook",
                    "Fast turnaround with unlimited minor revisions",
                ],
                technologies: ["Adobe Photoshop", "Adobe InDesign", "Illustrator"],
                deliverables: [
                    "Print-ready PDF files with bleeds & crop marks",
                    "Social media graphics pack (Feed, Stories, Banners)",
                    "Editable PSD / AI source master files",
                    "Display advertising banner suites",
                ],
            },
            {
                id: "custom-designs",
                title: "Custom Graphic & Packaging Design",
                badge: "BESPOKE ART",
                shortDesc: "Custom merchandise, product packaging, 3D mockups, and corporate stationery.",
                description:
                    "Elevate your physical touchpoints. We create bespoke product packaging, apparel prints, custom company stationery, business cards, presentation pitch decks, and custom vector illustrations.",
                highlights: [
                    "Packaging die-line design and 3D visual mockups",
                    "Corporate stationery sets (business cards, letterheads, envelopes)",
                    "Investor presentation pitch decks in PowerPoint & Figma",
                    "Custom merchandise and apparel vector graphics",
                ],
                technologies: ["Illustrator", "Photoshop", "Blender 3D", "Figma"],
                deliverables: [
                    "Print-ready packaging die-cut files",
                    "Complete business stationery bundle",
                    "Investor-ready editable presentation deck",
                    "3D photorealistic product mockup renders",
                ],
            },
        ],
        whyChooseList: [
            {
                title: "Experienced & Skilled Designers",
                desc: "Award-winning graphic artists and UI/UX specialists with deep aesthetic sensibility.",
            },
            {
                title: "Custom Solutions for Your Business",
                desc: "No prefabricated templates or AI clip-art — 100% custom-crafted visual assets.",
            },
            {
                title: "On-Time Delivery, Every Time",
                desc: "Structured design reviews and fast initial concept turnarounds delivered on schedule.",
            },
            {
                title: "Transparent Communication",
                desc: "Direct Figma workspace collaboration so you can comment, review, and iterate in real-time.",
            },
            {
                title: "Affordable Pricing & Full Ownership",
                desc: "Full commercial copyright transfer and raw source files included at transparent rates.",
            },
        ],
        processSteps: [
            {
                step: "01",
                title: "Creative Brief & Moodboard",
                desc: "We discuss your brand positioning, target audience, aesthetic preferences, and competitor landscape.",
            },
            {
                step: "02",
                title: "Concept Exploration",
                desc: "Our design team crafts multiple distinct design directions and visual concepts for your feedback.",
            },
            {
                step: "03",
                title: "Collaborative Refinement",
                desc: "We polish the chosen concept, fine-tuning typography, colors, and layout until perfection.",
            },
            {
                step: "04",
                title: "Master Asset Handover",
                desc: "Delivery of organized production files across vector formats, print specs, and digital guidelines.",
            },
        ],
        demoHighlights: [
            "Live walkthrough of real client design systems & branding case studies",
            "Figma component library and interactive UI/UX prototyping demonstration",
            "Aesthetic consultation for your existing brand or upcoming venture",
            "Custom design timeline and scope breakdown",
        ],
    },

    marketing: {
        slug: "marketing",
        badge: "DIGITAL MARKETING",
        title: "Digital Marketing & Performance Ads",
        subtitle: "High-ROI Paid Advertising, Growth Funnels & Audience Acquisition",
        themeColor: "#16a34a",
        heroDesc:
            "Stop wasting ad spend on unoptimized campaigns. Gamanext creates high-converting digital advertising funnels across Meta (Facebook & Instagram), YouTube, and Google to reliably generate high-quality leads, appointments, and sales.",
        stats: [
            { value: "4.8x", label: "Average Return on Ad Spend (ROAS)" },
            { value: "500k+", label: "Leads Generated" },
            { value: "A/B", label: "Continuous Creative Testing" },
            { value: "100%", label: "Transparent Analytics" },
        ],
        overview:
            "Modern digital marketing demands more than just running ads. We craft end-to-end acquisition funnels combining persuasive ad copywriting, dynamic video creatives, laser-targeted custom audiences, high-converting landing pages, and automated retargeting loops.",
        offeringsTitle: "Performance Marketing Services",
        offeringsSubtitle: "Scalable acquisition channels engineered to maximize your return on ad spend.",
        offerings: [
            {
                id: "facebook-ads",
                title: "Facebook Advertising Campaigns",
                badge: "META ADS",
                shortDesc: "Laser-targeted campaigns engineered for lead generation and e-commerce conversions.",
                description:
                    "Harness Meta's vast demographic and behavioral data. We construct high-converting Facebook advertising campaigns with custom lookalike audiences, engaging video ads, carousel formats, and instant lead forms.",
                highlights: [
                    "CBO & ABO budget optimization for lowest cost per lead",
                    "Custom & Lookalike audience segment building",
                    "Dynamic creative testing with copy and headline variations",
                    "Meta Pixel & Conversions API (CAPI) server-side tracking",
                ],
                technologies: ["Meta Ads Manager", "Conversions API", "Google Analytics 4", "Zapier"],
                deliverables: [
                    "Complete ad campaign structure setup",
                    "Persuasive ad copy and graphic creative variations",
                    "Weekly ROI & Cost Per Acquisition (CPA) reports",
                    "Live lead routing to your CRM/Email",
                ],
            },
            {
                id: "instagram-ads",
                title: "Instagram Ads & Reel Promotions",
                badge: "INSTAGRAM ADS",
                shortDesc: "Visually arresting story and reel campaigns targeting engaged mobile consumers.",
                description:
                    "Capture mobile users with native-looking Instagram Stories, Reels, and Carousel advertisements. Perfect for lifestyle brands, modern software, B2C products, and local service businesses aiming for viral reach.",
                highlights: [
                    "Full-screen 9:16 vertical video & Reel ad formats",
                    "Direct Message (DM) automation ad funnels",
                    "Influencer collaboration and UGC style creatives",
                    "Shoppable product tags and instant storefront checkout",
                ],
                technologies: ["Instagram Ads", "ManyChat", "CapCut", "Meta Business Suite"],
                deliverables: [
                    "High-engagement video reel ads",
                    "Automated DM lead generation sequences",
                    "Influencer whitelisting campaign setup",
                    "Detailed audience demographic performance breakdowns",
                ],
            },
            {
                id: "youtube-ads",
                title: "YouTube Video Advertising",
                badge: "VIDEO ADS",
                shortDesc: "High-intent video campaigns on the world's second largest search engine.",
                description:
                    "Reach customers while they are actively searching for solutions. We build Skippable In-Stream, Non-Skippable, and In-Feed YouTube ads targeted by search intent, competitor channels, and custom search terms.",
                highlights: [
                    "Intent-based placement on relevant industry channels",
                    "Target users based on what they search on Google",
                    "Hook-Story-Offer video copywriting structures",
                    "Comprehensive brand lift and view-through conversion tracking",
                ],
                technologies: ["Google Ads", "YouTube Studio", "Google Tag Manager", "Looker Studio"],
                deliverables: [
                    "Video ad scripting and storytelling framework",
                    "Google Ads audience placement and keyword mapping",
                    "Custom conversion event tracking setup",
                    "Interactive real-time Looker Studio analytics dashboard",
                ],
            },
            {
                id: "funnel-conversion",
                title: "Conversion Funnels & Retargeting",
                badge: "FULL FUNNEL",
                shortDesc: "High-converting landing pages, email nurture sequences, and multi-channel retargeting.",
                description:
                    "Most website visitors don't buy on the first visit. We deploy omni-channel retargeting ads and high-converting landing pages that continually re-engage interested prospects until they become paying customers.",
                highlights: [
                    "Dedicated high-converting responsive landing pages",
                    "Multi-tier retargeting (Day 1-3, Day 4-14, Day 15-30)",
                    "Heatmap tracking and user session recording audits",
                    "Automated email and WhatsApp follow-up triggers",
                ],
                technologies: ["Next.js Landing Pages", "Hotjar", "ActiveCampaign", "Brevo"],
                deliverables: [
                    "Custom landing page built for conversion speed",
                    "Full retargeting pixel setup across Meta & Google",
                    "Email nurture automation workflows",
                    "Conversion Rate Optimization (CRO) audit report",
                ],
            },
        ],
        whyChooseList: [
            {
                title: "Experienced & Skilled Media Buyers",
                desc: "Certified performance marketers who have managed successful campaigns across multiple industries.",
            },
            {
                title: "Custom Solutions for Your Business",
                desc: "Campaign architectures customized to your sales cycle, ticket size, and target buyer persona.",
            },
            {
                title: "On-Time Delivery, Every Time",
                desc: "Fast campaign launches, disciplined ad iteration cycles, and weekly performance reviews.",
            },
            {
                title: "Transparent Communication",
                desc: "Real-time client dashboard access with 100% transparency on ad spend, cost per lead, and revenue.",
            },
            {
                title: "Affordable Pricing & Clear ROI",
                desc: "Performance-oriented fee structures focused on growing your bottom-line profitability.",
            },
        ],
        processSteps: [
            {
                step: "01",
                title: "Audience & Competitor Audit",
                desc: "We analyze competitor ad strategies, customer pain points, and define highest-converting audience segments.",
            },
            {
                step: "02",
                title: "Creative & Copy Production",
                desc: "Our copywriters and designers craft multiple ad angles, hooks, headlines, and visual assets.",
            },
            {
                step: "03",
                title: "Pixel Setup & Campaign Launch",
                desc: "We implement advanced server-side tracking (CAPI) and launch structured split-testing campaigns.",
            },
            {
                step: "04",
                title: "Scaling & Budget Optimization",
                desc: "We double down on winning ads, eliminate unprofitable segments, and scale profitable ad spend sustainably.",
            },
        ],
        demoHighlights: [
            "Live audit of your current advertising strategy or website funnel",
            "Demonstration of live client campaign dashboards and ROAS metrics",
            "Custom audience targeting and ad angle recommendations for your niche",
            "Expected cost per lead and acquisition projections",
        ],
    },

    automation: {
        slug: "automation",
        badge: "AI AUTOMATION",
        title: "AI Agents & Smart Automation Solutions",
        subtitle: "Autonomous AI Agents, Smart Customer Chatbots & Workflow Automation",
        themeColor: "#f59e0b",
        heroDesc:
            "Supercharge your operations and work smarter. Gamanext builds autonomous AI agents, intelligent customer service chatbots, and automated workflows that eliminate repetitive tasks, respond instantly to customers, and reduce operating costs 24/7.",
        stats: [
            { value: "70%", label: "Operational Cost Reduction" },
            { value: "< 2s", label: "Instant Chatbot Response" },
            { value: "24/7", label: "Autonomous Operations" },
            { value: "100%", label: "Custom Model Integration" },
        ],
        overview:
            "Artificial intelligence is transforming business efficiency. We design enterprise AI solutions powered by Large Language Models (LLMs), LangChain, and automated workflow orchestrators like n8n and Make. Our solutions integrate directly into your CRM, database, WhatsApp, and internal software.",
        offeringsTitle: "Enterprise AI & Automation Capabilities",
        offeringsSubtitle: "Harness modern artificial intelligence to automate labor-intensive operations.",
        offerings: [
            {
                id: "ai-agents",
                title: "Autonomous AI Agents",
                badge: "AUTONOMOUS AI",
                shortDesc: "Multi-step AI workers that research, process documents, and execute tasks independently.",
                description:
                    "Move beyond simple text generation. Our autonomous AI agents are equipped with tool-calling capabilities, allowing them to read emails, extract data from PDF invoices, update CRM records, generate analytical reports, and notify team members without human intervention.",
                highlights: [
                    "Multi-agent orchestration frameworks (CrewAI, LangGraph)",
                    "Tool execution: database queries, web scraping, API calls",
                    "Secure document parsing (PDF, Word, Excel, Scanned images)",
                    "Human-in-the-loop validation triggers for sensitive actions",
                ],
                technologies: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "LangChain", "Python", "LlamaIndex"],
                deliverables: [
                    "Custom autonomous AI agent system",
                    "API integrations with your CRM and databases",
                    "Monitoring dashboard for agent execution logs",
                    "Fallback handling & human escalation protocol",
                ],
            },
            {
                id: "chatbots",
                title: "Intelligent AI Chatbots & Customer Assistants",
                badge: "AI CHATBOTS",
                shortDesc: "Natural conversational bots trained on your company knowledge base for 24/7 support.",
                description:
                    "Deliver instantaneous, human-grade customer service. We build custom AI chatbots grounded on your product catalogs, FAQs, and documentation using Retrieval-Augmented Generation (RAG). Deployed seamlessly on your website, WhatsApp, Telegram, or mobile app.",
                highlights: [
                    "Retrieval-Augmented Generation (RAG) on proprietary company data",
                    "Zero hallucination guardrails and brand personality tuning",
                    "Omnichannel deployment (Website widget, WhatsApp, Telegram)",
                    "Automatic lead qualification & calendar appointment booking",
                ],
                technologies: ["Pinecone", "Weaviate", "OpenAI", "WhatsApp Cloud API", "Next.js"],
                deliverables: [
                    "Custom-branded web chat interface",
                    "Connected vector knowledge base with document upload UI",
                    "WhatsApp Business Cloud API integration",
                    "Live chat takeover console for human agents",
                ],
            },
            {
                id: "workflow-automation",
                title: "Business Process & Workflow Automation",
                badge: "PROCESS AUTOMATION",
                shortDesc: "Connect your apps and automate repetitive data handoffs across platforms.",
                description:
                    "Stop manual copy-pasting. We link your disparate software tools — including Gmail, Slack, QuickBooks, Salesforce, HubSpot, and Google Sheets — into reliable, automated pipelines that trigger in real time whenever an event occurs.",
                highlights: [
                    "Zero-code / low-code workflow architecture (n8n, Make, Zapier)",
                    "Custom Webhooks and REST API integration endpoints",
                    "Automated lead routing and instant email/SMS notifications",
                    "Automatic data sync and error retry logging",
                ],
                technologies: ["n8n", "Make.com", "Zapier", "REST APIs", "Webhooks", "PostgreSQL"],
                deliverables: [
                    "Fully configured and tested automation workflows",
                    "Self-hosted or cloud-managed automation server",
                    "Step-by-step workflow architecture documentation",
                    "Ongoing monitoring and error alert system",
                ],
            },
            {
                id: "ai-data-extraction",
                title: "Document AI & Intelligent Data Extraction",
                badge: "DATA PIPELINES",
                shortDesc: "Transform unstructured paper invoices, contracts, and receipts into structured database records.",
                description:
                    "Free your accounting and operations staff from manual data entry. Our vision AI and OCR models extract key-value pairs, line items, and contractual clauses with 99%+ accuracy directly into your database.",
                highlights: [
                    "Vision OCR + LLM parsing for unstructured documents",
                    "Automated invoice reconciliation and financial validation",
                    "Contract clause extraction and compliance auditing",
                    "Direct export to Excel, CSV, or database tables",
                ],
                technologies: ["AWS Textract", "Google Document AI", "Tesseract", "Python", "FastAPI"],
                deliverables: [
                    "Automated document processing pipeline",
                    "Web interface for drag-and-drop batch processing",
                    "Export integrations to ERP / Accounting software",
                    "Audit trail and accuracy evaluation reports",
                ],
            },
        ],
        whyChooseList: [
            {
                title: "Experienced & Skilled AI Engineers",
                desc: "Pioneering developers experienced in state-of-the-art LLMs, vector databases, and agentic workflows.",
            },
            {
                title: "Custom Solutions for Your Business",
                desc: "Models fine-tuned and grounded strictly on your proprietary data without data privacy leaks.",
            },
            {
                title: "On-Time Delivery, Every Time",
                desc: "Rapid prototyping with working AI demos delivered in days, followed by robust production deployment.",
            },
            {
                title: "Transparent Communication",
                desc: "Clear explanations without confusing AI jargon, complete with live testing sandboxes.",
            },
            {
                title: "Affordable Pricing & Fast Payback",
                desc: "Automation solutions engineered to pay for themselves rapidly through hours of human labor saved.",
            },
        ],
        processSteps: [
            {
                step: "01",
                title: "Automation Opportunity Audit",
                desc: "We analyze your repetitive manual tasks, customer friction points, and estimate exact hours and dollars saved.",
            },
            {
                step: "02",
                title: "Prototype & Knowledge Ingestion",
                desc: "We index your company documentation, test model prompts, and build an interactive proof-of-concept.",
            },
            {
                step: "03",
                title: "Integration & Safety Guardrails",
                desc: "We connect the AI to your internal APIs, establish safety filters, and test across hundreds of edge-case scenarios.",
            },
            {
                step: "04",
                title: "Deployment & Staff Enablement",
                desc: "Live launch on your channels, automated error monitoring, and team training on how to supervise the AI.",
            },
        ],
        demoHighlights: [
            "Live interactive demo of an AI Agent executing multi-step business tasks",
            "Hands-on test of an AI Chatbot responding using real company documents",
            "Workflow automation map tailored to your company's existing software tools",
            "ROI calculator demonstrating potential hours and dollars saved each month",
        ],
    },
};

// Aliases for sub-service URLs
export const SERVICE_SLUG_ALIASES: Record<string, string> = {
    development: "development",
    design: "design",
    marketing: "marketing",
    automation: "automation",
    "web-development": "development",
    "mobile-apps": "development",
    "custom-software": "development",
    "crm-erp": "development",
    branding: "design",
    "ui-ux": "design",
    "digital-marketing": "marketing",
    "ai-automation": "automation",
};
