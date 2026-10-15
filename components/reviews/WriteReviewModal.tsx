"use client";

import React, { useState, useEffect } from "react";
import styles from "./WriteReviewModal.module.css";

interface WriteReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddReview: (review: any) => void;
}

export default function WriteReviewModal({
    isOpen,
    onClose,
    onAddReview,
}: WriteReviewModalProps) {
    const [rating, setRating] = useState<number>(5);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        category: "Web Development",
        quote: "",
    });

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.quote) return;

        const newReview = {
            name: formData.name,
            role: formData.role || "Client",
            category: formData.category,
            serviceTag: formData.category,
            rating,
            quote: formData.quote,
            tagType: "blue",
            avatarBg: "#dbeafe",
        };

        onAddReview(newReview);
        setFormData({ name: "", role: "", category: "Web Development", quote: "" });
        setRating(5);
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
                    onClick={onClose}
                    className={styles.closeBtn}
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

                <div className={styles.modalContent}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>SHARE YOUR EXPERIENCE</span>
                    </div>

                    <h2 className={styles.title}>Write a Review</h2>
                    <p className={styles.subtitle}>
                        Your feedback helps us continue providing top-tier digital solutions.
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* Star Rating Select */}
                        <div className={styles.ratingRow}>
                            <span className={styles.ratingLabel}>Your Rating:</span>
                            <div className={styles.starsWrapper}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className={styles.starBtn}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill={(hoverRating || rating) >= star ? "#f59e0b" : "#e2e8f0"}
                                            stroke={(hoverRating || rating) >= star ? "#f59e0b" : "#cbd5e1"}
                                            strokeWidth="1.5"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Name & Role Row */}
                        <div className={styles.twoCol}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className={styles.textInput}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Role / Company</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Founder, CEO"
                                    value={formData.role}
                                    onChange={(e) =>
                                        setFormData({ ...formData, role: e.target.value })
                                    }
                                    className={styles.textInput}
                                />
                            </div>
                        </div>

                        {/* Service Category (Strict 34px Height & 6px Radius) */}
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Service Received *</label>
                            <div className={styles.selectWrap}>
                                <select
                                    value={formData.category}
                                    onChange={(e) =>
                                        setFormData({ ...formData, category: e.target.value })
                                    }
                                    className={styles.selectInput}
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App Development">
                                        Mobile App Development
                                    </option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Design">Design</option>
                                    <option value="Automation">Automation</option>
                                    <option value="CRM/ERM">CRM/ERM</option>
                                </select>
                                <span className={styles.selectArrow}>
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#64748b"
                                        strokeWidth="2.5"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Review Comment */}
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Your Review *</label>
                            <textarea
                                required
                                rows={3}
                                placeholder="Share your experience working with Gamanext..."
                                value={formData.quote}
                                onChange={(e) =>
                                    setFormData({ ...formData, quote: e.target.value })
                                }
                                className={styles.textareaInput}
                            />
                        </div>

                        {/* Submit & Cancel (Strict 34px Height & 6px Radius) */}
                        <div className={styles.btnRow}>
                            <button type="submit" className={styles.submitBtn}>
                                Submit Review
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className={styles.cancelBtn}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}