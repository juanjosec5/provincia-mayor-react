/* eslint-disable react/prop-types */
const HeaderNav = ({children, type="mobile", isActive=false}) => {
  const csClasses = type === "mobile" ? 
  `main-header__nav--mobile ss-container ${isActive ? 'open' : 'closed'}` :
  'main-header__nav--desktop ss-container';

  return (
  <nav className={csClasses}>
    {children}
  </nav>
)}

export default HeaderNav;