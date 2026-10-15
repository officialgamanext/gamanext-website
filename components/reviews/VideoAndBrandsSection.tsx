"use client";

import React, { useRef } from "react";
import styles from "./VideoAndBrandsSection.module.css";

const videoTestimonials = [
    {
        title: "Excellent Development Support",
        name: "Rohit Sharma",
        role: "Business Owner",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Great Design and Branding Work",
        name: "Priya Mehta",
        role: "Marketing Head",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Digital Marketing Results",
        name: "Arjun Kumar",
        role: "Founder",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
];

const brandLogos = [
    {
        name: "RJR FRESH",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
        ),
    },
    {
        name: "BookByte",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
            </svg>
        ),
    },
    {
        name: "LEKA",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 8v8" />
                <path d="M8 12h3" />
                <path d="M15 8v8" />
            </svg>
        ),
    },
    {
        name: "Pharmanext",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2b3a4a">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
            </svg>
        ),
    },
    {
        name: "RetailNext",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
        ),
    },
    {
        name: "HospitalNext",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2b3a4a">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
    },
];

export default function VideoAndBrandsSection() {
    const brandsScrollRef = useRef<HTMLDivElement>(null);

    const scrollBrands = (direction: "left" | "right") => {
        if (brandsScrollRef.current) {
            const scrollAmount = direction === "left" ? -240 : 240;
            brandsScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                {/* ================= Video Testimonials Top Subsection ================= */}
                <div className={styles.videoSection}>
                    <div className={styles.headerRow}>
                        <div className={styles.headerLeft}>
                            <div className={styles.badgeWrapper}>
                                <span className={styles.badge}>VIDEO TESTIMONIALS</span>
                            </div>
                            <h2 className={styles.heading}>Hear It From Our Clients</h2>
                            <p className={styles.subheading}>
                                Watch what our clients have to say about working with Gamanext.
                            </p>
                        </div>

                        {/* Carousel Controls (Strict 34px by 34px & 6px Radius) */}
                        <div className={styles.navControls}>
                            <button
                                type="button"
                                className={styles.carouselBtn}
                                aria-label="Previous testimonial"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12" />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className={styles.carouselBtn}
                                aria-label="Next testimonial"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Video Cards Grid (Strict 6px border radius) */}
                    <div className={styles.cardsGrid}>
                        {videoTestimonials.map((item, idx) => (
                            <div key={idx} className={styles.videoCard}>
                                <div className={styles.thumbnailWrapper}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={styles.thumbnailImg}
                                    />
                                    {/* Floating Circular Play Button */}
                                    <button
                                        type="button"
                                        className={styles.playButton}
                                        aria-label={`Play video testimonial from ${item.name}`}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#0b57d0">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.videoTitle}>{item.title}</h3>
                                    <p className={styles.authorMeta}>
                                        <span className={styles.authorName}>{item.name}</span>
                                        <span className={styles.metaDot}>•</span>
                                        <span className={styles.authorRole}>{item.role}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= Brands That Trust Us Bottom Subsection ================= */}
                <div className={styles.brandsSection}>
                    <div className={styles.headerRow}>
                        <div className={styles.headerLeft}>
                            <div className={styles.badgeWrapper}>
                                <span className={styles.badge}>OUR CLIENTS</span>
                            </div>
                            <h2 className={styles.heading}>Brands That Trust Us</h2>
                            <p className={styles.subheading}>
                                We&apos;re proud to work with amazing businesses across various industries.
                            </p>
                        </div>

                        {/* Top Carousel Navigation for larger screens */}
                        <div className={`${styles.navControls} ${styles.desktopNavControls}`}>
                            <button
                                type="button"
                                onClick={() => scrollBrands("right")}
                                className={styles.carouselBtn}
                                aria-label="Next brand logos"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Logo Strip Row with Side Arrows */}
                    <div className={styles.brandCarouselWrapper}>
                        <button
                            type="button"
                            onClick={() => scrollBrands("left")}
                            className={`${styles.carouselBtn} ${styles.sideNavBtn}`}
                            aria-label="Scroll brands left"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12" />
                                <polyline points="12 19 5 12 12 5" />
                            </svg>
                        </button>

                        <div className={styles.brandsScrollList} ref={brandsScrollRef}>
                            {brandLogos.map((brand, idx) => (
                                <div key={idx} className={styles.brandItem}>
                                    <div className={styles.brandIconWrap}>{brand.icon}</div>
                                    <span className={styles.brandName}>{brand.name}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => scrollBrands("right")}
                            className={`${styles.carouselBtn} ${styles.sideNavBtn}`}
                            aria-label="Scroll brands right"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}