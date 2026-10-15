"use client";

import React from "react";
import styles from "./ContactHero.module.css";

const highlights = [
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: "Quick",
        subtitle: "Response",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d946ef"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "Expert",
        subtitle: "Guidance",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
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
        title: "Free",
        subtitle: "Consultation",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9 11 12 14 22 4" />
            </svg>
        ),
        title: "No",
        subtitle: "Obligation",
    },
];

export default function ContactHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.contentCol}>
                    {/* Tagline Badge */}
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>CONTACT US</span>
                    </div>

                    {/* Headline */}
                    <h1 className={styles.heading}>
                        Let&apos;s Build <br />
                        Something Amazing <br />
                        <span className={styles.headingBlue}>Together</span>
                    </h1>

                    {/* Subheading Description */}
                    <p className={styles.description}>
                        Have a project in mind or want to know more about our services?
                        We&apos;d love to hear from you. Get in touch and our team will get
                        back to you shortly.
                    </p>

                    {/* 4 Feature Highlights */}
                    <div className={styles.highlightsRow}>
                        {highlights.map((item, index) => (
                            <div key={index} className={styles.highlightItem}>
                                <div className={styles.iconBox}>{item.icon}</div>
                                <div className={styles.highlightText}>
                                    <span className={styles.highlightTitle}>{item.title}</span>
                                    <span className={styles.highlightSubtitle}>{item.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Bottom Card */}
                <div className={styles.floatingCard}>
                    <div className={styles.cardIconBox}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className={styles.cardText}>
                        <span className={styles.cardSub}>Let&apos;s turn your ideas into</span>
                        <span className={styles.cardMain}>real business solutions</span>
                    </div>
                </div>
            </div>
        </section>
    );
}