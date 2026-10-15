"use client";

import React from "react";
import Link from "next/link";
import styles from "./OurStorySection.module.css";

const statsData = [
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        value: "100+",
        label: "Projects Delivered",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        value: "50+",
        label: "Happy Clients",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
        ),
        value: "4+",
        label: "Years of Experience",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
        value: "24/7",
        label: "Support",
    },
];

export default function OurStorySection() {
    return (
        <section className={styles.sectionWrapper} id="our-story">
            <div className={styles.container}>
                {/* ================= Top Stats Bar ================= */}
                <div className={styles.statsCard}>
                    {statsData.map((stat, idx) => (
                        <div key={idx} className={styles.statColumn}>
                            <div className={styles.statIconBox}>{stat.icon}</div>
                            <div className={styles.statTextGroup}>
                                <span className={styles.statNumber}>{stat.value}</span>
                                <span className={styles.statText}>{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= Main Story Section ================= */}
                <div className={styles.storyGrid}>
                    {/* Left Column: Text & CTA */}
                    <div className={styles.storyLeft}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>OUR STORY</span>
                        </div>

                        <h2 className={styles.heading}>
                            From Ideas to <br />
                            <span className={styles.headingHighlight}>Impact</span>
                        </h2>

                        <p className={styles.description}>
                            Gamanext was founded with a simple belief &ndash; that technology and
                            creativity can solve real business challenges. What started as a
                            small team of passionate professionals has grown into a
                            full-service digital solutions company helping businesses across
                            industries.
                        </p>

                        <div className={styles.btnWrapper}>
                            <Link href="#journey" className={styles.journeyBtn}>
                                <span>Our Journey</span>
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

                    {/* Right Column: Visual Stage with Rounded Team Graphic and Overlays */}
                    <div className={styles.visualStage}>
                        <div className={styles.imageCard}>
                            <img
                                src="./group.png"
                                alt="Gamanext team collaborating"
                                className={styles.teamImg}
                            />
                        </div>

                        {/* Floating Solution Pill (Bottom Left of the Image) */}
                        <div className={styles.solutionPill}>
                            <div className={styles.pillIconBox}>
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
                                    <path d="M12 2a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.2V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.8c1.79-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6Z" />
                                    <path d="M9 21h6" />
                                </svg>
                            </div>
                            <div className={styles.pillTextGroup}>
                                <span className={styles.pillTitle}>Turning Ideas into</span>
                                <span className={styles.pillHighlight}>Real Business Solutions</span>
                            </div>
                        </div>

                        {/* Floating Quote Card (Right of the Image) */}
                        <div className={styles.quoteCard}>
                            <p className={styles.quoteText}>
                                &ldquo;We believe in building long-term relationships by
                                delivering quality, innovation and value in everything we
                                do.&rdquo;
                            </p>
                            <div className={styles.quoteAccentBar} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}