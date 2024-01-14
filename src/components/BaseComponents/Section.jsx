import "@/sass/components/Section.scss";

const Section = ({ children, title, classes, container = true, ...props }) => {
  const cssClasses = `section ${container ? "ss-container" : ""} ${
    classes ? classes : ""
  }`;

  return (
    <section className={cssClasses.trim()} {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
