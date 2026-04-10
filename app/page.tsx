import About from "@/components/About";
import AirlineLogos from "@/components/AirlineLogos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AirlineLogos />
      <About />
      <Packages />
      <WhyUs />
      <Testimonials />
      <News />
      <CTA />
      <Footer />
    </div>
  );
}
