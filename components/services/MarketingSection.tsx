"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./MarketingSection.module.css";
import ServiceDetailModal, {
    ServiceDetailItem,
} from "./ServiceDetailModal";
import QuoteModal from "@/components/modal/QuoteModal";

const marketingCards: {
    id: string;
    title: string;
    description: string;
    themeClass: string;
    icon: React.ReactNode;
    details: ServiceDetailItem;
}[] = [
        {
            id: "facebook-ads",
            title: "Facebook Ads",
            description:
                "Target the right audience and increase your brand visibility.",
            themeClass: "cardMint",
            icon: (
                <div className={styles.facebookIconWrap}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </div>
            ),
            details: {
                title: "Facebook Advertising Campaigns",
                badge: "META ADS",
                description:
                    "High-ROI Facebook ad campaigns designed with precision demographic, psychographic, and retargeting parameters to maximize lead conversions and direct sales.",
                highlights: [
                    "Advanced Custom & Lookalike Audiences",
                    "Meta Pixel & Conversion API Setup",
                    "A/B Testing for Ad Creatives & Copies",
                    "Weekly ROAS Performance Tracking",
                ],
                features: [
                    {
                        name: "Audience Segmentation",
                        desc: "Pinpoint customer targeting leveraging behavioral data, interest clusters, and buyer journeys.",
                    },
                    {
                        name: "Funnel Retargeting",
                        desc: "Targeting cart abandoners and high-intent visitors with compelling offer incentives.",
                    },
                    {
                        name: "Lead Generation Forms",
                        desc: "Instant native lead forms reducing friction to generate pre-qualified B2B and B2C inquiries.",
                    },
                ],
                deliverables: [
                    "Full Ad Account Setup & Pixel Integration",
                    "Ad Creative Copy & Visual Variations",
                    "Live Real-Time Analytics Dashboard",
                ],
            },
        },
        {
            id: "instagram-ads",
            title: "Instagram Ads",
            description:
                "Engage potential customers with creative campaigns.",
            themeClass: "cardViolet",
            icon: (
                <div className={styles.instagramIconWrap}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </div>
            ),
            details: {
                title: "Instagram Ads & Reels Promotion",
                badge: "VISUAL SOCIAL ADS",
                description:
                    "Visually striking Instagram Story, Reels, and Carousel campaigns tailored to captivate mobile audiences and drive impulse actions.",
                highlights: [
                    "Reels & Vertical Video Ads",
                    "Carousel & Interactive Poll Formats",
                    "Shoppable Tag Integration",
                    "Influencer Collab Ad Whitelisting",
                ],
                features: [
                    {
                        name: "Short-Form Video Production",
                        desc: "High-hook video creatives produced specifically for viral TikTok and Reels formats.",
                    },
                    {
                        name: "Interactive Story Campaigns",
                        desc: "Tap-forward interactive Stories with direct swipe-up shopping and booking links.",
                    },
                    {
                        name: "Influencer Amplification",
                        desc: "Boosting top-performing creator content through partnership ad access.",
                    },
                ],
                deliverables: [
                    "High-definition 9:16 Video Creatives",
                    "Carousel Multi-card Storyboards",
                    "Cost Per Click (CPC) Optimization Reports",
                ],
            },
        },
        {
            id: "youtube-ads",
            title: "YouTube Ads",
            description:
                "Build brand awareness and reach a wider audience through video.",
            themeClass: "cardPeach",
            icon: (
                <div className={styles.youtubeIconWrap}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </div>
            ),
            details: {
                title: "YouTube Video Advertising",
                badge: "VIDEO MARKETING",
                description:
                    "High-impact Skippable, Non-Skippable, and YouTube Shorts ad campaigns reaching hyper-targeted audience segments actively searching Google and YouTube.",
                highlights: [
                    "In-Stream & Discovery Placements",
                    "YouTube Shorts Ads",
                    "Google Intent Search Match",
                    "Brand Lift & Recall Studies",
                ],
                features: [
                    {
                        name: "Search-Intent Targeting",
                        desc: "Targeting users watching related review videos and competitor product tutorials.",
                    },
                    {
                        name: "Custom Video Storyboards",
                        desc: "Creating 5-second attention-grabbing intro hooks preventing users from skipping.",
                    },
                    {
                        name: "Conversion Action Extensions",
                        desc: "Clickable overlays and lead forms embedded right under the video player.",
                    },
                ],
                deliverables: [
                    "Targeting Matrix & Keyword List",
                    "Video Editing for Ad Cut-downs (6s, 15s, 30s)",
                    "Comprehensive View-Through Rate Reports",
                ],
            },
        },
    ];

export default function MarketingSection() {
    const [selectedService, setSelectedService] =
        useState<ServiceDetailItem | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const handleOpenDetail = (service: ServiceDetailItem) => {
        setSelectedService(service);
        setIsDetailModalOpen(true);
    };

    return (
        <>
            <section className={styles.sectionWrapper} id="marketing">
                <div className={styles.container}>
                    {/* ================= Left: Intro Column ================= */}
                    <div className={styles.introCol}>
                        <div className={styles.badgeWrapper}>
                            <div className={styles.iconTag}>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#047857"
                                    strokeWidth="2.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m3 11 18-5v12L3 14v-3z" />
                                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                                </svg>
                            </div>
                            <span className={styles.badgeText}>DIGITAL MARKETING</span>
                        </div>

                        <h2 className={styles.heading}>
                            Reach the Right <br />
                            Audience
                        </h2>

                        <p className={styles.description}>
                            We help you grow your brand with result-driven digital marketing
                            strategies.
                        </p>

                        <div className={styles.actionWrap}>
                            <Link
                                href="/services/marketing"
                                className={styles.learnMoreMainBtn}
                            >
                                <span>Explore Details &amp; Book Demo</span>
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
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* ================= Right: 3 Cards Grid ================= */}
                    <div className={styles.cardsGrid}>
                        {marketingCards.map((card) => (
                            <div
                                key={card.id}
                                className={`${styles.card} ${styles[card.themeClass]}`}
                            >
                                {/* Social Icon Avatar */}
                                <div className={styles.iconContainer}>{card.icon}</div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDesc}>{card.description}</p>

                                    {/* Strict 34px Button & 6px Radius */}
                                    <button
                                        type="button"
                                        onClick={() => handleOpenDetail(card.details)}
                                        className={styles.cardActionBtn}
                                    >
                                        <span>Learn More</span>
                                        <svg
                                            width="11"
                                            height="11"
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
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Details Modal */}
            <ServiceDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                service={selectedService}
                onOpenQuote={() => setIsQuoteModalOpen(true)}
            />

            {/* Quote Modal */}
            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}