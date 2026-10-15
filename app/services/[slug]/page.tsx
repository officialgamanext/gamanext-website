import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
    SERVICES_DETAILS,
    SERVICE_SLUG_ALIASES,
} from "@/constants/servicesDetailsData";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceOfferingsSection from "@/components/services/ServiceOfferingsSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import BookFreeDemoSection from "@/components/services/BookFreeDemoSection";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return [
        { slug: "development" },
        { slug: "design" },
        { slug: "marketing" },
        { slug: "automation" },
    ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const canonicalSlug = SERVICE_SLUG_ALIASES[slug] || slug;
    const service = SERVICES_DETAILS[canonicalSlug];

    if (!service) {
        return {
            title: "Service Not Found | Gamanext",
        };
    }

    return {
        title: `${service.title} | Gamanext`,
        description: service.heroDesc,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const canonicalSlug = SERVICE_SLUG_ALIASES[slug] || slug;
    const service = SERVICES_DETAILS[canonicalSlug];

    if (!service) {
        notFound();
    }

    return (
        <main>
            {/* 1. In-depth Hero with Breadcrumb, Stats, and Summary */}
            <ServiceDetailHero service={service} />

            {/* 2. Detailed Service Modules, Features, Tech Stacks & Deliverables */}
            <ServiceOfferingsSection service={service} />

            {/* 3. Step-by-Step Delivery Methodology */}
            <ServiceProcessSection service={service} />

            {/* 4. Book Free Demo Form */}
            <BookFreeDemoSection
                serviceTitle={service.title}
                serviceSlug={service.slug}
            />
        </main>
    );
}
