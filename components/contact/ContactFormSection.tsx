"use client";

import React, { useState } from "react";
import styles from "./ContactFormSection.module.css";
import { CONTACT_INFO } from "@/constants/contact";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* ================= Left: Form Card ================= */}
                    <div className={styles.formCard}>
                        <div className={styles.tagWrapper}>
                            <span className={styles.tagBadge}>SEND US A MESSAGE</span>
                        </div>

                        <h2 className={styles.cardTitle}>Tell Us About Your Project</h2>
                        <p className={styles.cardSubtitle}>
                            Fill out the form below and we&apos;ll get back to you as soon as
                            possible.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Full Name */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={styles.inputField}
                                />
                            </div>

                            {/* Email & Phone Split */}
                            <div className={styles.splitRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                </div>
                            </div>

                            {/* Service Dropdown (34px height & 6px radius) */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Service Interested In *</label>
                                <div className={styles.selectWrapper}>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={styles.selectField}
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option value="web-development">Web Application Development</option>
                                        <option value="mobile-apps">Mobile App Development</option>
                                        <option value="custom-software">Custom Software & Cloud</option>
                                        <option value="ai-automation">AI Agents & Automation</option>
                                        <option value="ui-ux">UI/UX Product Design</option>
                                    </select>
                                    <span className={styles.selectArrow}>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#64748b"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Message */}
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Message *</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your project, requirements or any questions..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textareaField}
                                />
                            </div>

                            {/* Submit CTA Button (34px height & 6px radius) */}
                            <button type="submit" className={styles.submitBtn}>
                                <span>Send Message</span>
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
                            </button>
                        </form>
                    </div>

                    {/* ================= Right: Contact Information Card ================= */}
                    <div className={styles.infoCard}>
                        <div className={styles.infoTopHeader}>
                            <div className={styles.tagWrapper}>
                                <span className={styles.tagBadge}>GET IN TOUCH</span>
                            </div>

                            <h2 className={styles.cardTitle}>Contact Information</h2>
                            <p className={styles.cardSubtitle}>
                                Feel free to reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className={styles.contactItemsList}>
                            {/* Email */}
                            <div className={styles.contactItem}>
                                <div className={styles.infoIconWrap}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0b57d0"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoHeading}>Email Us</span>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className={styles.infoLink}>
                                        {CONTACT_INFO.email}
                                    </a>
                                    <span className={styles.infoNote}>
                                        We typically respond within 24 hours.
                                    </span>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className={styles.contactItem}>
                                <div className={styles.infoIconWrap}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0b57d0"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoHeading}>Call Us</span>
                                    <a href={`tel:${CONTACT_INFO.phoneTel}`} className={styles.infoLink}>
                                        {CONTACT_INFO.displayPhone}
                                    </a>
                                    <span className={styles.infoNote}>
                                        Mon – Sat, 9:00 AM – 6:00 PM (IST)
                                    </span>
                                </div>
                            </div>

                            {/* Office Location */}
                            <div className={styles.contactItem}>
                                <div className={styles.infoIconWrap}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0b57d0"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoHeading}>Our Office</span>
                                    <a
                                        href={CONTACT_INFO.googleMapsDirectionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.infoValue}
                                        style={{ lineHeight: "1.4" }}
                                    >
                                        {CONTACT_INFO.address.full}
                                    </a>
                                    <span className={styles.infoNote}>
                                        Visit us for a detailed discussion.
                                    </span>
                                </div>
                            </div>

                            {/* Social Channels */}
                            <div className={styles.contactItem}>
                                <div className={styles.infoIconWrap}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0b57d0"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                                    </svg>
                                </div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoHeading}>Follow Us</span>
                                    <span className={styles.infoNote}>
                                        Stay connected with us on social media.
                                    </span>
                                    <div className={styles.socialGroup}>
                                        {/* Facebook */}
                                        <a
                                            href={CONTACT_INFO.social.facebook}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Facebook"
                                            className={styles.socialIconBtn}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>

                                        {/* Instagram */}
                                        <a
                                            href={CONTACT_INFO.social.instagram}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Instagram"
                                            className={styles.socialIconBtn}
                                        >
                                            <svg
                                                width="14"
                                                height="14"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}