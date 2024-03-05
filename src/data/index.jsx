import {
  Service1Sm,
  Service1Md,
  Service1Lg,
  Service2Sm,
  Service2Md,
  Service2Lg,
  Service3Sm,
  Service3Md,
  Service3Lg,
  Service4Sm,
  Service4Md,
  Service4Lg,
  Service5Sm,
  Service5Md,
  Service5Lg,
  Service6Sm,
  Service6Md,
  Service6Lg,
} from "@/assets/services";

const servicesHeadings = {
  1: "Vivienda",
  2: "Asistencia y Cuidado Personal",
  3: "Planeación de Alimentos y Dietas",
  4: "Recreación y Socialización",
  5: "Servicio de Limpieza y Lavandería",
  6: "Club Día",
};

const service1Body = (
  <>
    <p>Alojamiento con espacios amplios y privados que incluyen:</p>
    <ul>
      <li>
        Habitaciones amplias con iluminación, ventilación natural y con clósets
        de buena capacidad
      </li>
      <li>Baños privados adaptados para las necesidades de movilidad</li>
      <li>Botón de llamado inalámbrico para garantizar atención y seguridad</li>
      <li>Conexión wifi disponible en todas las habitaciones y áreas de PM</li>
      <li>Jardines que generan un entorno tranquilo y agradable</li>
    </ul>
  </>
);

const service2Body = (
  <>
    <p>
      Un grupo de cuidadores calificados y con experiencia en el cuidado del
      adulto mayor apoyan a nuestros residentes considerando el nivel de
      independencia de cada uno.
    </p>
    <ul>
      <li>Rutina de inicio y final del día</li>
      <li>Asistencia en rutinas de baño y alimentación</li>
      <li>Apoyo en todos los desplazamientos al interior de Provincia Mayor</li>
      <li>Participación en las actividades programadas diariamente</li>
      <li>Atención de llamados 24 horas</li>
    </ul>
  </>
);

const service3Body = (
  <>
    <p>
      Dieta alimenticia basada en recomendaciones de profesionales con
      experiencia en nutrición de adultos mayores brindando:
    </p>
    <ul>
      <li>Alimentación diaria: Desayuno, almuerzo y comida</li>
      <li>Refrigerios saludables a media mañana y media tarde</li>
      <li>Variedad de menús</li>
    </ul>
  </>
);

const service4Body = (
  <>
    <p>
      Provincia Mayor, bajo la dirección de profesionales de la salud expertos
      en el adulto mayor programa actividades para generar espacios donde los
      residentes puedan divertirse, socializar y estar activos física y
      mentalmente.
    </p>
    <ul>
      <li>Actividades físicas: Apoyo a motricidad gruesa</li>
      <li>Actividades lúdicas</li>
      <li>Actividades espirituales</li>
      <li>Terapias y talleres: Motricidad fina</li>
    </ul>
  </>
);

const service5Body = (
  <>
    <p>
      La pulcritud es algo que nos caracteriza, diariamente las habitaciones,
      sus baños y las zonas comunes tienen una rutina de limpieza para
      garantizar la higiene y el orden. Nuestro servicio de lavandería asegura
      la disponibilidad del vestuario del residente, su ropa de cama y toallas.
    </p>
  </>
);

const service6Body = (
  <>
    <p>
      Con el acompañamiento y supervisión de nuestro equipo ofrecemos la opción
      de disfrutar de lunes a viernes de nuestras actividades y alimentación
      durante el día.
    </p>
    <a className="button" href="#contact">
      Contáctenos para más información
    </a>
  </>
);

const servicesData = [
  {
    reverse: true,
    imgPath: [
      {
        path: Service1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service1Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[1],
    body: service1Body,
    id: "vivienda",
  },
  {
    imgPath: [
      {
        path: Service2Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service2Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service2Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[2],
    body: service2Body,
    id: "asistencia",
  },
  {
    reverse: true,
    imgPath: [
      {
        path: Service3Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service3Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service3Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[3],
    body: service3Body,
    id: "alimentos",
  },
  {
    imgPath: [
      {
        path: Service4Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service4Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service4Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[5],
    body: service5Body,
    id: "recreacion",
  },
  {
    reverse: true,
    imgPath: [
      {
        path: Service5Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service5Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service5Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[6],
    body: service6Body,
    id: "limpieza",
  },
  {
    imgPath: [
      {
        path: Service6Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: Service6Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: Service6Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[4],
    body: service4Body,
    id: "club",
  },
];

export default servicesData;
