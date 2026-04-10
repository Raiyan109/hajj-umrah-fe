import About from "@/components/About";
import AirlineLogos from "@/components/AirlineLogos";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AirlineLogos />
      <About />
    </div>
  );
}
