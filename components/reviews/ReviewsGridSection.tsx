"use client";

import React, { useState } from "react";
import styles from "./ReviewsGridSection.module.css";
import WriteReviewModal from "./WriteReviewModal";

const categories = [
    "All Reviews",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Design",
    "Automation",
    "CRM/ERM",
];

const initialReviewsData = [
    {
        category: "Web Development",
        rating: 5,
        quote:
            "Gamanext delivered our website beyond our expectations. The team is professional, creative and always supportive. Highly recommended!",
        name: "Rohit Sharma",
        role: "Business Owner",
        serviceTag: "Website Development",
        tagType: "blue",
        avatarBg: "#dbeafe",
    },
    {
        category: "Mobile App Development",
        rating: 5,
        quote:
            "We worked with Gamanext for our mobile app and they did an amazing job. The app is smooth, user-friendly and exactly what we envisioned.",
        name: "Priya Mehta",
        role: "Marketing Head",
        serviceTag: "Mobile App Development",
        tagType: "pink",
        avatarBg: "#fce7f3",
    },
    {
        category: "Digital Marketing",
        rating: 5,
        quote:
            "Their digital marketing strategies helped us reach the right audience and increase our sales significantly. Great team to work with!",
        name: "Arjun Kumar",
        role: "Founder",
        serviceTag: "Digital Marketing",
        tagType: "green",
        avatarBg: "#dcfce7",
    },
    {
        category: "Design",
        rating: 5,
        quote:
            "The logo and branding designs were outstanding. They truly understood our brand and created a unique identity.",
        name: "Sneha Reddy",
        role: "CEO",
        serviceTag: "Branding & Design",
        tagType: "purple",
        avatarBg: "#fae8ff",
    },
    {
        category: "CRM/ERM",
        rating: 5,
        quote:
            "We implemented a custom CRM solution with Gamanext and it streamlined our entire business process. Excellent support!",
        name: "Vikram Patel",
        role: "Operations Head",
        serviceTag: "CRM Solution",
        tagType: "blue",
        avatarBg: "#e0e7ff",
    },
    {
        category: "Automation",
        rating: 5,
        quote:
            "The AI automation and chatbot solution saved us a lot of time and improved our customer support. Very professional team!",
        name: "Neha Gupta",
        role: "Co-Founder",
        serviceTag: "AI & Automation",
        tagType: "indigo",
        avatarBg: "#f3e8ff",
    },
    {
        category: "Web Development",
        rating: 5,
        quote:
            "Our Next.js web application loads blazingly fast and the checkout conversions improved by 40%. Fantastic work by the engineering team!",
        name: "Rajesh Varma",
        role: "Managing Director",
        serviceTag: "Web Development",
        tagType: "blue",
        avatarBg: "#dbeafe",
    },
    {
        category: "Design",
        rating: 5,
        quote:
            "The Figma design system delivered was pixel-perfect and made our development phase 2x faster. Couldn't have asked for better UI/UX designers.",
        name: "Ananya Iyer",
        role: "Product Manager",
        serviceTag: "Branding & Design",
        tagType: "purple",
        avatarBg: "#fae8ff",
    },
    {
        category: "Automation",
        rating: 5,
        quote:
            "Their WhatsApp bot handles 80% of client FAQs automatically now. Customer satisfaction is up and response time dropped to seconds.",
        name: "Karan Johar",
        role: "Customer Success Lead",
        serviceTag: "AI & Automation",
        tagType: "indigo",
        avatarBg: "#f3e8ff",
    },
];

export default function ReviewsGridSection() {
    const [reviewsList, setReviewsList] = useState(initialReviewsData);
    const [activeCategory, setActiveCategory] = useState("All Reviews");
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);

    const filteredReviews =
        activeCategory === "All Reviews"
            ? reviewsList
            : reviewsList.filter((item) => item.category === activeCategory);

    const displayedReviews = filteredReviews.slice(0, visibleCount);
    const hasMore = visibleCount < filteredReviews.length;

    const handleAddReview = (newReview: any) => {
        setReviewsList([newReview, ...reviewsList]);
    };

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setVisibleCount(6);
    };

    return (
        <>
            <section className={styles.sectionWrapper} id="all-reviews">
                <div className={styles.container}>
                    {/* ================= Top Bar: Tabs + Write Review Button ================= */}
                    <div className={styles.topControlBar}>
                        <div className={styles.tabsScrollWrapper}>
                            <div className={styles.tabsRow}>
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => handleCategoryChange(cat)}
                                        className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Write a Review Button (Strictly 34px Height & 6px Radius) */}
                        <button
                            type="button"
                            onClick={() => setIsWriteModalOpen(true)}
                            className={styles.writeReviewBtn}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            <span>Write a Review</span>
                        </button>
                    </div>

                    {/* ================= 3-Column Reviews Grid ================= */}
                    <div className={styles.grid}>
                        {displayedReviews.map((item, idx) => (
                            <div key={idx} className={styles.reviewCard}>
                                {/* Star Rating */}
                                <div className={styles.starsRow}>
                                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                                        <svg
                                            key={starIdx}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="#f59e0b"
                                            stroke="#f59e0b"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review Testimonial Text */}
                                <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>

                                {/* Author Row */}
                                <div className={styles.authorRow}>
                                    <div
                                        className={styles.avatarCircle}
                                        style={{ backgroundColor: item.avatarBg }}
                                    >
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#475569"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <div className={styles.authorDetails}>
                                        <span className={styles.authorName}>{item.name}</span>
                                        <span className={styles.authorRole}>{item.role}</span>
                                    </div>
                                </div>

                                {/* Category Pill Tag (Strictly 6px border radius) */}
                                <div className={styles.tagRow}>
                                    <span
                                        className={`${styles.serviceBadge} ${styles[item.tagType]
                                            }`}
                                    >
                                        {item.serviceTag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ================= View More Reviews Option ================= */}
                    {hasMore && (
                        <div className={styles.viewMoreRow}>
                            <button
                                type="button"
                                onClick={() => setVisibleCount((prev) => prev + 3)}
                                className={styles.viewMoreBtn}
                            >
                                <span>View More Reviews</span>
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
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <polyline points="19 12 12 19 5 12" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Write Review Modal */}
            <WriteReviewModal
                isOpen={isWriteModalOpen}
                onClose={() => setIsWriteModalOpen(false)}
                onAddReview={handleAddReview}
            />
        </>
    );
}