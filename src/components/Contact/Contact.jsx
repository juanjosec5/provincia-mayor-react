import Section from "@/components/BaseComponents/Section";
import Icon from "@mdi/react";

import { mdiWhatsapp, mdiEmailOutline } from "@mdi/js";

import "@/sass/components/Contact.scss";

const Contact = () => {
  const email = "juan.josecuadros1@gmail.com";
  const subject = `subject=${encodeURI("Informacion General")}`;
  const body = `body=${encodeURI(
    "Me interesa saber mas sobre Provincia Mayor"
  )}`;

  const wapp = "https://api.whatsapp.com/send?phone=573154019699";
  const wappText = 'text="Hola, Me interesa saber mas sobre Provincia Mayor"';
  return (
    <Section classes="contact">
      <div className="cta-wrapper">
        <p>
          <strong>Ponte en contacto directamente con nosotros</strong>
        </p>
        <a
          href={`${wapp}&${wappText}`}
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <Icon path={mdiWhatsapp} size={1} /> Escribenos a whatsapp
          </span>
        </a>
        <a href={`mailto:${email}?${subject}&${body}`} className="button">
          <span>
            <Icon path={mdiEmailOutline} size={1} /> Escribenos un correo
          </span>
        </a>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8118075974858!2d-76.5463443241868!3d3.3960619515834876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a122a229ac43%3A0x22843018aaf57705!2sProvincia%20Mayor!5e0!3m2!1sen!2sco!4v1704333270276!5m2!1sen!2sco"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p>Calle 10 66B-100 Cali, Colombia</p>
      </div>
    </Section>
  );
};

export default Contact;
