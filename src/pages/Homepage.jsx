import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import FullBgContainer from "@/components/BaseComponents/FullBgContainer";

import heroXl from "@/assets/hero-xl.png";
import heroMd from "@/assets/hero-md.png";
import heroSm from "@/assets/hero-sm.png";

export default function Homepage() {
  const homePageHero = [
    {
      path: heroXl,
      media: "(min-width: 1280px)",
      alt: "test",
    },
    {
      path: heroMd,
      media: "(min-width: 768px)",
      alt: "test",
    },
    {
      path: heroSm,
      alt: "test",
    },
  ];

  const heroContent = {
    title: "Cuidado Profesional",
    body: "Reunimos un equipo de Cuidadores Calificados con experiencia,comprometidos con brindar atencion de la mas alta calidad",
    cta: "Contáctenos",
  };

  return (
    <>
      <Header />
      <Hero heroImages={homePageHero} copy={heroContent} />
      <Benefits />
      <Services />
      <Gallery />
      <FullBgContainer>
        <Contact secondary={true} />
      </FullBgContainer>
      <Footer />
      {/* <Link to="404">not found</Link> */}
    </>
  );
}
