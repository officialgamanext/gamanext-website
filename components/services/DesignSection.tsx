"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./DesignSection.module.css";
import ServiceDetailModal, {
    ServiceDetailItem,
} from "./ServiceDetailModal";
import QuoteModal from "@/components/modal/QuoteModal";

const designCards: {
    id: string;
    title: string;
    description: string;
    themeClass: string;
    illustration: React.ReactNode;
    details: ServiceDetailItem;
}[] = [
        {
            id: "logo-design",
            title: "Logo Designing",
            description: "Unique and memorable logos for your brand identity.",
            themeClass: "cardPink",
            illustration: (
                <div className={styles.logoMockup}>
                    <div className={styles.geometricLogo}>
                        <div className={styles.logoPillLong} />
                        <div className={styles.logoPillShort} />
                    </div>
                </div>
            ),
            details: {
                title: "Logo Designing",
                badge: "BRAND IDENTITY",
                description:
                    "Crafting iconic, distinctive, and versatile brand marks engineered to be memorable across web, app interfaces, print collateral, and merchandise.",
                highlights: [
                    "Vector Source Files (.AI, .SVG, .EPS)",
                    "Monochrome & Dark Mode Variations",
                    "Comprehensive Brand Usage Guidelines",
                    "Full Copyright Transfer",
                ],
                features: [
                    {
                        name: "Concept Exploration",
                        desc: "Multiple distinct logo concepts exploring modern minimal, abstract geometric, and typographic styles.",
                    },
                    {
                        name: "Color Psychology",
                        desc: "Curated primary and secondary palettes tested for digital accessibility and emotional resonance.",
                    },
                    {
                        name: "Scalability Testing",
                        desc: "Visual clarity tested across favicon 16px sizes up to large scale physical banners.",
                    },
                ],
                deliverables: [
                    "Vector Package (AI, SVG, PDF, PNG, JPG)",
                    "Social Media Avatar & Header Kit",
                    "Brand Color Codes (HEX, RGB, CMYK, Pantone)",
                ],
            },
        },
        {
            id: "branding",
            title: "Branding",
            description:
                "Complete brand identity design to give your business a professional look.",
            themeClass: "cardCream",
            illustration: (
                <div className={styles.brandingMockup}>
                    <div className={styles.bizCardFront}>
                        <div className={styles.bizBrandText}>Brand</div>
                        <div className={styles.bizSubBar} />
                    </div>
                    <div className={styles.bizCardBack}>
                        <div className={styles.bizBackAccent} />
                        <div className={styles.bizBackLines}>
                            <div className={styles.bizBackLine} />
                            <div className={styles.bizBackLine} />
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "Complete Brand Identity",
                badge: "BRAND STRATEGY",
                description:
                    "End-to-end design kits covering business stationery, typography hierarchies, brand voice guidelines, and visual assets for a unified company presence.",
                highlights: [
                    "Complete Brand Guidelines Book",
                    "Stationery & Business Card Kits",
                    "Email Signature Templates",
                    "Consistent Visual System",
                ],
                features: [
                    {
                        name: "Typography System",
                        desc: "Heading, body, and monospace font pairings with licensed open-source and commercial recommendations.",
                    },
                    {
                        name: "Stationery System",
                        desc: "Print-ready business cards, letterheads, invoice templates, and branded envelopes.",
                    },
                    {
                        name: "Digital Asset Kit",
                        desc: "Presentation decks, email signatures, and corporate document design templates.",
                    },
                ],
                deliverables: [
                    "Print-ready PDF / InDesign Files",
                    "Editable Presentation Decks (Canva/Figma/PPT)",
                    "30+ Page PDF Brand Bible",
                ],
            },
        },
        {
            id: "poster-design",
            title: "Poster Designing",
            description:
                "Eye-catching posters for your business promotions and events.",
            themeClass: "cardViolet",
            illustration: (
                <div className={styles.posterMockup}>
                    <div className={styles.posterSheet}>
                        <div className={styles.posterHeader} />
                        <div className={styles.posterGraphic}>
                            <div className={styles.posterGraphicItem} />
                        </div>
                        <div className={styles.posterLines}>
                            <div className={styles.posterLine} />
                            <div className={styles.posterLine} />
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "Poster & Print Design",
                badge: "PRINT & EVENTS",
                description:
                    "High-resolution promotional posters, roll-up standees, and retail marketing materials designed to draw attention and deliver clear calls to action.",
                highlights: [
                    "Ultra High-Res 300 DPI",
                    "CMYK Print Ready with Bleeds",
                    "Multiple Aspect Ratios (A1 to A4)",
                    "Digital Poster Formats Included",
                ],
                features: [
                    {
                        name: "Event & Product Posters",
                        desc: "Dynamic compositions optimized for exhibitions, product launches, and retail storefronts.",
                    },
                    {
                        name: "Roll-up & Standee Formats",
                        desc: "Vertical convention banners formatted to standard trade show physical dimensions.",
                    },
                    {
                        name: "Typography Hierarchy",
                        desc: "Large focal headers engineered to be legible from 10+ feet away.",
                    },
                ],
                deliverables: [
                    "Print Ready PDF with Bleed Marks",
                    "Source File (PSD / AI / Figma)",
                    "Social-ready Vertical Formats",
                ],
            },
        },
        {
            id: "banner-design",
            title: "Banner Designing",
            description:
                "Creative banners for online advertising and offline marketing.",
            themeClass: "cardPeach",
            illustration: (
                <div className={styles.bannerMockup}>
                    <div className={styles.bannerBack}>
                        <div className={styles.bannerText}>BANNER</div>
                    </div>
                    <div className={styles.bannerFront}>
                        <div className={styles.bannerBadge} />
                        <div className={styles.bannerLine} />
                    </div>
                </div>
            ),
            details: {
                title: "Online & Offline Banners",
                badge: "DIGITAL MARKETING",
                description:
                    "High-converting digital ad banners for Google Display, Meta, and LinkedIn networks alongside physical trade show billboard designs.",
                highlights: [
                    "Google Display Ads (All Sizes)",
                    "Meta & LinkedIn Ad Formats",
                    "High Click-Through Rates",
                    "Animated HTML5 Options",
                ],
                features: [
                    {
                        name: "Performance Ad Creatives",
                        desc: "A/B testing creative variations focusing on offer clarity and conversion rates.",
                    },
                    {
                        name: "Social Media Hero Banners",
                        desc: "Custom cover banners for YouTube, LinkedIn Company Pages, Twitter/X, and Facebook.",
                    },
                    {
                        name: "Outdoor Hoardings & Billboards",
                        desc: "Massive scale vector graphics structured for highway hoardings and metro ads.",
                    },
                ],
                deliverables: [
                    "Full IAB Standard Ad Dimensions",
                    "Optimized WebP, PNG, and JPG exports",
                    "Editable Figma / Canva templates",
                ],
            },
        },
        {
            id: "website-design",
            title: "Website Designing",
            description: "Modern and engaging website user interfaces.",
            themeClass: "cardBlue",
            illustration: (
                <div className={styles.webDesignMockup}>
                    <div className={styles.webBrowser}>
                        <div className={styles.browserBar}>
                            <span className={styles.browserDot} />
                            <span className={styles.browserDot} />
                            <span className={styles.browserDot} />
                        </div>
                        <div className={styles.browserCanvas}>
                            <div className={styles.browserHero} />
                            <div className={styles.browserCards}>
                                <div className={styles.miniCard} />
                                <div className={styles.miniCard} />
                            </div>
                        </div>
                    </div>
                </div>
            ),
            details: {
                title: "UI/UX Website Designing",
                badge: "DIGITAL EXPERIENCE",
                description:
                    "User-centric website and SaaS UI/UX designs built in Figma with complete design systems, reusable component libraries, and interactive prototypes.",
                highlights: [
                    "Modern Glassmorphism & Flat UI",
                    "Figma Auto-Layout & Variants",
                    "Mobile, Tablet & Desktop Views",
                    "Interactive Clickable Prototype",
                ],
                features: [
                    {
                        name: "Wireframing & Information Architecture",
                        desc: "Mapping seamless user journeys to minimize bounce rates and maximize sign-ups.",
                    },
                    {
                        name: "Responsive Component Systems",
                        desc: "Scalable tokens for typography, spacing, colors, cards, and navigation states.",
                    },
                    {
                        name: "Developer Handoff Specs",
                        desc: "Pixel-perfect inspection specs ready for Next.js and CSS modules development.",
                    },
                ],
                deliverables: [
                    "Full Figma Source File (.fig)",
                    "Design System Style Guide",
                    "Interactive Prototype Link",
                ],
            },
        },
        {
            id: "other-designs",
            title: "Any Other Designs",
            description: "Brochures, social media designs, infographics and more.",
            themeClass: "cardLightPink",
            illustration: (
                <div className={styles.vectorMockup}>
                    <div className={styles.penToolCanvas}>
                        <svg
                            width="64"
                            height="46"
                            viewBox="0 0 64 46"
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 36 C 14 12, 50 12, 60 36" strokeDasharray="3 3" />
                            <circle cx="4" cy="36" r="3" fill="#2563eb" />
                            <circle cx="60" cy="36" r="3" fill="#2563eb" />
                            <circle cx="32" cy="18" r="3" fill="#2563eb" />
                            {/* Pen Tool Nib */}
                            <path
                                d="M32 20 L26 34 L32 38 L38 34 Z"
                                fill="#1e293b"
                                stroke="#0f172a"
                            />
                            <circle cx="32" cy="31" r="1.5" fill="#ffffff" />
                        </svg>
                    </div>
                </div>
            ),
            details: {
                title: "Custom Graphic Solutions",
                badge: "CREATIVE SERVICES",
                description:
                    "Bespoke illustration, infographic design, multi-page company brochures, product packaging, and customized social media content.",
                highlights: [
                    "Multi-page Tri-Fold & Bi-Fold Brochures",
                    "Informative Visual Infographics",
                    "Product Packaging & Label Design",
                    "Custom Vector Illustrations",
                ],
                features: [
                    {
                        name: "Corporate Brochures",
                        desc: "Sleek company profiles and product catalogs crafted for corporate pitches.",
                    },
                    {
                        name: "Social Media Post Packs",
                        desc: "Consistent template bundles for LinkedIn, Instagram carousels, and promotional stories.",
                    },
                    {
                        name: "Packaging & Merchandise",
                        desc: "Die-line formatted packaging boxes, labels, stickers, and company t-shirts.",
                    },
                ],
                deliverables: [
                    "Vector Package & Die-cut PDFs",
                    "Canva / PSD Editable Files",
                    "Social Media Dimensions Pack",
                ],
            },
        },
    ];

export default function DesignSection() {
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
            <section className={styles.sectionWrapper} id="design">
                <div className={styles.container}>
                    {/* ================= Left: Intro Column ================= */}
                    <div className={styles.introCol}>
                        <div className={styles.badgeWrapper}>
                            <div className={styles.iconTag}>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                    <path d="M2 2l7.586 7.586" />
                                    <circle cx="11" cy="11" r="2" />
                                </svg>
                            </div>
                            <span className={styles.badgeText}>DESIGN</span>
                        </div>

                        <h2 className={styles.heading}>
                            Creative Designs <br />
                            That Make an Impact
                        </h2>

                        <p className={styles.description}>
                            We create stunning designs that help your brand stand out and
                            connect with your audience.
                        </p>

                        <div className={styles.actionWrap}>
                            <Link
                                href="/services/design"
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

                    {/* ================= Right: 6 Service Cards Strip ================= */}
                    <div className={styles.cardsScrollArea}>
                        <div className={styles.cardsGrid}>
                            {designCards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`${styles.card} ${styles[card.themeClass]}`}
                                >
                                    {/* Illustration Area */}
                                    <div className={styles.cardGraphicArea}>
                                        {card.illustration}
                                    </div>

                                    {/* Title & Desc */}
                                    <div className={styles.cardBody}>
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