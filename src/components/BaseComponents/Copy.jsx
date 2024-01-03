const Copy = ({ title, body, cta = "" }) => {
  return (
    <div className="copy">
      <h3>{title}</h3>
      <p>{body}</p>
      {cta && <button>{cta}</button>}
    </div>
  );
};

export default Copy;
