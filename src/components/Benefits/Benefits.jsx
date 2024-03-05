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
      imgPath: benefit3,
      title: "Vocación",
      body: "Nos inspira contribuir al bienestar del Adulto Mayor y nos sentimos realizados con cada actividad que desarrollamos para lograrlo.",
    },
    {
      imgPath: benefit4,
      title: "Experiencia",
      body: "Conocemos y entendemos las situaciones y necesidades que se van presentando en esta etapa de la vida, así como la forma de apoyar en cada caso al Adulto Mayor y su familia.",
    },
    {
      imgPath: benefit5,
      title: "Asistencia",
      body: "Bajo el concepto de Vivienda Asistida ofrecemos acompañamiento a nuestros residentes en sus rutinas y actividades diarias, con el apoyo de nuestro grupo de cuidadores calificados.",
    },
    {
      imgPath: benefit6,
      title: "Alimentación",
      body: "Nutricionistas expertas en el adulto mayor han diseñado un plan de alimentación balanceado para nuestros residentes, con nutritivas comidas y deliciosos refrigerios.",
    },
    {
      imgPath: benefit2,
      title: "Espacios",
      body: "Contamos con excelentes instalaciones, cómodas y amplias habitaciones, espacios ideales para actividades grupales y hermosos jardines que contribuyen a generar calidad de vida.",
    },
    {
      imgPath: benefit1,
      title: "Recreación y Socialización",
      body: "Realizamos actividades grupales de la mano de profesionales con gran experiencia en adultos mayores, que contribuyen a fortalecer habilidades cognitivas, físicas y sociales.",
    },
  ];

  return (
    <Section title="Por qu&eacute; Escogernos" classes="benefits" id="benefits">
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
