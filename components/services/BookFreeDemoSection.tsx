"use client";

import React, { useState } from "react";
import styles from "./BookFreeDemoSection.module.css";
import { CONTACT_INFO } from "@/constants/contact";

interface BookFreeDemoSectionProps {
    serviceTitle: string;
    serviceSlug: string;
}

export default function BookFreeDemoSection({
    serviceTitle,
    serviceSlug,
}: BookFreeDemoSectionProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        preferredDate: "",
        preferredTimeSlot: "morning",
        serviceInterest: serviceTitle,
        demoFocus: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Demo booked:", formData);
        setIsSubmitted(true);
    };

    return (
        <section className={styles.sectionWrapper} id="book-demo">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Why Book a Demo */}
                    <div className={styles.infoCol}>
                        <div className={styles.tagWrapper}>
                            <span className={styles.tagBadge}>BOOK A FREE DEMO</span>
                        </div>

                        <h2 className={styles.heading}>
                            Experience <span className={styles.headingHighlight}>{serviceTitle}</span> in Action
                        </h2>

                        <p className={styles.description}>
                            Schedule a personalized 1-on-1 walkthrough with our senior tech leads.
                            We will demonstrate live working platforms, analyze your current setup,
                            and discuss how our solutions fit your exact business goals.
                        </p>

                        {/* Perks */}
                        <div className={styles.perksList}>
                            <div className={styles.perkItem}>
                                <div className={styles.perkIconBox}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className={styles.perkContent}>
                                    <span className={styles.perkTitle}>30-Minute Live 1-on-1 Session</span>
                                    <span className={styles.perkSub}>Tailored specifically to your business requirements.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={styles.perkIconBox}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className={styles.perkContent}>
                                    <span className={styles.perkTitle}>100% Free Consultation</span>
                                    <span className={styles.perkSub}>No credit card or contractual commitment required.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={styles.perkIconBox}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 17 12 22 22 17" />
                                        <polyline points="2 12 12 17 22 12" />
                                    </svg>
                                </div>
                                <div className={styles.perkContent}>
                                    <span className={styles.perkTitle}>Tailored Architecture Review</span>
                                    <span className={styles.perkSub}>Actionable tech stack recommendations and cost roadmap.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={styles.perkIconBox}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div className={styles.perkContent}>
                                    <span className={styles.perkTitle}>Direct Q&A with Senior Engineers</span>
                                    <span className={styles.perkSub}>Speak directly with technical builders, not pushy salespeople.</span>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Quick Link */}
                        <div className={styles.whatsappPrompt}>
                            <div className={styles.whatsappIcon}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
                                </svg>
                            </div>
                            <div className={styles.whatsappText}>
                                <span className={styles.whatsappTitle}>Need a faster response?</span>
                                <a
                                    href={CONTACT_INFO.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappLink}
                                >
                                    Chat directly on WhatsApp &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Booking Form */}
                    <div className={styles.formCard}>
                        {!isSubmitted ? (
                            <>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>Schedule Your Free Demo</h3>
                                    <p className={styles.cardSubtitle}>
                                        Fill in your details below and we will confirm your meeting link within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {/* Full Name */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            placeholder="e.g. John Doe"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={styles.inputField}
                                        />
                                    </div>

                                    {/* Email & Phone Split */}
                                    <div className={styles.twoColRow}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Work Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="you@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={styles.inputField}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Phone / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={styles.inputField}
                                            />
                                        </div>
                                    </div>

                                    {/* Company Name & Service */}
                                    <div className={styles.twoColRow}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Company / Brand Name</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                placeholder="Your business name"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className={styles.inputField}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Service Topic</label>
                                            <input
                                                type="text"
                                                name="serviceInterest"
                                                value={formData.serviceInterest}
                                                readOnly
                                                className={styles.inputField}
                                                style={{ backgroundColor: "#f8fafc", color: "#475569" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Preferred Date & Time Slot */}
                                    <div className={styles.twoColRow}>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Preferred Date</label>
                                            <input
                                                type="date"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                className={styles.inputField}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Preferred Time Slot (IST)</label>
                                            <div className={styles.selectWrap}>
                                                <select
                                                    name="preferredTimeSlot"
                                                    value={formData.preferredTimeSlot}
                                                    onChange={handleChange}
                                                    className={styles.selectField}
                                                >
                                                    <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                                                    <option value="afternoon">Afternoon (2:00 PM – 5:00 PM)</option>
                                                    <option value="evening">Evening (6:00 PM – 9:00 PM)</option>
                                                </select>
                                                <span className={styles.selectArrow}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>What would you like to see in this demo? *</label>
                                        <textarea
                                            name="demoFocus"
                                            rows={3}
                                            required
                                            placeholder="Tell us about your project, current bottlenecks, or specific features you'd like us to demonstrate..."
                                            value={formData.demoFocus}
                                            onChange={handleChange}
                                            className={styles.textareaField}
                                        />
                                    </div>

                                    {/* Submit CTA Button */}
                                    <button type="submit" className={styles.submitBtn}>
                                        <span>Confirm Free Demo Booking</span>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>

                                    <p className={styles.guaranteeNote}>
                                        🔒 Your contact info is strictly confidential. No spam, ever.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className={styles.successCard}>
                                <div className={styles.successIconBox}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Demo Request Confirmed!</h3>
                                <p className={styles.successDesc}>
                                    Thank you, <strong>{formData.fullName}</strong>. We have received your request for a live demo of{" "}
                                    <strong>{serviceTitle}</strong>. Our technical director will reach out to{" "}
                                    <strong>{formData.email}</strong> shortly with your calendar invite and meeting link.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className={styles.resetBtn}
                                >
                                    Book Another Session
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
