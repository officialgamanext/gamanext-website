"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./DevelopmentSection.module.css";
import ServiceDetailModal, {
    ServiceDetailItem,
} from "./ServiceDetailModal";
import QuoteModal from "@/components/modal/QuoteModal";

const devCards: {
    id: string;
    title: string;
    description: string;
    badge: string;
    illustration: React.ReactNode;
    details: ServiceDetailItem;
}[] = [
        {
            id: "web-mobile",
            title: "Website & Mobile App Development",
            description:
                "Modern, responsive and high-performance solutions for web and mobile.",
            badge: "DEVELOPMENT",
            illustration: (
                <div className={styles.mockupWorkspace}>
                    {/* Desktop Monitor Mockup */}
                    <div className={styles.desktopMonitor}>
                        <div className={styles.screenHeader}>
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                            <span className={styles.dot} />
                        </div>
                        <div className={styles.screenBody}>
                            <div className={styles.screenHeroBar} />
                            <div className={styles.screenGrid2}>
                                <div className={styles.screenCard} />
                                <div className={styles.screenCard} />
                            </div>
                        </div>
                        <div className={styles.monitorBase} />
                    </div>
                    {/* Smartphone Overlap Mockup */}
                    <div className={styles.phoneDevice}>
                        <div className={styles.phoneSpeaker} />
                        <div className={styles.phoneScreen}>
                            <div className={styles.phoneTop} />
                            <div className={styles.phoneRow} />
                            <div className={styles.phoneRow} />
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "Website & Mobile App Development",
                badge: "WEB & MOBILE",
                description:
                    "We build high-converting responsive web platforms and cross-platform native iOS & Android applications engineered for performance, security, and fluid user experiences.",
                highlights: [
                    "React / Next.js",
                    "React Native & Flutter",
                    "SEO Optimization",
                    "Sub-second Load Times",
                ],
                features: [
                    {
                        name: "Responsive Web Applications",
                        desc: "Fast, accessible user interfaces engineered to convert across mobile, tablet, and desktop viewports.",
                    },
                    {
                        name: "Native & Cross-Platform Apps",
                        desc: "Seamless, intuitive mobile solutions with offline storage, instant notifications, and biometric login.",
                    },
                    {
                        name: "API & Cloud Integration",
                        desc: "Scalable backend connections powered by REST & GraphQL microservices on AWS/Google Cloud.",
                    },
                ],
                deliverables: [
                    "Full Source Code",
                    "App Store & Play Store Submissions",
                    "Cloud Deployment & CDNs",
                ],
            },
        },
        {
            id: "custom-software",
            title: "Custom Software Development",
            description:
                "Tailored software to streamline your unique business processes.",
            badge: "DEVELOPMENT",
            illustration: (
                <div className={styles.customSoftWorkspace}>
                    <div className={styles.gearIconBox}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <div className={styles.codeTerminalBox}>
                        <div className={styles.terminalHeader}>
                            <span className={styles.termTag}>&lt;/&gt;</span>
                        </div>
                        <div className={styles.terminalLines}>
                            <div className={styles.line1} />
                            <div className={styles.line2} />
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "Custom Software Development",
                badge: "CUSTOM SOLUTIONS",
                description:
                    "Bespoke software architecture tailored specifically to fit your unique operational workflows, eliminate manual redundancies, and connect your business systems.",
                highlights: [
                    "Modular Microservices",
                    "Role-Based Access Control",
                    "Automated Pipelines",
                    "High Data Security",
                ],
                features: [
                    {
                        name: "Workflow Digitization",
                        desc: "Custom operational dashboards that replace spreadsheets and disjointed tools with unified logic.",
                    },
                    {
                        name: "Database Design & Optimization",
                        desc: "High-throughput PostgreSQL/MongoDB structures designed for rapid retrieval and backup protection.",
                    },
                    {
                        name: "Legacy System Migration",
                        desc: "Safe refactoring and migration of old systems to modern, maintainable cloud frameworks.",
                    },
                ],
                deliverables: [
                    "Comprehensive Architecture Specs",
                    "Automated Test Coverage",
                    "Deployment Scripts & Docker Containers",
                ],
            },
        },
        {
            id: "crm-solutions",
            title: "CRM Solutions",
            description:
                "Manage your customers and relationships efficiently.",
            badge: "DEVELOPMENT",
            illustration: (
                <div className={styles.crmWorkspace}>
                    <div className={styles.crmHeaderBadge}>CRM</div>
                    <div className={styles.crmDashboard}>
                        <div className={styles.crmRowTop}>
                            <div className={styles.crmAvatarIcon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                </svg>
                            </div>
                            <div className={styles.crmLineGroup}>
                                <div className={styles.crmLineA} />
                                <div className={styles.crmLineB} />
                            </div>
                        </div>
                        <div className={styles.crmDataRows}>
                            <div className={styles.crmDataBar} />
                            <div className={styles.crmDataBar} />
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "CRM Solutions",
                badge: "CUSTOMER MANAGEMENT",
                description:
                    "Centralize customer inquiries, lead tracking, conversion funnels, and automated client follow-ups into a unified and intuitive CRM platform.",
                highlights: [
                    "Lead Pipeline Tracking",
                    "Email & WhatsApp Sync",
                    "Customer Analytics",
                    "Team Performance KPIs",
                ],
                features: [
                    {
                        name: "Omnichannel Communications",
                        desc: "Consolidate customer touchpoints across phone, email, and social apps into a single client record.",
                    },
                    {
                        name: "Pipeline & Deal Automation",
                        desc: "Visual drag-and-drop deal stages with automatic follow-up reminders and task assignment.",
                    },
                    {
                        name: "Reports & Forecasting",
                        desc: "Real-time revenue attribution dashboards and team conversion metrics.",
                    },
                ],
                deliverables: [
                    "Configured Custom CRM System",
                    "Data Import & Field Mapping",
                    "Team Training & Admin Guides",
                ],
            },
        },
        {
            id: "erm-solutions",
            title: "ERM Solutions",
            description:
                "Enterprise resource management solutions for better operations.",
            badge: "DEVELOPMENT",
            illustration: (
                <div className={styles.ermWorkspace}>
                    <div className={styles.ermPillTop}>
                        <span className={styles.ermDotGreen} />
                        <span className={styles.ermDotOrange} />
                    </div>
                    <div className={styles.ermChartCard}>
                        <div className={styles.chartBars}>
                            <span className={`${styles.barCol} ${styles.barCol1}`} />
                            <span className={`${styles.barCol} ${styles.barCol2}`} />
                            <span className={`${styles.barCol} ${styles.barCol3}`} />
                            <span className={`${styles.barCol} ${styles.barCol4}`} />
                        </div>
                        <div className={styles.chartMiniGraph}>
                            <svg
                                width="36"
                                height="20"
                                viewBox="0 0 36 20"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="2"
                            >
                                <polyline points="2 16 12 8 22 14 34 3" />
                            </svg>
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "ERM / ERP Solutions",
                badge: "ENTERPRISE OPERATIONS",
                description:
                    "Integrated Enterprise Resource Management solutions designed to oversee supply chains, inventory, procurement, finance, and human resources with total operational transparency.",
                highlights: [
                    "Inventory Synchronization",
                    "Automated Invoicing & Billing",
                    "Multi-Branch Coordination",
                    "Custom Compliance Reporting",
                ],
                features: [
                    {
                        name: "Resource & Asset Tracking",
                        desc: "Comprehensive visibility into materials, vendor lead times, and procurement workflows.",
                    },
                    {
                        name: "Accounting & Financial Management",
                        desc: "Multi-currency ledger, tax calculations, and instant generation of profit/loss sheets.",
                    },
                    {
                        name: "Human Resource & Payroll Modules",
                        desc: "Automated attendance syncing, leave balances, and salary disbursement reporting.",
                    },
                ],
                deliverables: [
                    "Enterprise System Deployment",
                    "Role-Specific Access Dashboards",
                    "SLA Support & Cloud Backup Management",
                ],
            },
        },
    ];

export default function DevelopmentSection() {
    const [selectedService, setSelectedService] =
        useState<ServiceDetailItem | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const handleOpenDetail = (service: ServiceDetailItem) => {
        setSelectedService(service);
        setIsDetailModalOpen(true);
    };

    return (
        <>
            <section className={styles.sectionWrapper} id="development">
                <div className={styles.container}>
                    {/* Left Column: Heading, Subtitle & Primary CTA */}
                    <div className={styles.headerCol}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badgePill}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                                <span className={styles.badgeText}>DEVELOPMENT</span>
                            </span>
                        </div>

                        <h2 className={styles.heading}>
                            Build Scalable <br />
                            Digital Solutions
                        </h2>

                        <p className={styles.description}>
                            We develop high-performance websites, mobile apps and custom
                            software tailored to your business needs.
                        </p>

                        <div className={styles.actionWrap}>
                            <Link
                                href="/services/development"
                                className={styles.learnMoreMainBtn}
                            >
                                <span>Explore Details &amp; Book Demo</span>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: 4 Cards Row */}
                    <div className={styles.cardsRow}>
                        {devCards.map((card) => (
                            <div key={card.id} className={styles.serviceCard}>
                                {/* Visual Graphic Representation */}
                                <div className={styles.illustrationArea}>
                                    {card.illustration}
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDesc}>{card.description}</p>

                                    {/* 34px Learn More Button with 6px Border Radius */}
                                    <button
                                        type="button"
                                        onClick={() => handleOpenDetail(card.details)}
                                        className={styles.cardActionBtn}
                                    >
                                        <span>Learn More</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details Modal */}
            <ServiceDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                service={selectedService}
                onOpenQuote={() => setIsQuoteModalOpen(true)}
            />

            {/* Global Quote Modal */}
            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}