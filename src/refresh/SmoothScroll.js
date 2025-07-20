import { useState, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import Spinner from "./Spinner"; // Import the customized Spinner

export function SmoothScroll({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Set loading to false after a short delay
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [location, navType]);

  return (
    <div className={`smooth-scroll ${loading ? 'loading' : ''}`}>
      {loading ? <Spinner /> : children}
    </div>
  );
}
