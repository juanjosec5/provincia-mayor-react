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
      title: "Que Observar",
      body: "La tercera edad trae cambios que son fáciles de evidenciar pero difíciles de aceptar, en Provincia Mayor contamos con apoyo profesional que le ayudarán a entenderlos.",
    },
    {
      imgPath: benefit3,
      title: "El Primer Paso",
      body: "En Provincia Mayor, priorizamos su bienestar con atención personalizada y opciones detalladas. Equipo capacitado disponible.",
    },
    {
      imgPath: benefit4,
      title: "Presupuesto",
      body: "Elegir comunidad para mayores es crucial y debe ser asequible. Precio es una preocupación, entendemos su importancia.",
    },
    {
      imgPath: benefit5,
      title: "Proceso de ingreso",
      body: "Queremos asegurarnos de conocer las condiciones de nuestros residentes para ofrecer el acompañamiento adecuado para cada uno y garantizar el bienestar de nuestra comunidad.",
    },
    {
      imgPath: benefit6,
      title: "Protocolo y personal calificado",
      body: "Nuestros cuidadores están en capacidad de brindar la seguridad y la confianza necesaria para que cada residente se sienta acompañado profesionalmente, respetado y apreciado.",
    },
    {
      imgPath: benefit1,
      title: "Descubre tu mejor opción",
      body: "En Provincia Mayor, adaptamos nuestro servicio a las necesidades del adulto mayor, asegurando una atención personalizada y efectiva.",
    },
  ];

  return (
    <Section title="Por Qu&eacute; Escogernos" classes="benefits" id="benefits">
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
