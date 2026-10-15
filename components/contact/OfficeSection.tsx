"use client";

import React from "react";
import Image from "next/image";
import styles from "./OfficeSection.module.css";
import { CONTACT_INFO } from "@/constants/contact";

export default function OfficeSection() {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.mainCard}>
                    {/* ================= Left: Interactive Map Stage ================= */}
                    <div className={styles.mapContainer}>
                        <iframe
                            title="Gamanext Office Location"
                            src={CONTACT_INFO.googleMapsEmbedUrl}
                            className={styles.mapIframe}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {/* Custom Map Pin Overlay matching design */}
                        <div className={styles.mapPinCard}>
                            <div className={styles.pinIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#dc2626">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                </svg>
                            </div>
                            <div className={styles.pinDetails}>
                                <span className={styles.pinTitle}>Gamanext</span>
                                <span className={styles.pinSubtitle}>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}</span>
                            </div>
                        </div>
                    </div>

                    {/* ================= Right: Office Details Column ================= */}
                    <div className={styles.detailsCol}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>OUR OFFICE</span>
                        </div>

                        <h2 className={styles.heading}>Visit Our Office</h2>
                        <p className={styles.description}>
                            We&apos;re located in {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}. Come and meet our team
                            to discuss your ideas in person.
                        </p>

                        {/* Location & Directions Pill Card (6px radius) */}
                        <div className={styles.locationPillCard}>
                            <div className={styles.locationIconBox}>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="#0b57d0"
                                >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                </svg>
                            </div>
                            <div className={styles.locationTextWrap}>
                                <span className={styles.companyName}>
                                    Gamanext Software Solutions
                                </span>
                                <span className={styles.companyAddress}>
                                    {CONTACT_INFO.address.full}
                                </span>
                                <a
                                    href={CONTACT_INFO.googleMapsDirectionsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.directionsLink}
                                >
                                    <span>Get Directions</span>
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
                                </a>
                            </div>
                        </div>

                        {/* Office Interior Image (6px radius) */}
                        <div className={styles.officeImageWrapper}>
                            <Image
                                src="./gamanext.png"
                                alt="Gamanext Office Interior"
                                fill
                                className={styles.officeImg}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}