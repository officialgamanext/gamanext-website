import React from "react";
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsGridSection from "@/components/reviews/ReviewsGridSection";
import VideoAndBrandsSection from "@/components/reviews/VideoAndBrandsSection";
import ReviewsCtaSection from "@/components/reviews/ReviewsCtaSection";

export const metadata = {
    title: "Client Reviews | Gamanext",
    description: "Read real client reviews, watch video testimonials, and join our growing list of clients.",
};

export default function ReviewsPage() {
    return (
        <main>
            <ReviewsHero />
            <ReviewsGridSection />
            <VideoAndBrandsSection />
            <ReviewsCtaSection />
        </main>
    );
}