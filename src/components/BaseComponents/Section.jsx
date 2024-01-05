import "@/sass/components/Section.scss";

const Section = ({ children, title, classes, ...props }) => {
  const cssClasses = `section ss-container ${classes}`;

  return (
    <section className={cssClasses} {...props}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
