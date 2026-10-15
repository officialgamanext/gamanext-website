"use client";

import React, { useState, useEffect } from "react";
import styles from "./QuoteModal.module.css";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "",
        budget: "",
        projectDetails: "",
        agreeToContact: true,
    });

    // Lock background scroll when modal is open
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

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Quote submitted:", formData);
        onClose();
    };

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
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close modal"
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

                <div className={styles.modalBody}>
                    {/* ================= Left Column: Info & Team Image ================= */}
                    <div className={styles.leftCol}>
                        <div className={styles.logoWrap}>
                            <div className={styles.brandLogo} />
                        </div>

                        <h2 className={styles.leftHeading}>
                            Let&apos;s Turn <br />
                            <span className={styles.blackText}>Your Ideas Into </span>
                            <span className={styles.blueText}>Reality</span>
                        </h2>

                        <p className={styles.leftDesc}>
                            Share your requirements with us and our team will get back to you with a tailored solution and quote.
                        </p>

                        {/* Perks List */}
                        <div className={styles.perksList}>
                            <div className={styles.perkItem}>
                                <div className={`${styles.perkIcon} ${styles.blueIcon}`}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <div className={styles.perkText}>
                                    <span className={styles.perkTitle}>Quick Response</span>
                                    <span className={styles.perkSub}>We usually respond within 24 hours.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={`${styles.perkIcon} ${styles.purpleIcon}`}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div className={styles.perkText}>
                                    <span className={styles.perkTitle}>Free Consultation</span>
                                    <span className={styles.perkSub}>Discuss your requirements with experts.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={`${styles.perkIcon} ${styles.greenIcon}`}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                </div>
                                <div className={styles.perkText}>
                                    <span className={styles.perkTitle}>Customized Quote</span>
                                    <span className={styles.perkSub}>Get a solution tailored to your business.</span>
                                </div>
                            </div>

                            <div className={styles.perkItem}>
                                <div className={`${styles.perkIcon} ${styles.pinkIcon}`}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <div className={styles.perkText}>
                                    <span className={styles.perkTitle}>No Obligation</span>
                                    <span className={styles.perkSub}>Completely free and no commitment.</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Team Photo */}
                        <div className={styles.teamImgWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Gamanext Team"
                                className={styles.teamImg}
                            />
                        </div>
                    </div>

                    {/* ================= Right Column: Request Form ================= */}
                    <div className={styles.rightCol}>
                        <div className={styles.badgeWrapper}>
                            <span className={styles.badge}>GET A QUOTE</span>
                        </div>

                        <h3 className={styles.formTitle}>Tell Us About Your Project</h3>
                        <p className={styles.formSubtitle}>
                            Fill out the form below and we&apos;ll get back to you with a customized quote.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            {/* Full Name */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={styles.textInput}
                                />
                            </div>

                            {/* Email & Phone */}
                            <div className={styles.twoColRow}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.textInput}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.textInput}
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Enter your company name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className={styles.textInput}
                                />
                            </div>

                            {/* Service Interested In (Dropdown - 34px) */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Service Interested In *</label>
                                <div className={styles.selectWrap}>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={styles.selectInput}
                                    >
                                        <option value="" disabled>Select a service</option>
                                        <option value="web-development">Web Application Development</option>
                                        <option value="mobile-apps">Mobile App Development</option>
                                        <option value="crm-erp">Custom CRM / ERP Solutions</option>
                                        <option value="ai-automation">AI Automation & Chatbots</option>
                                        <option value="digital-marketing">Digital Marketing</option>
                                        <option value="ui-ux">UI/UX & Branding Design</option>
                                    </select>
                                    <span className={styles.selectArrow}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Project Budget (Dropdown - 34px) */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Project Budget (Optional)</label>
                                <div className={styles.selectWrap}>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className={styles.selectInput}
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="under-50k">Under ₹50,000 / $600</option>
                                        <option value="50k-150k">₹50,000 - ₹1,50,000 / $600 - $2,000</option>
                                        <option value="150k-300k">₹1,50,000 - ₹3,00,000 / $2,000 - $4,000</option>
                                        <option value="300k+">₹3,00,000+ / $4,000+</option>
                                    </select>
                                    <span className={styles.selectArrow}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Project Details *</label>
                                <textarea
                                    name="projectDetails"
                                    rows={3}
                                    maxLength={500}
                                    placeholder="Tell us about your project, requirements or any specific features..."
                                    required
                                    value={formData.projectDetails}
                                    onChange={handleChange}
                                    className={styles.textareaInput}
                                />
                                <span className={styles.charCount}>
                                    {formData.projectDetails.length}/500
                                </span>
                            </div>

                            {/* Checkbox */}
                            <label className={styles.checkboxRow}>
                                <input
                                    type="checkbox"
                                    name="agreeToContact"
                                    checked={formData.agreeToContact}
                                    onChange={handleChange}
                                    className={styles.checkboxInput}
                                />
                                <span className={styles.checkboxLabel}>
                                    I agree to be contacted by Gamanext regarding my inquiry.
                                </span>
                            </label>

                            {/* Submit Button (Strictly 34px & 6px Radius) */}
                            <button type="submit" className={styles.submitBtn}>
                                <span>Request a Quote</span>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}