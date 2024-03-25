import Logo from "../BaseComponents/Logo";
import "@/sass/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer ss-container">
      <div className="logo">
        <Logo />
      </div>
      <div className="footer__copy">
        <p>Contáctenos también por:</p>
        <p>Teléfono</p>
        <ul>
          <li>
            <a href="tel:+573014859237">+57 301 485 9237</a>
          </li>
          <li>
            <a href="tel:+576023995264">+57 (602) 399 5264</a>
          </li>
        </ul>
        <p>Correo:</p>
        <a href="mailto:admon.provinciamayor@gmail.com">
          admon.provinciamayor@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
