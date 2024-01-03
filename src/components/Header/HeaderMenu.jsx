/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HeaderMenu = ({ onSelectLink = null, isActive = null }) => {
  const navLinks = [
    {
      text: "Inicio",
      link: "#",
    },
    {
      text: "Sobre nosotros",
      link: "#",
    },
    {
      text: "queremos ayudarte",
      link: "#test",
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
            <Link tabIndex={tabIndex} to={link.link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
