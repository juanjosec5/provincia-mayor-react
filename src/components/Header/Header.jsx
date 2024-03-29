/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../../sass/components/Header.scss";
import Logo from "@/components/BaseComponents/Logo";
import {
  HeaderMenu,
  HeaderMenuButton,
  HeaderNav,
  HeaderOverlay,
  MobileDrawer,
} from ".";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const mediaQuery = matchMedia("(min-width: 768px)");

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleResize = () => setIsActive(false);
  const toggleActiveClass = () => setIsActive((isActive) => !isActive);
  const handleLinkSelection = () => setIsActive(false);

  return (
    <header className="main-header">
      <HeaderNav type="mobile" isActive={isActive}>
        <Logo />
        <HeaderOverlay isActive={isActive} onClick={handleLinkSelection} />
        <HeaderMenuButton onClick={toggleActiveClass} />
        <MobileDrawer>
          <HeaderMenu onSelectLink={handleLinkSelection} isActive={isActive} />
          <a
            href="#contact"
            className="nav-cta button"
            onClick={handleLinkSelection}
          >
            contáctenos
          </a>
        </MobileDrawer>
      </HeaderNav>
      <HeaderNav type="desktop">
        <Logo />
        <HeaderMenu />
        <a
          href="#contact"
          className="nav-cta button"
          onClick={handleLinkSelection}
        >
          contáctenos
        </a>
      </HeaderNav>
    </header>
  );
};

export default Header;
