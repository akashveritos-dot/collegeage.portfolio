import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Philosophy from "@/components/sections/Philosophy";
import Credits from "@/components/sections/Credits";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Philosophy />
        <Credits />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
