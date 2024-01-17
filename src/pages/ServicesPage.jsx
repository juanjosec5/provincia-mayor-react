import Footer from "@/components/Footer/Footer";
import Services from "@/components/ServicesPage/Service";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import FullBgContainer from "@/components/BaseComponents/FullBgContainer";

import heroXl from "@/assets/services-hero-lg.png";
import heroMd from "@/assets/services-hero-md.png";
import heroSm from "@/assets/services-hero-sm.png";

export default function ServicesPage() {
  const servicesHeroImgs = [
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
    title: "Nuestros Servicios",
    body: "Brindamos cuidado integral y afectuoso para tus seres queridos, asegurándonos de que vivan con comodidad, respeto y atención personalizada",
    cta: "Contáctenos",
  };

  return (
    <>
      <Header />
      <Hero heroImages={servicesHeroImgs} copy={heroContent} />
      <Services />
      <FullBgContainer>
        <Contact secondary={true} />
      </FullBgContainer>
      <Footer />
    </>
  );
}
