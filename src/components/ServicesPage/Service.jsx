// import ServicesCard from "./ServicesCard";
import Section from "@/components/BaseComponents/Section";
import ServicesCard from "./ServicesCard";

import servicesData from "@/data/index";

import "@/sass/components/Services-page.scss";

const Service = () => {
  return (
    <Section id="services" title="Nuestros Servicios" classes={"services"}>
      {servicesData.map((s, index) => (
        <ServicesCard
          key={index}
          reverse={s.reverse}
          imgArray={s.imgPath}
          title={s.title}
          body={s.body}
        />
      ))}
    </Section>
  );
};

export default Service;
