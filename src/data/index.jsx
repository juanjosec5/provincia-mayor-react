import img1Sm from "@/assets/services/service-1/service-1-sm.png";
import img1Md from "@/assets/services/service-1/service-1-md.png";
import img1Lg from "@/assets/services/service-1/service-1-lg.png";

const servicesHeadings = {
  1: "Vivienda",
  2: "Asistencia y Cuidado Personal",
  3: "Preparación de Alimentos y Planeación de Dietaszz",
  4: "Recreación y Socialización",
  5: "Servicio de Limpieza y Lavandería",
  6: "Club Día y Servicios Adicionales",
};

const service1Body = (
  <>
    <p>
      Brindamos un alojamiento amplio, privado y con baño, espacios con
      excelente iluminación natural y ventilación para el desarrollo de
      múltiples actividades creando un entorno activo y social donde el
      residente podrá conocer y compartir con personas en la misma etapa de
      vida.
    </p>
    <ul>
      <li>
        26 habitaciones con baño privado, con todas las facilidades para el
        cuidado y la atención del adulto mayor
      </li>
      <li>Closet amplio</li>
      <li>Conexion para televisión</li>
      <li>Botón de llamado inalámbrico</li>
      <li>Amplios corredores</li>
      <li>Jardines</li>
      <li>Oratorio</li>
      <li>Salón comedor</li>
      <li>Salón de actividades</li>
      <li>Sala de televisión</li>
      <li>Gimnasio</li>
      <li>Enfermeria</li>
      <li>Baños en zonas comunes</li>
      <li>
        Acceso a la celebración diaria de la eucaristía en la Capilla de las
        Hermanas Dominicas de la Presentación
      </li>
      <li>Wifi en todas las habitaciones y zonas comunes</li>
    </ul>
  </>
);

const service2Body = (
  <>
    <p>
      Nuestro equipo brinda, de acuerdo con el protocolo establecido y el nivel
      de independencia del residente, la asistencia, seguridad y confianza para
      que cada uno se sienta respetado, acompañado profesionalmente y apreciado.
    </p>
    <ul>
      <li>Rutina de inicio de día</li>
      <li>Manejo de incontinencia</li>
      <li>Alimentación</li>
      <li>Desplazamientos</li>
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
      De lunes a sábado a partir de las 8 a.m. hasta las 6 p.m. podrán disfrutar
      de nuestra programación de actividades en un ambiente agradable, seguro y
      tranquilo, con el acompañamiento y cuidado requerido para cada caso.
    </p>
    <p>
      Se pueden contratar paquetes según el número de días que asista durante el
      mes.
    </p>
    <ul>
      <li>Servicios de televisión por suscripción</li>
      <li>
        Dietas alimenticias especiales
        <ul>
          <li>
            De acuerdo con recomendación del médico tratante del residente.
          </li>
        </ul>
      </li>
      <li>
        Sesiones de Terapias
        <ul>
          <li>
            De acuerdo con recomendación del médico tratante del residente.
          </li>
        </ul>
      </li>
      <li>
        Servicios/Equipos adicionales en la habitación
        <ul>
          <li>Según necesidades específicas</li>
        </ul>
      </li>
      <li>
        Transporte y acompañamiento
        <ul>
          <li>
            En Provincia Mayor contará con terceros calificados para esta labor
            con el fin de ayudar en el desplazamiento y acompañamiento para
            citas médicas, compras, entretenimiento, etc.
          </li>
        </ul>
      </li>
      <li>
        Peluquería
        <ul>
          <li>Visitas semanales</li>
        </ul>
      </li>
      <li>
        Acompañantes temporales
        <ul>
          <li>
            Cargo fijo por alimentación y alojamiento. Requiere consulta y
            coordinación previa
          </li>
        </ul>
      </li>
    </ul>
  </>
);

const servicesData = [
  {
    reverse: true,
    imgPath: [
      {
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
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
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
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
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
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
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
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
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
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
        path: img1Lg,
        media: "(min-width: 1280px)",
        alt: "test",
      },
      {
        path: img1Md,
        media: "(min-width: 768px)",
        alt: "test",
      },
      {
        path: img1Sm,
        media: "(orientation: portrait)",
        alt: "test",
      },
    ],
    title: servicesHeadings[4],
    body: service4Body,
  },
];

export default servicesData;
