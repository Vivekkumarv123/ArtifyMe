import React from "react";
import "./Spinner.css"; // Ensure this includes the ArtifyMe branding styles

const Spinner = () => (
  <div className="spinner">
    <svg
      className="spinner-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <circle
        className="spinner-path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
      />
    </svg>
    <p className="spinner-text">Bringing Art to Life...</p> {/* Custom text */}
  </div>
);

export default Spinner;