"use client";

import React from "react";
import Link from "next/link";
import styles from "./Services.module.css";

interface ServiceCardData {
    id: string;
    badgeColor: string;
    themeColor: string;
    cardBg: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
    link: string;
}

const servicesData: ServiceCardData[] = [
    {
        id: "development",
        badgeColor: "#2563eb",
        themeColor: "#2563eb",
        cardBg: "#f6f9fe",
        title: "Development",
        description: "Custom solutions to bring your ideas to life.",
        items: [
            "Website & Mobile App Development",
            "Custom Software Development",
            "CRM Solutions",
            "ERM Solutions",
        ],
        link: "/services/development",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        id: "design",
        badgeColor: "#d946ef",
        themeColor: "#a855f7",
        cardBg: "#fdf8ff",
        title: "Design",
        description: "Creative designs that make your brand stand out.",
        items: [
            "Logo Designing",
            "Branding",
            "Poster Designing",
            "Banner Designing",
            "Website Designing",
            "Any Other Designs",
        ],
        link: "/services/design",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        id: "marketing",
        badgeColor: "#22c55e",
        themeColor: "#16a34a",
        cardBg: "#f4fcf6",
        title: "Digital Marketing",
        description: "Reach the right audience and grow your business.",
        items: ["Facebook Ads", "Instagram Ads", "YouTube Ads"],
        link: "/services/marketing",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l18-5v12L3 13v-2z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
            </svg>
        ),
    },
    {
        id: "automation",
        badgeColor: "#f59e0b",
        themeColor: "#d97706",
        cardBg: "#fffcf4",
        title: "Automation",
        description: "Save time and work smarter with AI.",
        items: ["AI Agents", "Chatbots"],
        link: "/services/automation",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.headerArea}>
                    <span className={styles.tagBadge}>OUR SERVICES</span>
                    <h2 className={styles.sectionHeading}>
                        All Your Digital Needs in One Place
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        From development to design, marketing to automation — we help
                        businesses grow with end-to-end digital solutions.
                    </p>
                </div>

                {/* 4 Columns Card Grid */}
                <div className={styles.cardGrid}>
                    {servicesData.map((svc) => (
                        <div
                            key={svc.id}
                            className={styles.card}
                            style={{ backgroundColor: svc.cardBg }}
                        >
                            <div className={styles.cardBody}>
                                {/* Rounded Icon */}
                                <div
                                    className={styles.iconCircle}
                                    style={{ backgroundColor: svc.badgeColor }}
                                >
                                    {svc.icon}
                                </div>

                                {/* Title & Description */}
                                <h3 className={styles.cardTitle}>{svc.title}</h3>
                                <p className={styles.cardDesc}>{svc.description}</p>

                                {/* Checklist */}
                                <ul className={styles.checklist}>
                                    {svc.items.map((item, index) => (
                                        <li key={index} className={styles.checkItem}>
                                            <span
                                                className={styles.checkIcon}
                                                style={{ backgroundColor: svc.themeColor }}
                                            >
                                                <svg
                                                    width="10"
                                                    height="10"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#ffffff"
                                                    strokeWidth="3.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span className={styles.itemLabel}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bottom Action Link / Button (34px height) */}
                            <div className={styles.cardFooter}>
                                <Link href={svc.link} className={styles.learnMoreBtn}>
                                    <span>Learn More</span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}