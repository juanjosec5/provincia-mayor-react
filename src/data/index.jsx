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
  3: "Preparación de Alimentos y Planeación de Dietas",
  4: "Recreación y Socialización",
  5: "Servicio de Limpieza y Lavandería",
  6: "Club Día y Servicios Adicionales",
};

const service1Body = (
  <>
    <p>
      Brindamos un alojamiento amplio y privado diseñado para el cuidado del
      adulto mayor, que incluye:
    </p>
    <ul>
      <li>
        26 habitaciones con baño privado, closets amplios y conexión para
        televisión
      </li>
      <li>Botón de llamado inalámbrico para mayor seguridad</li>
      <li>
        Amplios corredores y jardines para un entorno tranquilo y agradable
      </li>
      <li>
        Espacios comunes como oratorio, salón comedor, salón de actividades y
        sala de televisión
      </li>
      <li>
        Instalaciones para el bienestar físico, como gimnasio y enfermería
      </li>
      <li>Baños disponibles en zonas comunes para mayor comodidad</li>
      <li>
        Acceso diario a la celebración de la eucaristía en la Capilla de las
        Hermanas Dominicas de la Presentación
      </li>
      <li>
        Conexión wifi disponible en todas las habitaciones y zonas comunes,
        fomentando la conectividad y el ambiente social entre los residentes.
      </li>
    </ul>
  </>
);

const service2Body = (
  <>
    <p>
      Nuestro equipo proporciona, siguiendo el protocolo establecido y
      considerando el nivel de independencia de cada residente, asistencia,
      seguridad y confianza, garantizando que cada uno se sienta respetado,
      acompañado profesionalmente y valorado. Esto se logra a través de:
    </p>
    <ul>
      <li>Rutina de inicio de día</li>
      <li>Manejo de incontinencia</li>
      <li>Asistencia en la alimentación.</li>
      <li>Apoyo en desplazamientos.</li>
      <li>Participación en las actividades programadas diariamente</li>
      <li>Rutina de final del día</li>
      <li>Atención de llamados durante la noche</li>
    </ul>
  </>
);

const service3Body = (
  <>
    <p>
      En un espacio rodeado de jardines, cómodo y ventilado se servirá
      diariamente un menú elaborado por nutricionista especializada en adultos
      mayores y servido por personas amigables y dedicadas.
    </p>
    <ul>
      <li>Alimentación diaria básica: desayuno, almuerzo y comida</li>
      <li>Meriendas saludables a media mañana y a media tarde</li>
      <li>Carta variada diariamente</li>
      <li>Estación de café</li>
      <li>Manejo de dietas especiales</li>
    </ul>
  </>
);

const service4Body = (
  <>
    <p>
      Provincia Mayor, bajo la coordinación de terapistas ocupacionales programa
      mensualmente las actividades diarias a realizar para que el adulto mayor
      se divierta, socialice y esté activo mentalmente.
    </p>
    <ul>
      <li>Actividades físicas</li>
      <li>Actividades lúdicas</li>
      <li>Carta variada diariamente</li>
      <li>Actividades espirituales</li>
      <li>Terapias y talleres</li>
    </ul>
  </>
);

const service5Body = (
  <>
    <p>
      Todos los lugares comunes así como la habitación y baño de los residentes
      contarán con aseo diario garantizando limpieza. El servicio de lavandería
      básico facilitará la disponibilidad de su vestuario, al igual que su ropa
      de cama y toallas.
    </p>
  </>
);

const service6Body = (
  <>
    <p>
      De lunes a sábado, de 8 a.m. a 6 p.m., disfrute de nuestra programación de
      actividades con acompañamiento y cuidado personalizado. Se ofrecen
      paquetes mensuales con opciones que incluyen:
    </p>
    <ul>
      <li>Servicios de televisión por suscripción.</li>
      <li>Dietas alimenticias especiales según recomendación médica.</li>
      <li>Sesiones de terapias bajo recomendación médica.</li>
      <li>
        Servicios/equipos adicionales en la habitación según necesidades
        específicas.
      </li>
      <li>
        Transporte y acompañamiento proporcionado por terceros calificados para
        citas médicas, compras, entretenimiento, etc.
      </li>
      <li>Peluquería con visitas semanales.</li>
      <li>
        Acompañantes temporales con cargo fijo por alimentación y alojamiento
        (requiere consulta y coordinación previa).
      </li>
    </ul>
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
  },
];

export default servicesData;
