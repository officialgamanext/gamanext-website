"use client";

import React from "react";
import Link from "next/link";
import styles from "./ContactFaqSection.module.css";

const faqItems = [
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9333ea"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        iconBg: "#fae8ff",
        question: "What is your typical response time?",
        answer: "We usually respond to all enquiries within 24 hours.",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        iconBg: "#eff6ff",
        question: "Do you provide free consultation?",
        answer:
            "Yes, we offer a free initial consultation to understand your requirements.",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c026d3"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 3h12M6 8h12M6 13l7 8M6 13h5a4 4 0 0 0 0-8" />
            </svg>
        ),
        iconBg: "#fdf4ff",
        question: "How much do your services cost?",
        answer:
            "The cost depends on the project scope. Contact us for a custom quote.",
    },
    {
        icon: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        iconBg: "#f0f9ff",
        question: "Do you work with clients outside India?",
        answer:
            "Yes, we work with clients globally and can collaborate remotely.",
    },
];

export default function ContactFaqSection() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                {/* ================= Header Row ================= */}
                <div className={styles.headerRow}>
                    <div className={styles.headerLeft}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>FREQUENT QUESTIONS</span>
                        </div>
                        <h2 className={styles.heading}>Quick Answers</h2>
                        <p className={styles.subheading}>
                            Here are some common questions we get. If you have any other questions,
                            feel free to reach out to us.
                        </p>
                    </div>

                    <Link href="/faq" className={styles.viewAllBtn}>
                        <span>View All FAQs</span>
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
                </div>

                {/* ================= 4 Cards Grid ================= */}
                <div className={styles.cardsGrid}>
                    {faqItems.map((item, index) => (
                        <div key={index} className={styles.faqCard}>
                            <div
                                className={styles.iconWrapper}
                                style={{ backgroundColor: item.iconBg }}
                            >
                                {item.icon}
                            </div>
                            <h3 className={styles.questionText}>{item.question}</h3>
                            <p className={styles.answerText}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}