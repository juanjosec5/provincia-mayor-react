import Media from "@/components/BaseComponents/Media";
import "@/sass/components/Hero.scss";

import heroXl from "@/assets/hero-xl.png";
import heroMd from "@/assets/hero-md.png";
import heroSm from "@/assets/hero-sm.png";

const Hero = () => {
  const heroImgs = [
    {
      path: heroXl,
      media: "(orientation: landscape)",
    },
    {
      path: heroMd,
      media: "(orientation: landscape)",
    },
    {
      path: heroSm,
    },
  ];
  return (
    <section className="main-hero" id="hero">
      <Media type="image" path={heroImgs} />
      <div className="ss-container main-hero__content">
        <h1>Cuidado Profesional</h1>
        <p>
          Reunimos un equipo de Cuidadores Calificados con experiencia,
          comprometidos con brindar atencion de la mas alta calidad
        </p>
        <a className="button" href="#contact">
          Cont&aacute;ctenos
        </a>
      </div>
    </section>
  );
};

export default Hero;
