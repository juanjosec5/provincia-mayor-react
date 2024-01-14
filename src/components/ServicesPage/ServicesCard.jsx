import Media from "@/components/BaseComponents/Media";

const ServicesCard = ({
  imgArray,
  title = "test",
  body = "Test",
  reverse = false,
}) => {
  const classes = `service ${reverse ? "service--reverse" : ""}`;
  return (
    <article className={classes}>
      <div className="service__image">
        <Media type="picture" path={imgArray}></Media>
      </div>
      <div className="service__copy">
        <h2>{title}</h2>
        <div className="service__content">{body}</div>
      </div>
    </article>
  );
};

export default ServicesCard;
