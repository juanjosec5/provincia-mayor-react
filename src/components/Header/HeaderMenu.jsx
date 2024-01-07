/* eslint-disable react/prop-types */
const HeaderMenu = ({ onSelectLink = null, isActive = null }) => {
  const navLinks = [
    {
      text: "Beneficios",
      link: "/#benefits",
    },
    {
      text: "Servicios",
      link: "/#services",
    },
    {
      text: "Galería",
      link: "/#gallery",
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
            <a
              onClick={(event) => handleNavLinkClick(event)}
              tabIndex={tabIndex}
              href={link.link}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
