// import { Link } from "react-router-dom";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Gallery />
      <Contact />
      {/* <Link to="404">not found</Link> */}
    </>
  );
}
