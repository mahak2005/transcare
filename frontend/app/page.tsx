import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/home/hero";
import { FeatureCard } from "@/components/home/feature-card";
import { features } from "@/lib/features";
// import AnimatedMap from "@/components/home/AnimatedMap";
import FAQ from "@/components/home/FAQ";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import Footer from "@/components/home/Footer";
import LandbotChat from "@/components/Landbot/LandbotChat";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      <main className="container mx-auto px-6 py-12 relative">
        <Hero />

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>

        {/* FAQ section */}
        <FAQ />

        <TestimonialsCarousel />
        <LandbotChat />
        <Footer />
      </main>
    </div>
  );
}
