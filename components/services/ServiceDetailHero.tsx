"use client";

import React from "react";
import Link from "next/link";
import styles from "./ServiceDetailHero.module.css";
import { ServiceDetailData } from "@/constants/servicesDetailsData";
import { CONTACT_INFO } from "@/constants/contact";

interface ServiceDetailHeroProps {
    service: ServiceDetailData;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                {/* Breadcrumbs */}
                <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                    <Link href="/" className={styles.crumbLink}>
                        Home
                    </Link>
                    <span className={styles.crumbDivider}>/</span>
                    <Link href="/services" className={styles.crumbLink}>
                        Services
                    </Link>
                    <span className={styles.crumbDivider}>/</span>
                    <span className={styles.crumbActive}>{service.title}</span>
                </nav>

                <div className={styles.heroContent}>
                    {/* Badge */}
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>{service.badge}</span>
                    </div>

                    {/* Heading & Subheading */}
                    <h1 className={styles.heading}>{service.title}</h1>
                    <p className={styles.subheading}>{service.subtitle}</p>

                    {/* Description */}
                    <p className={styles.heroDesc}>{service.heroDesc}</p>

                    {/* CTAs */}
                    <div className={styles.actionGroup}>
                        <a href="#book-demo" className={styles.primaryCta}>
                            <span>Book Free Demo</span>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>

                        <a
                            href={CONTACT_INFO.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryCta}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                            </svg>
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>

                    {/* Stats Highlights */}
                    <div className={styles.statsRow}>
                        {service.stats.map((stat, idx) => (
                            <div key={idx} className={styles.statItem}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
