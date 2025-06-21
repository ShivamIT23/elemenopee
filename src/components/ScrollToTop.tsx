import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const handleClick = () => {
      window.scrollTo(0, 0);
    };
    handleClick();
  }, [location.pathname]);

  return null;
}
