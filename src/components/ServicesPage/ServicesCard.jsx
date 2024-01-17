import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Media from "@/components/BaseComponents/Media";

const ServicesCard = ({
  imgArray,
  title = "test",
  body = "Test",
  reverse = false,
}) => {
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const classes = `service ${reverse ? "service--reverse" : ""} ${
    isVisible ? "visible" : ""
  }`;
  return (
    <article ref={ref} className={classes}>
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
