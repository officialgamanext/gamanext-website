"use client";

import React, { useState } from "react";
import styles from "./AboutCtaSection.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

export default function AboutCtaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className={styles.ctaWrapper}>
                <div className={styles.container}>
                    <div className={styles.contentWrap}>
                        {/* Top Pill Badge (6px border radius) */}
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>LET&apos;S BUILD TOGETHER</span>
                        </div>

                        {/* Heading */}
                        <h2 className={styles.heading}>Ready to Work With Us?</h2>

                        {/* Subtitle Description */}
                        <p className={styles.description}>
                            Let&apos;s discuss how we can help you achieve your business goals with
                            innovative digital solutions.
                        </p>

                        {/* CTA Button (Strict 34px Height & 6px Radius) */}
                        <div className={styles.btnRow}>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className={styles.quoteBtn}
                            >
                                <span>Get a Quote Now</span>
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
                </div>
            </section>

            {/* Quote Modal */}
            <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}