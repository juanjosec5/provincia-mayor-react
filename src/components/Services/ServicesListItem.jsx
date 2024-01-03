const ServicesListItem = ({ text, icon, ...props }) => {
  return (
    <li {...props}>
      <span>{icon}</span>
      {text}
    </li>
  );
};

export default ServicesListItem;
