import "@/sass/components/Section.scss";

const Section = ({ children, title, classes }) => {
  const cssClasses = `section ss-container ${classes}`;

  return (
    <section className={cssClasses}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
