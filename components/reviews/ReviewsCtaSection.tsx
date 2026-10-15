"use client";

import React, { useState } from "react";
import styles from "./ReviewsCtaSection.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

export default function ReviewsCtaSection() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    return (
        <>
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.contentWrap}>
                        {/* Top Pill Badge (6px radius) */}
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>LET&apos;S WORK TOGETHER</span>
                        </div>

                        {/* Heading */}
                        <h2 className={styles.heading}>Join Our Happy Clients</h2>

                        {/* Subtitle Description */}
                        <p className={styles.description}>
                            Let&apos;s discuss how we can help you achieve your business goals.
                        </p>

                        {/* CTA Button opens QuoteModal */}
                        <div className={styles.buttonWrapper}>
                            <button
                                type="button"
                                onClick={() => setIsQuoteOpen(true)}
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
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}