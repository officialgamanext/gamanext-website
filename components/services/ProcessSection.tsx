"use client";

import React, { useState } from "react";
import styles from "./ProcessSection.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

const processSteps = [
    {
        step: "01",
        title: "Understand",
        description: "We listen to your needs and goals.",
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="9" y1="10" x2="9.01" y2="10" />
                <line x1="12" y1="10" x2="12.01" y2="10" />
                <line x1="15" y1="10" x2="15.01" y2="10" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Plan",
        description: "We create a strategy and project plan.",
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
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Design & Develop",
        description: "We bring your ideas to life.",
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
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Deliver",
        description: "We launch and ensure everything works perfectly.",
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
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
            </svg>
        ),
    },
    {
        step: "05",
        title: "Support",
        description: "We provide ongoing support and maintenance.",
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
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
    },
];

export default function ProcessSection() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    return (
        <>
            <section className={styles.sectionWrapper} id="process">
                <div className={styles.container}>
                    {/* Header Row: Title & Subtitle on Left, Button on Right */}
                    <div className={styles.headerRow}>
                        <div className={styles.titleArea}>
                            <div className={styles.badgeWrapper}>
                                <span className={styles.badge}>OUR PROCESS</span>
                            </div>
                            <div className={styles.headingGroup}>
                                <h2 className={styles.heading}>How We Work</h2>
                                <span className={styles.subtitle}>
                                    A simple and transparent process to turn your ideas into reality.
                                </span>
                            </div>
                        </div>

                        {/* Strict 34px Button & 6px Radius */}
                        <div className={styles.actionArea}>
                            <button
                                type="button"
                                onClick={() => setIsQuoteOpen(true)}
                                className={styles.discussBtn}
                            >
                                <span>Let&apos;s Discuss Your Project</span>
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
                            </button>
                        </div>
                    </div>

                    {/* 5 Steps Linear Strip */}
                    <div className={styles.stepsGrid}>
                        {processSteps.map((item, idx) => (
                            <div key={idx} className={styles.stepItem}>
                                <div className={styles.iconNumberGroup}>
                                    <span className={styles.stepNumberBadge}>{item.step}</span>
                                    <div className={styles.iconWrap}>{item.icon}</div>
                                </div>

                                <div className={styles.textGroup}>
                                    <h3 className={styles.stepTitle}>{item.title}</h3>
                                    <p className={styles.stepDesc}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Modal */}
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}