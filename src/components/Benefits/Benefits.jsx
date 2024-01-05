import Card from "@/components/Benefits/Card";
import Cards from "@/components/Benefits/Cards";
import Section from "@/components/BaseComponents/Section";

import benefit1 from "@/assets/benefits/benefits-1.png";
import benefit2 from "@/assets/benefits/benefits-2.png";
import benefit3 from "@/assets/benefits/benefits-3.png";
import benefit4 from "@/assets/benefits/benefits-4.png";
import benefit5 from "@/assets/benefits/benefits-5.png";
import benefit6 from "@/assets/benefits/benefits-6.png";

import "@/sass/components/Benefits.scss";

const Benefits = () => {
  const cardData = [
    {
      imgPath: benefit2,
      title: "Vivienda",
      body: "Habitaciones individuales con baño privado, espaciosas, cómodas, seguras, con iluminación y ventilación natural. Amplias zonas comúnes y hermosos jardines.",
    },
    {
      imgPath: benefit3,
      title: "Asistencia y Cuidado Personal",
      body: "Asistencia en higiene personal, rutina de baño, cambio de vestuario y administración de medicamentos.",
    },
    {
      imgPath: benefit4,
      title: "Preparación de Alimentos y Dietas",
      body: "Alimentación balanceada, comidas nutritivas y deliciosas. Planificación de dietas especiales.",
    },
    {
      imgPath: benefit5,
      title: "Recreación y Socialización",
      body: "Actividades grupales diarias físicas, lúdicas, intelectuales y espirituales.",
    },
    {
      imgPath: benefit6,
      title: "Servicio de Limpieza y Lavandería",
      body: "Limpieza diaria del cuarto y baño. Lavandería de vestuario y ropa de cama.",
    },
    {
      imgPath: benefit1,
      title: "Club Día y Servicios Adicionales",
      body: "Disfrute durante el día nuestra programación de actividades con el acompañamiento de personal calificado.",
    },
  ];

  return (
    <Section title="Por qu&eacute; escogernos" classes="benefits">
      <Cards>
        {cardData.map((card) => (
          <Card
            key={card.title}
            imgPath={card.imgPath}
            title={card.title}
            body={card.body}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Benefits;
