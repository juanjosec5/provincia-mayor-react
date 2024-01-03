/* eslint-disable react/prop-types */
const HeaderOverlay = ({ isActive, onClick }) => {
  return (
    <>
      {isActive && (
        <div className="overlay" role="presentation" onClick={onClick}></div>
      )}
    </>
  );
};

export default HeaderOverlay;
