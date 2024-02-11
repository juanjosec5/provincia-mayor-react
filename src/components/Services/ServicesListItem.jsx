import { HashLink } from "react-router-hash-link";

const ServicesListItem = ({ text, icon, link = "", ...props }) => {
  return (
    <li {...props}>
      <span>{icon}</span>
      <HashLink to={link}>{text}</HashLink>
    </li>
  );
};

export default ServicesListItem;
