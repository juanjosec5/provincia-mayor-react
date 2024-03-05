import "@/sass/components/NotFound.scss";

const NotFoundDiv = () => {
  return (
    <div className="not-found">
      <p>¡Oops! Esta página no existe, regresa al inicio.</p>
      <a href="/" className="nav-cta button">
        regresar al inicio
      </a>
    </div>
  );
};

export default NotFoundDiv;
