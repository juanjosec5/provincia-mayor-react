import Section from "@/components/BaseComponents/Section";
import Icon from "@mdi/react";
import { mdiWhatsapp, mdiEmailOutline } from "@mdi/js";

const Contact = () => {
  const email = "juan.josecuadros1@gmail.com";
  const subject = `subject=${encodeURI("Informacion General")}`;
  const body = `body=${encodeURI(
    "Me interesa saber mas sobre Provincia Mayor"
  )}`;

  const wapp = "https://api.whatsapp.com/send?phone=573154019699";
  const wappText = 'text="holi"';
  return (
    <Section>
      <input type="text" />
      <a href={`${wapp}&${wappText}`} className="button">
        <Icon path={mdiWhatsapp} size={1} />
      </a>
      <a href={`mailto:${email}?${subject}&${body}`} className="button">
        <Icon path={mdiEmailOutline} size={1} />
      </a>
    </Section>
  );
};

export default Contact;
