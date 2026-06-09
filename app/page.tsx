import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
