import "./home.css";
import "./homeResponsive.css";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import services from "../servicesPage/services.json";
import thoughts from "./peopleThoughts.json";
import CountUp from "react-countup";

import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import hhProject4 from "../images/home/hProject4.jpg";
import hArticle1 from "../images/home/hArticle1.jpg";
import hArticle2 from "../images/home/hArticle2.jpg";
import hArticle3 from "../images/home/hArticle3.jpg";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";


function Home() {
  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };
  return (
    <div className="home">
      <div className="homeNews" style={{ backgroundImage: `url("https://www.unite.ai/wp-content/uploads/2023/07/Alex_Mc_interior_design._modern._47404ec8-1cd9-4b15-ba7f-b22669c45f46.jpg")` }}>
        <h1>Make Your Home Stand Out</h1>
          <p>
            Discover the endless possibilities with our unique designs. We offer a variety of creative solutions to make your home truly one-of-a-kind.
          </p>

        <Link to="">
          <button>
            Get Started
            <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
          </button>
        </Link>
      </div>
      <div className="homeOther">
        <div className="homePlans">
          {services.services
            .filter((services, index) => index < 3)
            .map((s, ind) => {
              return (
                <div className="homePlan" key={ind}>
                  <h2>{s.service_name}</h2>
                  <p>{s.service_content}</p>
                  <Link to={`/project-details`}>
                    <button>
                      Read More
                      <BsArrowRight
                        style={{ marginLeft: "4%", color: "#CDA274" }}
                      />
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="homeAboutUs">
            <div className="hp-subtext">
              <h1>We Craft the Art of Living Stylishly</h1>
              <p>
              It is a well-established fact that a reader will be distracted by the readability of content on a page when examining its layout. This is due to the inherent tendency of readers to focus on the content, which can sometimes lead to overlooking the design elements.
              </p>
              <div className="callUs">
          <div className="phoneNum">
            <p className="h-icon">
              <BsTelephone />
            </p>
            <a href="tel: +91 9999999999">
              <p>
              +91 9999999999
                <br />
                <span>Call Us Anytime</span>
              </p>
            </a>
            <br />
          </div>

          <Link to={`/contact`}>
            <button>
              Get Free Estimate
              <BsArrowRight style={{ marginLeft: "2%", color: "#CDA274" }} />
            </button>
          </Link>
        </div>
            </div>
            <div className="hp-img">
              <img src={"https://media.licdn.com/dms/image/D5612AQHT2F5Jdpjo-Q/article-cover_image-shrink_720_1280/0/1703098237485?e=2147483647&v=beta&t=UW2DvPvXvnE8Xjg-VA7kW8ELn8l0qhvzmQz87L0bkLk"} alt="concept"></img>
            </div>
        </div>
  
        <div className="people-thoughts">
          <h1>What People Think About Us</h1>
          <div className="people">
            {thoughts.people.map((req, ind) => {
              return (
                <div className="person" key={ind}>
                  <div className="person-title">
                    <div>
                      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8dJdFtY0MkL--Htjn1FDHUc_03VuoZWFyw&s"} alt="customer"></img>
                    </div>
                    <p>
                      {req.fullname}
                      <br />
                      <span>{req.country}</span>
                    </p>
                  </div>
                  <p className="thought">{req.thoughts}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home-brands">
          <ul>
            <ol>
              <img src={brand1} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand2} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand3} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand4} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand5} alt="brand"></img>
            </ol>
          </ul>
        </div>
        <div className="homeProjects">
          <h1>Follow Our Projects</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page lookings at its layouts.
          </p>
          <div className="hp-list">
            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hPoject1} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Kitchen</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject2} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Bedroom</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject3} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Bathroom</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hp-project">
              <div className="hp-pro-img">
                <img src={hhProject4} alt="project"></img>
              </div>
              <div className="hp-pro-detail">
                <div className="hp-pro-info">
                  <p className="hp-prj-title">Modern Hall</p>
                  <p className="hp-prj-path">Decor / Architecture</p>
                </div>
                <div className="hp-pro-btn">
                  <Link to={`/project-details`}>
                    <button>
                      <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-experience">
        <div className="h-years">
        <CountUp className="h-year num" duration={4} end={10} />
          <p>Years Extensive Experience</p>
        </div>
        <div className="h-s-project">
        <CountUp duration={4} className="h-sp num" end={95} />
          <p>Success Project</p>
        </div>
        <div className="h-a-project">
        <CountUp duration={4} className="h-ap num" end={28} />
          <p>Active Project</p>
        </div>
        <div className="h-customers">
        <CountUp duration={4} className="h-cust num" end={105} />
          <p>Delighted Customers</p>
        </div>
      </div>
      <div className="articleNews">
        <h1>Fact & Articles</h1>
        <p>
        It is a well-established fact that a reader's attention can easily be diverted by the readable content of a page when viewing its layout.
        </p>
        <div className="articles">
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle1} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle2} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="article nochosen" onClick={handleChange}>
            <div className="article-header">
              <img src={hArticle3} alt="article"></img>
            </div>
            <div className="article-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ac-detail">
                <p className="ac-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-artifyme">
        <h1>Wanna join the ArtifyMe?</h1>
        <p>We are always looking for creative and talented individuals to join our team. If you are passionate about design and innovation, reach out to us and let's create something amazing together.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#292F36"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;