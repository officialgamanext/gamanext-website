"use client";

import React, { useEffect } from "react";
import styles from "./ServiceDetailModal.module.css";

export interface ServiceDetailItem {
    title: string;
    badge: string;
    description: string;
    highlights: string[];
    features: { name: string; desc: string }[];
    deliverables: string[];
}

interface ServiceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceDetailItem | null;
    onOpenQuote: () => void;
}

export default function ServiceDetailModal({
    isOpen,
    onClose,
    service,
    onOpenQuote,
}: ServiceDetailModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modalCard}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button (Strict 34px by 34px & 6px Radius) */}
                <button
                    type="button"
                    onClick={onClose}
                    className={styles.closeBtn}
                    aria-label="Close details modal"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className={styles.modalContent}>
                    {/* Header */}
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>{service.badge}</span>
                    </div>

                    <h2 className={styles.title}>{service.title}</h2>
                    <p className={styles.description}>{service.description}</p>

                    {/* Quick Highlights Row */}
                    <div className={styles.highlightsRow}>
                        {service.highlights.map((highlight, idx) => (
                            <span key={idx} className={styles.highlightPill}>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {highlight}
                            </span>
                        ))}
                    </div>

                    {/* Core Features Breakdown */}
                    <h3 className={styles.subHeading}>What We Deliver</h3>
                    <div className={styles.featuresList}>
                        {service.features.map((feature, idx) => (
                            <div key={idx} className={styles.featureItem}>
                                <div className={styles.featureBullet} />
                                <div className={styles.featureText}>
                                    <strong>{feature.name}:</strong> {feature.desc}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal Footer Controls */}
                    <div className={styles.modalFooter}>
                        <button
                            type="button"
                            onClick={() => {
                                onClose();
                                onOpenQuote();
                            }}
                            className={styles.primaryActionBtn}
                        >
                            <span>Get Started With This Service</span>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className={styles.secondaryActionBtn}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}