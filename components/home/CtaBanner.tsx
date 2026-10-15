"use client";

import React, { useState } from "react";
import styles from "./CtaBanner.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

export default function CtaBanner() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    return (
        <>
            <section className={styles.ctaSection}>
                {/* Decorative ambient glowing waves */}
                <div className={styles.ambientWaveLeft} />
                <div className={styles.ambientWaveRight} />

                <div className={styles.container}>
                    {/* Top frosted glass pill badge */}
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>LET&apos;S WORK TOGETHER</span>
                    </div>

                    {/* Heading */}
                    <h2 className={styles.heading}>
                        Ready to Bring Your Ideas to Life?
                    </h2>

                    {/* Subtitle description */}
                    <p className={styles.description}>
                        Let&apos;s build something amazing together. Get in touch with us
                        today and take the next step towards your digital success.
                    </p>

                    {/* Action Button opens QuoteModal */}
                    <div className={styles.actionWrapper}>
                        <button
                            type="button"
                            onClick={() => setIsQuoteOpen(true)}
                            className={styles.ctaBtn}
                        >
                            <span>Get a Quote Now</span>
                            <svg
                                className={styles.btnIcon}
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Quote Modal */}
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}