"use client";

import React from "react";
import styles from "./OurValuesSection.module.css";

const valuesData = [
    {
        theme: "blue",
        title: "Innovation",
        description:
            "We embrace new technologies and creative ideas to deliver better solutions.",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="6 3 18 3 22 9 12 22 2 9" />
                <path d="M2 9h20" />
                <path d="M10 3 8 9l4 13 4-13-2-6" />
            </svg>
        ),
    },
    {
        theme: "purple",
        title: "Client Focus",
        description:
            "Our clients' success is at the heart of everything we do.",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333ea"
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
    },
    {
        theme: "green",
        title: "Quality",
        description:
            "We maintain high standards in our work and deliver solutions that create real value.",
        icon: (
            <svg
                width="20"
                height="20"
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
    },
    {
        theme: "yellow",
        title: "Long-Term Partnerships",
        description:
            "We believe in building lasting relationships based on trust and mutual growth.",
        icon: (
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d97706"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
                <path d="m18 10 3.3-3.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6" />
                <path d="m2 14 6 6" />
                <path d="m7 9 5 5" />
                <path d="m10 6 3 3" />
                <path d="m3 7 3-3a1 1 0 0 1 1.4 0l3.3 3.3" />
            </svg>
        ),
    },
];

export default function OurValuesSection() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>OUR VALUES</span>
                    </div>
                    <h2 className={styles.heading}>What Drives Us</h2>
                </div>

                {/* 4 Cards Grid */}
                <div className={styles.cardsGrid}>
                    {valuesData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.card} ${styles[`${item.theme}Card`]}`}
                        >
                            <div
                                className={`${styles.iconWrap} ${styles[`${item.theme}Icon`]}`}
                            >
                                {item.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}