import React from "react";
import AboutHero from "@/components/about/AboutHero";
import OurStorySection from "@/components/about/OurStorySection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import AboutCtaSection from "@/components/about/AboutCtaSection";

export const metadata = {
    title: "About Us | Gamanext",
    description:
        "Learn about our vision, our values, our strategic advantages, and our mission at Gamanext.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurStorySection />
            <MissionVisionSection />
            <OurValuesSection />
            <WhyChooseUsSection />
            <AboutCtaSection />
        </main>
    );
}