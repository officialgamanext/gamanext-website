"use client";

import React from "react";
import styles from "./MissionVisionSection.module.css";

export default function MissionVisionSection() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.cardsGrid}>
                    {/* ================= Mission Card ================= */}
                    <div className={`${styles.card} ${styles.missionCard}`}>
                        <div className={styles.topRow}>
                            <div className={`${styles.iconWrap} ${styles.blueIconWrap}`}>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>

                            <div className={styles.headerText}>
                                <span className={`${styles.badge} ${styles.missionBadge}`}>
                                    OUR MISSION
                                </span>
                                <h3 className={styles.cardTitle}>
                                    Empower Businesses with Smart Solutions
                                </h3>
                            </div>
                        </div>

                        <p className={styles.cardDescription}>
                            To deliver innovative, reliable and result-driven digital solutions
                            that help businesses grow, work smarter and create lasting value.
                        </p>
                    </div>

                    {/* ================= Vision Card ================= */}
                    <div className={`${styles.card} ${styles.visionCard}`}>
                        <div className={styles.topRow}>
                            <div className={`${styles.iconWrap} ${styles.purpleIconWrap}`}>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>

                            <div className={styles.headerText}>
                                <span className={`${styles.badge} ${styles.visionBadge}`}>
                                    OUR VISION
                                </span>
                                <h3 className={styles.cardTitle}>
                                    Be a Trusted Global Digital Partner
                                </h3>
                            </div>
                        </div>

                        <p className={styles.cardDescription}>
                            To be a leading digital solutions company known for our creativity,
                            expertise and commitment to client success across the globe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}