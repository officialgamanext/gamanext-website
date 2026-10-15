"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ServicesHero.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

const servicePillars = [
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2a6 6 0 0 0-6 6c0 2.22 1.21 4.16 3 5.2V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.8c1.79-1.04 3-2.98 3-5.2a6 6 0 0 0-6-6Z" />
                <path d="M9 21h6" />
            </svg>
        ),
        iconClass: "purpleIcon",
        title: "Customized",
        subtitle: "Solutions",
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
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
        iconClass: "blueIcon",
        title: "Experienced",
        subtitle: "Team",
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        iconClass: "skyIcon",
        title: "On-Time",
        subtitle: "Delivery",
    },
    {
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        iconClass: "greenIcon",
        title: "Ongoing",
        subtitle: "Support",
    },
];

export default function ServicesHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    {/* Left: Content Column */}
                    <div className={styles.contentCol}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>OUR SERVICES</span>
                        </div>

                        <h1 className={styles.heading}>
                            Digital Solutions <br />
                            for a <span className={styles.headingHighlight}>Smarter Tomorrow</span>
                        </h1>

                        <p className={styles.description}>
                            From development and design to digital marketing and automation, we
                            provide end-to-end solutions to help businesses grow in the digital
                            world.
                        </p>

                        {/* Buttons (Strict 34px Height & 6px Radius) */}
                        <div className={styles.actionsRow}>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className={styles.primaryBtn}
                            >
                                <span>Get a Quote</span>
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

                            <Link href="/contact" className={styles.secondaryBtn}>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#0b57d0"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                </svg>
                                <span>Talk to Our Team</span>
                            </Link>
                        </div>

                        {/* 4 Bottom Pillars */}
                        <div className={styles.pillarsGrid}>
                            {servicePillars.map((item, idx) => (
                                <div key={idx} className={styles.pillarItem}>
                                    <div
                                        className={`${styles.pillarIconBox} ${styles[item.iconClass]
                                            }`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className={styles.pillarText}>
                                        <span className={styles.pillarTitle}>{item.title}</span>
                                        <span className={styles.pillarSub}>{item.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right empty column preserves layout grid over the background illustration */}
                    <div className={styles.visualSpacer} />
                </div>
            </section>

            {/* Reusable Quote Modal */}
            <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}