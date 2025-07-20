import "./services.css";
import services from "./services.json";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import photo1 from "../images/services1.jpg";
import icon1 from "../images/Icon1.svg";
import photo2 from "../images/services2.jpg";
import icon2 from "../images/Icon2.svg";
import photo3 from "../images/services3.jpg";
import icon3 from "../images/Icon3.svg";
import photo4 from "../images/services4.jpg";
import icon4 from "../images/Icon4.svg";

export function Services() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    if (e.target.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.classList.add("selected-type");
    } else if (e.target.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  const handleChangeTwo = (e) => {
    const pClass = e.target.parentElement.parentElement;
    if (e.target.parentElement.className === "service-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
      e.target.parentElement.classList.add("selected-type");
    } else if (e.target.parentElement.className === "service-type selected-type") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "service-type";
      }
    }
  };

  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Services<p>Home / Services</p>
        </h1>
      </div>
      <div className="service-types">
        {services.services.map((type, index) => {
          return (
            <div className="service-type" onClick={handleChange} key={index}>
              <h2 onClick={handleChangeTwo}>{type.service_name}</h2>
              <p onClick={handleChangeTwo}>{type.service_content}</p>
              <Link to={`/servicesingle`}>
                <button>
                  Read More{" "}
                  <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="howWeWork">
        <div className="how-title">
          <h1>How We Work</h1>
          <p>
            We believe that the key to successful design and construction is a well-thought-out process. Our team approaches each project with creativity, precision, and attention to detail, ensuring that the result aligns perfectly with our clients' vision.
          </p>
        </div>
        <div className="how-content">
            <div className="hc-img">
                <img src={photo1} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon1} alt="icon"></img>
                    <p>01</p>
                </div>
                <div className="hc-subtext">
                    <h2>Concept & Details</h2>
                    <p>We start by discussing your ideas and objectives in detail. Our concept phase ensures that every design element reflects your personal style and functional needs.</p>
                </div>
            </div>
        </div>
            
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon2} alt="icon"></img>
                    <p>02</p>
                </div>
                <div className="hc-subtext">
                    <h2>Idea for Work</h2>
                    <p>Once we have a clear understanding of your concept, we begin brainstorming innovative ideas to turn your vision into reality. Our collaborative approach ensures unique solutions that cater to your needs.</p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo2} alt='concept'></img>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-img">
                <img src={photo3} alt='concept'></img>
            </div>
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon3} alt="icon"></img>
                    <p>03</p>
                </div>
                <div className="hc-subtext">
                    <h2>Design</h2>
                    <p>Our design phase focuses on combining aesthetics with functionality. We create designs that are not only beautiful but also practical for everyday use.</p>
                </div>
            </div>
        </div>
        
        <div className="how-content">
            <div className="hc-text">
                <div className="hc-text-anima">
                    <img src={icon4} alt="icon"></img>
                    <p>04</p>
                </div>
                <div className="hc-subtext">
                    <h2>Perfection</h2>
                    <p>Perfection is our goal in every project. From materials to craftsmanship, we ensure that every detail is executed to the highest standard, delivering a flawless finish.</p>
                </div>
            </div>
            <div className="hc-img">
                <img src={photo4} alt='concept'></img>
            </div>
        </div>
      </div>

      <div className="artifyme">
        <h1>Wanna join the ArtifyMe?</h1>
        <p>We are always looking for creative and talented individuals to join our team. If you are passionate about design and innovation, reach out to us and let's create something amazing together.</p>
        <Link to={`/contact`}>
          <button>Contact With Us<AiOutlineArrowRight style={{ marginLeft: "5px"  }} color="#292F36" /></button></Link>
      </div>
    </div>
  );
}
