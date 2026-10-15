"use client";

import React from "react";
import Link from "next/link";
import styles from "./ReviewsHero.module.css";

const ratingStats = [
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        value: "4.9/5",
        label: "Average Rating",
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        value: "100+",
        label: "Projects Delivered",
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        value: "95%",
        label: "Client Retention",
    },
];

export default function ReviewsHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                {/* ================= Left: Content Column ================= */}
                <div className={styles.contentCol}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>CLIENT REVIEWS</span>
                    </div>

                    <h1 className={styles.heading}>
                        Trusted by Businesses <br />
                        <span className={styles.headingHighlight}>Across Industries</span>
                    </h1>

                    <p className={styles.description}>
                        Real stories from our clients who have experienced growth with
                        Gamanext. Their success inspires us to deliver better solutions
                        every day.
                    </p>

                    {/* Action Buttons (Strictly 34px & 6px Radius) */}
                    <div className={styles.actionsRow}>
                        <Link href="#all-reviews" className={styles.primaryBtn}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>See All Reviews</span>
                            <svg
                                width="12"
                                height="12"
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

                        <Link href="#write-review" className={styles.secondaryBtn}>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0b57d0"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="12 8 8 12 12 16 12 8" />
                            </svg>
                            <span>Write a Review</span>
                        </Link>
                    </div>

                    {/* Bottom 4 Metrics */}
                    <div className={styles.metricsGrid}>
                        {ratingStats.map((item, idx) => (
                            <div key={idx} className={styles.metricItem}>
                                <div className={styles.metricIconBox}>{item.icon}</div>
                                <span className={styles.metricValue}>{item.value}</span>
                                <span className={styles.metricLabel}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= Right: Floating Cards Overlay ================= */}
                <div className={styles.floatingStage}>
                    {/* Top Right Handwritten Doodle */}
                    <div className={styles.handwrittenDoodle}>
                        <span>Real</span>
                        <span>People</span>
                        <span>Real</span>
                        <span className={styles.doodleHighlight}>Success</span>
                        <svg
                            className={styles.doodleArrow}
                            width="24"
                            height="28"
                            viewBox="0 0 32 36"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 4 C 18 10, 24 20, 20 30" />
                            <polyline points="15 28 20 30 22 25" />
                        </svg>
                    </div>

                    {/* Testimonial Card 1 (Top) */}
                    <div className={styles.reviewCardTop}>
                        <div className={styles.avatarWrap}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="#e2e8f0">
                                <circle cx="16" cy="16" r="16" fill="#cbd5e1" />
                                <circle cx="16" cy="12" r="5" fill="#475569" />
                                <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#475569" />
                            </svg>
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.starsRow}>
                                {"★".repeat(5)}
                            </div>
                            <p className={styles.quoteText}>&ldquo;Excellent team and great support!&rdquo;</p>
                        </div>
                    </div>

                    {/* Testimonial Card 2 (Middle Left) */}
                    <div className={styles.reviewCardMiddle}>
                        <div className={styles.avatarWrap}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="#e2e8f0">
                                <circle cx="16" cy="16" r="16" fill="#e0e7ff" />
                                <circle cx="16" cy="12" r="5" fill="#3730a3" />
                                <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#3730a3" />
                            </svg>
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.starsRow}>
                                {"★".repeat(5)}
                            </div>
                            <p className={styles.quoteText}>&ldquo;Creative designs and professional team.&rdquo;</p>
                        </div>
                    </div>

                    {/* Testimonial Card 3 (Bottom Right Laptop Overlay) */}
                    <div className={styles.reviewCardBottom}>
                        <div className={styles.avatarWrap}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="#e2e8f0">
                                <circle cx="16" cy="16" r="16" fill="#fef3c7" />
                                <circle cx="16" cy="12" r="5" fill="#92400e" />
                                <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#92400e" />
                            </svg>
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.starsRow}>
                                {"★".repeat(5)}
                            </div>
                            <p className={styles.quoteText}>&ldquo;They delivered beyond our expectations.&rdquo;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}