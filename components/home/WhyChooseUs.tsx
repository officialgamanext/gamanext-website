"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";

const features = [
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Experienced &",
        subtitle: "Skilled Team",
    },
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        title: "Custom Solutions",
        subtitle: "for Your Business",
    },
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d946ef"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "On-Time Delivery,",
        subtitle: "Every Time",
    },
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: "Transparent",
        subtitle: "Communication",
    },
    {
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: "Affordable",
        subtitle: "Pricing",
    },
];

export default function WhyChooseUs() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                {/* Content Column */}
                <div className={styles.contentCol}>
                    <div className={styles.tagWrapper}>
                        <span className={styles.tagBadge}>WHY CHOOSE GAMANEXT</span>
                    </div>

                    <h2 className={styles.heading}>
                        Your Trusted <span className={styles.headingHighlight}>Technology</span> <br />
                        Partner
                    </h2>

                    <p className={styles.description}>
                        We combine technology, creativity and strategy to deliver
                        solutions that create real business value.
                    </p>

                    <div className={styles.featuresRow}>
                        {features.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className={styles.featureItem}>
                                    <div className={styles.iconBox}>{item.icon}</div>
                                    <div className={styles.featureText}>
                                        <span className={styles.featureTitle}>{item.title}</span>
                                        <span className={styles.featureSubtitle}>{item.subtitle}</span>
                                    </div>
                                </div>
                                {index < features.length - 1 && (
                                    <span className={styles.dividerDot}>•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}