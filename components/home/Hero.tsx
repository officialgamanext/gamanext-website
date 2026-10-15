"use client";

import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "4+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
];

export default function HomeHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                {/* ================= Left: Content Column ================= */}
                <div className={styles.contentCol}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>YOUR GROWTH PARTNER</span>
                    </div>

                    <h1 className={styles.heading}>
                        Ideas into <br />
                        <span className={styles.headingHighlight}>Powerful Digital</span> <br />
                        <span className={styles.headingHighlight}>Solutions</span>
                    </h1>

                    <p className={styles.description}>
                        We build, design, market and automate businesses with modern
                        technology and creative solutions.
                    </p>

                    <div className={styles.actionsGroup}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>Get Started</span>
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

                        <Link href="/services" className={styles.secondaryBtn}>
                            Our Services
                        </Link>
                    </div>

                    {/* 4 Stats Grid */}
                    <div className={styles.statsGrid}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= Right: Floating Graphic Overlays ================= */}
                <div className={styles.graphicStage}>
                    {/* Top-Right Floating Design Badge */}
                    <div className={styles.designCard}>
                        <div className={styles.designIconBox}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                        <div className={styles.cardTextCol}>
                            <span className={styles.designTitle}>Design</span>
                            <span className={styles.designSub}>Create Brand Identities</span>
                        </div>
                    </div>

                    {/* Bottom Floating Horizontal Pills */}
                    <div className={styles.bottomPillsRow}>
                        {/* Develop */}
                        <div className={styles.pillCard}>
                            <div className={`${styles.pillIconWrap} ${styles.bluePill}`}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <div className={styles.pillTextCol}>
                                <span className={styles.pillHeading}>Develop</span>
                                <span className={styles.pillNote}>Web, Mobile, Custom Apps</span>
                            </div>
                        </div>

                        {/* Market */}
                        <div className={styles.pillCard}>
                            <div className={`${styles.pillIconWrap} ${styles.orangePill}`}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="20" x2="18" y2="10" />
                                    <line x1="12" y1="20" x2="12" y2="4" />
                                    <line x1="6" y1="20" x2="6" y2="14" />
                                </svg>
                            </div>
                            <div className={styles.pillTextCol}>
                                <span className={styles.pillHeading}>Market</span>
                                <span className={styles.pillNote}>Reach More Customers</span>
                            </div>
                        </div>

                        {/* Automate */}
                        <div className={styles.pillCard}>
                            <div className={`${styles.pillIconWrap} ${styles.greenPill}`}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" y1="16" x2="8.01" y2="16" />
                                    <line x1="16" y1="16" x2="16.01" y2="16" />
                                </svg>
                            </div>
                            <div className={styles.pillTextCol}>
                                <span className={styles.pillHeading}>Automate</span>
                                <span className={styles.pillNote}>AI Agents & Chatbots</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}