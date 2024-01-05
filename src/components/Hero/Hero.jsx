import Media from "@/components/BaseComponents/Media.jsx";
import "@/sass/components/Hero.scss";

import heroXl from "/hero-xl.png";
import heroMd from "/hero-md.png";
import heroSm from "/hero-sm.png";

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
    <section className="main-hero">
      <Media type="image" path={heroImgs} />
      <div className="ss-container main-hero__content">
        <h1>Cuidado Profesional</h1>
        <p>
          Reunimos un equipo de Cuidadores Calificados con experiencia,
          comprometidos con brindar atencion de la mas alta calidad
        </p>
        <a className="button" href="#">
          Cont&aacute;ctenos
        </a>
      </div>
    </section>
  );
};

export default Hero;
