import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Section4 from "@/components/Section4"; // Add this import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Section4 /> {/* Add this component */}
      {/* Other sections will go here */}
    </main>
  );
}
