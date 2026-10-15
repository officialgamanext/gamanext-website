"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AutomationSection.module.css";
import ServiceDetailModal, {
    ServiceDetailItem,
} from "./ServiceDetailModal";
import QuoteModal from "@/components/modal/QuoteModal";

const automationCards: {
    id: string;
    title: string;
    description: string;
    themeClass: string;
    illustration: React.ReactNode;
    details: ServiceDetailItem;
}[] = [
        {
            id: "ai-agents",
            title: "AI Agents",
            description:
                "Smart AI agents to automate tasks and handle customer interactions.",
            themeClass: "cardCream",
            illustration: (
                <div className={styles.aiAgentIllustration}>
                    {/* Left Speech Dot Chip */}
                    <div className={styles.speechChip}>
                        <div className={styles.dotGrid}>
                            <span className={styles.chipDot} />
                            <span className={styles.chipDot} />
                            <span className={styles.chipDot} />
                            <span className={styles.chipDot} />
                            <span className={styles.chipDot} />
                            <span className={styles.chipDot} />
                        </div>
                    </div>

                    {/* 3D Friendly Robot Mascot */}
                    <div className={styles.robotFigure}>
                        <div className={styles.robotAntenna} />
                        <div className={styles.robotHead}>
                            <div className={styles.robotFaceScreen}>
                                <span className={styles.robotEye} />
                                <span className={styles.robotSmile} />
                                <span className={styles.robotEye} />
                            </div>
                        </div>
                        <div className={styles.robotBody}>
                            <div className={styles.robotArmLeft} />
                            <div className={styles.robotArmRight} />
                        </div>
                    </div>

                    {/* Right Floating Task Badge */}
                    <div className={styles.taskCardMini}>
                        <div className={styles.miniToggleBar} />
                    </div>
                </div>
            ),
            details: {
                title: "Autonomous AI Agents",
                badge: "AI AUTOMATION",
                description:
                    "Deploy custom AI agents capable of reasoning, retrieving contextual corporate data, automating recurring multi-step workflows, and executing actions across your tool stack.",
                highlights: [
                    "LLM Orchestration (LangChain / LlamaIndex)",
                    "Secure Vector Database Knowledge Bases",
                    "CRM & ERP API Action Triggers",
                    "Autonomous Multi-Step Task Execution",
                ],
                features: [
                    {
                        name: "Workflow Copilots",
                        desc: "Context-aware agents that draft emails, compile reports, and schedule internal operations autonomously.",
                    },
                    {
                        name: "Data Extraction & Parsing",
                        desc: "Ingest invoices, contracts, and PDFs with near-instant schema extraction into your databases.",
                    },
                    {
                        name: "Human-in-the-Loop Safeguards",
                        desc: "Configurable approval thresholds for high-stakes decisions and customer communication.",
                    },
                ],
                deliverables: [
                    "Fine-tuned Domain Agent Engine",
                    "API Integration & Authentication Connectors",
                    "Telemetry & Accuracy Evaluation Suite",
                ],
            },
        },
        {
            id: "chatbot-solutions",
            title: "Chatbot Solutions",
            description:
                "Intelligent chatbots for customer support and business automation.",
            themeClass: "cardBlue",
            illustration: (
                <div className={styles.chatbotIllustration}>
                    {/* Top Floating Chat Cloud */}
                    <div className={styles.chatBubbleTop}>
                        <div className={styles.bubbleDots}>
                            <span className={styles.bDot} />
                            <span className={styles.bDot} />
                            <span className={styles.bDot} />
                        </div>
                    </div>

                    {/* Center Main Chat Panel Card */}
                    <div className={styles.mainChatCard}>
                        <div className={styles.chatMessageIcon}>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <div className={styles.chatBarsGroup}>
                            <div className={styles.chatBarLong} />
                            <div className={styles.chatBarShort} />
                        </div>
                    </div>

                    {/* Small Input Prompt Pill */}
                    <div className={styles.inputPromptPill}>
                        <div className={styles.inputDot} />
                        <div className={styles.inputLine} />
                    </div>
                </div>
            ),
            details: {
                title: "Omnichannel Chatbot Solutions",
                badge: "CONVERSATIONAL AI",
                description:
                    "High-performance AI chatbots trained on your company's proprietary knowledge base to deliver instant, 24/7 customer support across web, WhatsApp, and social channels.",
                highlights: [
                    "90%+ First-Contact Resolution",
                    "WhatsApp & Web Widget Embeds",
                    "Multi-language Translation & Voice Support",
                    "Live Agent Escalation & Fallback",
                ],
                features: [
                    {
                        name: "24/7 Instant Support",
                        desc: "Resolve FAQs, handle order tracking, and guide prospects without waiting in queue.",
                    },
                    {
                        name: "Lead Qualification & Booking",
                        desc: "Collect client requirements and automatically book meetings directly on Google Calendar/Calendly.",
                    },
                    {
                        name: "Knowledge Base RAG",
                        desc: "Grounded responses strictly adhering to company documentation without hallucination.",
                    },
                ],
                deliverables: [
                    "Custom Embeddable Web Widget",
                    "WhatsApp Business Cloud API Setup",
                    "Live Conversation Analytics Dashboard",
                ],
            },
        },
    ];

export default function AutomationSection() {
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
            <section className={styles.sectionWrapper} id="automation">
                <div className={styles.container}>
                    {/* ================= Left: Intro Column ================= */}
                    <div className={styles.introCol}>
                        <div className={styles.badgeWrapper}>
                            <div className={styles.iconTag}>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#b45309"
                                    strokeWidth="2.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" y1="16" x2="8" y2="16" />
                                    <line x1="16" y1="16" x2="16" y2="16" />
                                </svg>
                            </div>
                            <span className={styles.badgeText}>AUTOMATION</span>
                        </div>

                        <h2 className={styles.heading}>
                            Automate for <br />
                            Better Efficiency
                        </h2>

                        <p className={styles.description}>
                            Leverage AI and automation to save time, reduce effort and improve
                            productivity.
                        </p>

                        <div className={styles.actionWrap}>
                            <Link
                                href="/services/automation"
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

                    {/* ================= Right: 2 Cards Row ================= */}
                    <div className={styles.cardsGrid}>
                        {automationCards.map((card) => (
                            <div
                                key={card.id}
                                className={`${styles.card} ${styles[card.themeClass]}`}
                            >
                                {/* 3D Illustration Area */}
                                <div className={styles.illustrationArea}>
                                    {card.illustration}
                                </div>

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