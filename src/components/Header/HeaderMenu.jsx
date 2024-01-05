/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const HeaderMenu = ({ onSelectLink = null, isActive = null }) => {
  const navLinks = [
    {
      text: "Inicio",
      link: "hero",
    },
    {
      text: "Servicios",
      link: "services",
    },
    {
      text: "Galería",
      link: "gallery",
    },
  ];

  const handleNavLinkClick = (event) => {
    if (event.target.tagName === "A" && onSelectLink) {
      onSelectLink();
    }
  };

  const tabIndex = isActive === false ? -1 : 0;
  return (
    <>
      <ul onClick={handleNavLinkClick}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              onClick={(event) => handleNavLinkClick(event)}
              tabIndex={tabIndex}
              to={link.link}
              smooth={true}
              offset={-70}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
