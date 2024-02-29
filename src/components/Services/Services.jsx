import Section from "@/components/BaseComponents/Section";
import ServicesListItem from "@/components/Services/ServicesListItem";
import ServicesList from "@/components/Services/ServicesList";
import FullBgContainer from "@/components/BaseComponents/FullBgContainer";
import ScrollToTop from "@/utils/scrollToTop";

import { HashLink } from "react-router-hash-link";

import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { mdiHospitalBox } from "@mdi/js";
import { mdiWater } from "@mdi/js";
import { mdiCardsClub } from "@mdi/js";
import { mdiFoodDrumstick } from "@mdi/js";

import "@/sass/components/Services.scss";

const Services = () => {
  const services = [
    {
      text: "Vivienda",
      icon: mdiHome,
      url: "/services#vivienda",
    },
    {
      text: "Asistencia y Cuidado Personal",
      icon: mdiHospitalBox,
      url: "/services#asistencia",
    },
    {
      text: "Planeación de Alimentos y Dietas",
      icon: mdiFoodDrumstick,
      url: "/services#alimentos",
    },
    {
      text: "Recreacion Y Socializacion",
      icon: mdiCardsClub,
      url: "/services#recreacion",
    },
    {
      text: "Servicio de Limpieza y Lavanderia",
      icon: mdiWater,
      url: "/services#limpieza",
    },
    {
      text: "Club Día",
      icon: mdiStar,
      url: "/services#club",
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
              link={s.url}
              icon={<Icon path={s.icon} size={1} color="#BD901A" />}
            />
          ))}
        </ServicesList>
        <ScrollToTop>
          <HashLink to="/services#hero" className="button button--secondary">
            Ver m&aacute;s
          </HashLink>
        </ScrollToTop>
      </Section>
    </FullBgContainer>
  );
};

export default Services;
