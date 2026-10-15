"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import QuoteModal from "@/components/modal/QuoteModal";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    {/* Left Side: Mobile Hamburger + Brand Logo */}
                    <div className={styles.leftGroup}>
                        <button
                            className={styles.hamburgerBtn}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <span
                                className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ""
                                    }`}
                            />
                            <span
                                className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ""
                                    }`}
                            />
                            <span
                                className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ""
                                    }`}
                            />
                        </button>

                        <Link href="/" className={styles.brand} aria-label="Gamanext Home">
                            <span className={styles.srOnly}>Gamanext Software Solutions</span>
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation Links */}
                    <nav className={styles.desktopNav}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${styles.navItem} ${isActive ? styles.activeNavItem : ""
                                        }`}
                                >
                                    {link.label}
                                    {isActive && <span className={styles.activeIndicator} />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side: Action Button opens Modal */}
                    <div className={styles.actionWrapper}>
                        <button
                            type="button"
                            onClick={() => setIsQuoteModalOpen(true)}
                            className={styles.quoteBtn}
                        >
                            <span>Get a Quote</span>
                            <svg
                                className={styles.btnIcon}
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <div
                    className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ""
                        }`}
                >
                    <nav className={styles.mobileNav}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${styles.mobileNavItem} ${isActive ? styles.mobileActive : ""
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>

            {/* Reusable Quote Modal */}
            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </>
    );
}