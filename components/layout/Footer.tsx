"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

import { CONTACT_INFO } from "@/constants/contact";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

const serviceLinks = [
    { label: "Development", href: "/services/development" },
    { label: "Design", href: "/services/design" },
    { label: "Digital Marketing", href: "/services/marketing" },
    { label: "Automation", href: "/services/automation" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top 4-Column Grid */}
                <div className={styles.topSection}>
                    {/* Column 1: Brand & Socials */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.brand} aria-label="Gamanext Home">
                            <span className={styles.srOnly}>Gamanext Software Solutions</span>
                        </Link>

                        <p className={styles.tagline}>
                            We help businesses grow with innovative technology, creative design,
                            digital marketing and smart automation solutions.
                        </p>

                        {/* Social Icons (Strictly 34px buttons with 6px border-radius) */}
                        <div className={styles.socialRow}>
                            {/* Facebook */}
                            <a
                                href={CONTACT_INFO.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="Facebook"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href={CONTACT_INFO.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                                aria-label="Instagram"
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.linkCol}>
                        <h4 className={styles.colHeading}>Quick Links</h4>
                        <div className={styles.linkList}>
                            {quickLinks.map((link) => (
                                <Link key={link.label} href={link.href} className={styles.footerLink}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className={styles.linkCol}>
                        <h4 className={styles.colHeading}>Our Services</h4>
                        <div className={styles.linkList}>
                            {serviceLinks.map((svc) => (
                                <Link key={svc.label} href={svc.href} className={styles.footerLink}>
                                    {svc.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colHeading}>Contact Us</h4>
                        <div className={styles.contactList}>
                            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactItem}>
                                <span className={styles.contactIcon}>
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <span>{CONTACT_INFO.email}</span>
                            </a>

                            <a href={`tel:${CONTACT_INFO.phoneTel}`} className={styles.contactItem}>
                                <span className={styles.contactIcon}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-.99-1.11z" />
                                    </svg>
                                </span>
                                <span>{CONTACT_INFO.displayPhone}</span>
                            </a>

                            <a
                                href={CONTACT_INFO.googleMapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactItem}
                            >
                                <span className={styles.contactIcon}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                    </svg>
                                </span>
                                <span>{CONTACT_INFO.address.city}, Andhra Pradesh</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyrightText}>
                        © 2026 Gamanext. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <span className={styles.legalDivider}>|</span>
                        <Link href="/terms-conditions" className={styles.legalLink}>
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}