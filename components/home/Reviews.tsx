"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

interface ReviewItem {
    id: string;
    rating: number;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

const reviewsData: ReviewItem[] = [
    {
        id: "review-1",
        rating: 5,
        quote:
            "“Gamanext delivered our website beyond expectations. The team is professional, creative and always supportive.”",
        author: "Rohit Sharma",
        role: "Business Owner",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: "review-2",
        rating: 5,
        quote:
            "“Excellent design work and digital marketing support. We saw real growth in our online leads.”",
        author: "Priya Mehta",
        role: "Marketing Head",
        avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: "review-3",
        rating: 5,
        quote:
            "“Their automation solutions with AI agents have saved us a lot of time. Highly recommended!”",
        author: "Arjun Kumar",
        role: "Founder",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
];

export default function Reviews() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
    };

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.container}>
                {/* Header Bar */}
                <div className={styles.headerRow}>
                    <div className={styles.titleCol}>
                        <span className={styles.tagBadge}>CUSTOMER REVIEWS</span>
                        <h2 className={styles.heading}>What Our Clients Say</h2>
                        <p className={styles.subheading}>
                            Trusted by businesses across industries.
                        </p>
                    </div>

                    {/* Carousel Arrow Controls (Strictly 34px buttons) */}
                    <div className={styles.carouselControls}>
                        <button
                            type="button"
                            className={styles.controlBtn}
                            onClick={scrollLeft}
                            aria-label="Scroll reviews left"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className={styles.controlBtn}
                            onClick={scrollRight}
                            aria-label="Scroll reviews right"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Reviews Cards Deck */}
                <div className={styles.sliderDeck} ref={sliderRef}>
                    {reviewsData.map((item) => (
                        <div key={item.id} className={styles.reviewCard}>
                            {/* 5 Yellow Stars */}
                            <div className={styles.starsRow}>
                                {[...Array(item.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="#f59e0b"
                                        stroke="#f59e0b"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Quote */}
                            <p className={styles.quoteText}>{item.quote}</p>

                            {/* Author Details */}
                            <div className={styles.authorRow}>
                                <div className={styles.avatarWrap}>
                                    <Image
                                        src={item.avatar}
                                        alt={item.author}
                                        fill
                                        unoptimized
                                        className={styles.avatarImg}
                                    />
                                </div>
                                <div className={styles.authorMeta}>
                                    <h4 className={styles.authorName}>{item.author}</h4>
                                    <span className={styles.authorRole}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}