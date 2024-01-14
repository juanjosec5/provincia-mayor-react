import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
  const history = useNavigate();

  useEffect(() => {
    "omg";
    window.scrollTo(0, 0);
  }, [history]);

  return children;
};

export default ScrollToTop;
