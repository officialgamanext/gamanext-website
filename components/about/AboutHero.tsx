"use client";

import React from "react";
import Link from "next/link";
import styles from "./AboutHero.module.css";

const aboutPillars = [
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
            </svg>
        ),
        title: "Our Story",
        subtitle: "Driven by Passion",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0284c7"
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
        title: "Our People",
        subtitle: "Experienced Team",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            </svg>
        ),
        title: "Our Approach",
        subtitle: "Client First",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="6 3 18 3 22 9 12 22 2 9" />
                <path d="M2 9h20" />
                <path d="M10 3 8 9l4 13 4-13-2-6" />
            </svg>
        ),
        title: "Our Goal",
        subtitle: "Your Growth",
    },
];

export default function AboutHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                {/* ================= Left: Content Column ================= */}
                <div className={styles.contentCol}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>ABOUT US</span>
                    </div>

                    <h1 className={styles.heading}>
                        Building Ideas <br />
                        for a Better <br />
                        <span className={styles.headingHighlight}>Tomorrow</span>
                    </h1>

                    <p className={styles.description}>
                        At Gamanext, we combine technology, creativity and strategy to
                        deliver innovative digital solutions that help businesses grow,
                        streamline operations and create real impact.
                    </p>

                    <div className={styles.actionsGroup}>
                        <Link href="#our-story" className={styles.primaryBtn}>
                            <span>Get to Know Us</span>
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

                    {/* 4 Pillars inside Left Column */}
                    <div className={styles.pillarsGrid}>
                        {aboutPillars.map((pillar, idx) => (
                            <div key={idx} className={styles.pillarItem}>
                                <div className={styles.pillarIconBox}>{pillar.icon}</div>
                                <div className={styles.pillarText}>
                                    <span className={styles.pillarTitle}>{pillar.title}</span>
                                    <span className={styles.pillarSub}>{pillar.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= Right: Floating Graphic Stage ================= */}
                <div className={styles.graphicStage}>
                    <div className={styles.floatingCard}>
                        <div className={styles.cardIconBox}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                                <polyline points="12 4 18 10 22 6" />
                            </svg>
                        </div>
                        <div className={styles.cardTextWrap}>
                            <span className={styles.cardTitle}>Transforming</span>
                            <span className={styles.cardSubtitle}>
                                Businesses with <br /> Technology &amp; Creativity
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}