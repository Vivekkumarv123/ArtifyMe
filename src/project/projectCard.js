import "./projectCard.css";
import { IoIosArrowForward } from "react-icons/io";

export function ProjectCard({ props }) {
  const { title, image } = props;

  return (
    <div className="op-project">
      <div className="op-pro-img">
        <img src={image} alt={title} />
      </div>
      <div className="op-pro-detail">
        <div className="op-pro-info">
          <p className="op-prj-title">{title}</p>
          <p className="op-prj-path">Decor / Architecture</p>
        </div>
        <div className="op-pro-btn">
            <button>
              <IoIosArrowForward />
            </button>
        </div>
      </div>
    </div>
  );
}