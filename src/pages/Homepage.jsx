// import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      {/* <Link to="404">not found</Link> */}
    </>
  );
}
