import "@/sass/components/Card.scss";

import Media from "../BaseComponents/Media";
import Copy from "../BaseComponents/Copy";

const Card = ({ imgPath, title, body }) => {
  return (
    <article className="card">
      <Media type="image" path={imgPath} />
      <Copy title={title} body={body} />
    </article>
  );
};

export default Card;
