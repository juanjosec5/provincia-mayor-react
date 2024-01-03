import Media from "../BaseComponents/Media.jsx";
import "@/sass/components/Hero.scss";

import heroXl from "@/assets/hero-xl.png";
import heroMd from "@/assets/hero-md.png";
import heroSm from "@/assets/hero-sm.png";

const Hero = () => {
  const kittenImgs = [
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
      <Media type="image" path={kittenImgs} />
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
