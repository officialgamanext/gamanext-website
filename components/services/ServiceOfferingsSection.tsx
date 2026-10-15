"use client";

import React from "react";
import styles from "./ServiceOfferingsSection.module.css";
import { ServiceDetailData } from "@/constants/servicesDetailsData";

interface ServiceOfferingsSectionProps {
    service: ServiceDetailData;
}

export default function ServiceOfferingsSection({ service }: ServiceOfferingsSectionProps) {
    return (
        <section className={styles.sectionWrapper} id="offerings">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.sectionHeader}>
                    <div className={styles.tagWrapper}>
                        <span className={styles.tagBadge}>WHAT WE OFFER</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{service.offeringsTitle}</h2>
                    <p className={styles.sectionSubtitle}>{service.offeringsSubtitle}</p>
                </div>

                {/* Offerings Grid */}
                <div className={styles.offeringsGrid}>
                    {service.offerings.map((item) => (
                        <div key={item.id} className={styles.offeringCard}>
                            <div className={styles.cardTop}>
                                <span className={styles.offeringBadge}>{item.badge}</span>
                            </div>

                            <h3 className={styles.offeringTitle}>{item.title}</h3>
                            <p className={styles.offeringDesc}>{item.description}</p>

                            {/* Key Highlights */}
                            <div className={styles.highlightsBlock}>
                                <span className={styles.blockHeading}>Key Capabilities &amp; Features</span>
                                <ul className={styles.highlightsList}>
                                    {item.highlights.map((point, idx) => (
                                        <li key={idx} className={styles.highlightItem}>
                                            <span className={styles.checkIcon}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className={styles.techBlock}>
                                <span className={styles.blockHeading}>Core Technologies &amp; Tools</span>
                                <div className={styles.techTags}>
                                    {item.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action to Book Demo */}
                            <a href="#book-demo" className={styles.cardCtaBtn}>
                                <span>Request Demo for this Module</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Why Choose Gamanext for this Service */}
                <div className={styles.whyChooseWrap}>
                    <div className={styles.whyHeader}>
                        <span className={styles.whyBadge}>WHY GAMANEXT</span>
                        <h3 className={styles.whyTitle}>Why Choose Us for {service.badge}</h3>
                        <p className={styles.whyDesc}>
                            Our commitment to high standards, disciplined engineering, and client success.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        {service.whyChooseList.map((item, idx) => (
                            <div key={idx} className={styles.whyCard}>
                                <h4 className={styles.whyCardTitle}>{item.title}</h4>
                                <p className={styles.whyCardDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
