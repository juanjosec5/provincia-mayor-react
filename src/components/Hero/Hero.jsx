import Media from "@/components/BaseComponents/Media";
import "@/sass/components/Hero.scss";

const Hero = ({ heroImages, copy }) => {
  return (
    <section className="main-hero" id="hero">
      <Media type="picture" path={heroImages} />
      <div className="ss-container main-hero__content">
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
        <a className="button" href="#contact">
          {copy.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
