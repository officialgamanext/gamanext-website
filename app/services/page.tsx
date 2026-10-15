import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import DevelopmentSection from "@/components/services/DevelopmentSection";
import DesignSection from "@/components/services/DesignSection";
import MarketingSection from "@/components/services/MarketingSection";
import AutomationSection from "@/components/services/AutomationSection";
import ProcessSection from "@/components/services/ProcessSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export const metadata = {
    title: "Our Services | Gamanext",
    description:
        "Explore our complete range of digital solutions: development, design, digital marketing, CRM/ERP, and automation.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <DevelopmentSection />
            <DesignSection />
            <MarketingSection />
            <AutomationSection />
            <ProcessSection />
            <AboutCtaSection />
        </main>
    );
}