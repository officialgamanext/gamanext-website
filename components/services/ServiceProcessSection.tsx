"use client";

import React from "react";
import styles from "./ServiceProcessSection.module.css";
import { ServiceDetailData } from "@/constants/servicesDetailsData";

interface ServiceProcessSectionProps {
    service: ServiceDetailData;
}

export default function ServiceProcessSection({ service }: ServiceProcessSectionProps) {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>HOW WE WORK</span>
                    </div>
                    <h2 className={styles.title}>Our Proven Delivery Methodology</h2>
                    <p className={styles.subtitle}>
                        Disciplined execution from concept to launch with total transparency.
                    </p>
                </div>

                <div className={styles.stepsGrid}>
                    {service.processSteps.map((step) => (
                        <div key={step.step} className={styles.stepCard}>
                            <span className={styles.stepNumber}>{step.step}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
