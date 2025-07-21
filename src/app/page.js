import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Section4 from "@/components/Section4"; // Add this import
import Section6 from "@/components/Section6";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Section4 /> 
      <Section6 />
    </main>
  );
}
