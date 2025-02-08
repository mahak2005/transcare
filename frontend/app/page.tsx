import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/home/hero";
import { FeatureCard } from "@/components/home/feature-card";
import { features } from "@/lib/features";
import AnimatedMap from "@/components/home/AnimatedMap";

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

        {/* Animated Map Section */}
        {/* <AnimatedMap /> */}
      </main>
    </div>
  );
}
