import Section from "@/components/BaseComponents/Section";
import ServicesListItem from "@/components/Services/ServicesListItem";
import ServicesList from "@/components/Services/ServicesList";
import FullBgContainer from "@/components/BaseComponents/FullBgContainer";

import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

import "@/sass/components/Services.scss";

const Services = () => {
  const services = [
    {
      text: "Vivienda",
    },
    {
      text: "Asistencia y Cuidado Personal",
    },
    {
      text: "Planeacion de Alimentos y Planeacion de Dietas",
    },
    {
      text: "Recreacion Y Socializacion",
    },
    {
      text: "Servicio de Limpieza y Lavanderia",
    },
    {
      text: "Club Dia y Servicios Adicionales",
    },
  ];

  return (
    <FullBgContainer>
      <Section title="Nuestros Servicios" classes="services" id="services">
        <ServicesList>
          {services.map((s) => (
            <ServicesListItem
              key={s.text}
              text={s.text}
              icon={<Icon path={mdiStar} size={1} color="#BD901A" />}
            />
          ))}
        </ServicesList>
        <Link to="/services" className="button button--secondary">
          Ver m&aacute;s
        </Link>
      </Section>
    </FullBgContainer>
  );
};

export default Services;
