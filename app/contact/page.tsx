import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import OfficeSection from "@/components/contact/OfficeSection";
import ContactFaqSection from "@/components/contact/ContactFaqSection";
import ContactCtaSection from "@/components/contact/ContactCtaSection";

export const metadata = {
    title: "Contact Us | Gamanext",
    description: "Get in touch with our team to discuss your project.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <div id="contact-form">
                <ContactFormSection />
            </div>
            <OfficeSection />
            <ContactFaqSection />
            <ContactCtaSection />
        </main>
    );
}