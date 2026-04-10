import AirlineLogos from "@/components/AirlineLogos";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AirlineLogos />
    </div>
  );
}
