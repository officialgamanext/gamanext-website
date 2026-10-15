"use client";

import React from "react";
import Link from "next/link";
import styles from "./WhyChooseUsSection.module.css";

const advantagesData = [
    {
        step: "01",
        title: "Experienced & Skilled Team",
        category: "Deep Expertise",
        description:
            "Our certified engineers, creative designers, and growth strategists bring proven domain expertise and modern technical mastery to every project.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Custom Solutions for Your Business",
        category: "Tailored Architecture",
        description:
            "We engineer custom digital solutions, scalable architectures, and tailored workflows designed precisely around your unique business goals.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "On-Time Delivery, Every Time",
        category: "Reliable Execution",
        description:
            "Through disciplined agile sprint cycles and transparent milestones, we consistently ship production-grade deliverables on schedule.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Transparent Communication",
        category: "Open Collaboration",
        description:
            "Direct access to your project leads, real-time progress updates, and straightforward discussions with zero hidden surprises.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        step: "05",
        title: "Affordable Pricing",
        category: "Maximum ROI",
        description:
            "High-impact digital technology and enterprise-grade execution at transparent, highly competitive rates tailored to your budget.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className={styles.sectionWrapper} id="why-choose-us">
            <div className={styles.container}>
                {/* Left Column: Heading & CTA */}
                <div className={styles.leftCol}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>WHY GAMANEXT</span>
                    </div>

                    <h2 className={styles.heading}>Why Businesses Choose Us</h2>

                    <p className={styles.description}>
                        We combine technical mastery, proactive execution, and strategic
                        partnership to build digital products that drive sustained business
                        value.
                    </p>

                    <div className={styles.btnWrapper}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>Work With Us</span>
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

                {/* Right Column: 4 Strategic Advantage Cards */}
                <div className={styles.cardsGrid}>
                    {advantagesData.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrap}>{item.icon}</div>
                                <span className={styles.stepBadge}>{item.step}</span>
                            </div>

                            <span className={styles.categoryLabel}>{item.category}</span>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}