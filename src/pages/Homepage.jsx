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
    title: "Provincia Mayor",
    body: "Somos un grupo de personas que basados en la experiencia y con el acompañamiento de profesionales de la salud, entiende los procesos que viven los adultos mayores y trabaja día a día para contribuir a su bienestar y el de su familia",
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
