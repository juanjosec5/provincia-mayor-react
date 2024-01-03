/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../../sass/components/Header.scss";

import {
  HeaderMenu,
  HeaderMenuButton,
  HeaderNav,
  HeaderOverlay,
  Logo,
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
          <a href="#" className="nav-cta button">
            contactanos
          </a>
        </MobileDrawer>
      </HeaderNav>
      <HeaderNav type="desktop">
        <Logo />
        <HeaderMenu />
        <a href="#" className="nav-cta button">
          contactanos
        </a>
      </HeaderNav>
    </header>
  );
};

export default Header;
