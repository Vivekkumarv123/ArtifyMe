import "./blog.css";
import latestNews from "../images/articles/blogLatest.jpg";
import article1 from "../images/articles/article1.jpg";
import article2 from "../images/articles/article2.jpg";
import article3 from "../images/articles/article3.jpg";
import article4 from "../images/articles/article4.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notaken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
      e.target.classList.remove("notaken");
      e.target.classList.add("taken");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
    }
  };
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>
          Articles & News<p>Home / Blog</p>
        </h1>
      </div>

      <div className="latestNews">
        <h1>Latest Post</h1>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news"></img>
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h1>Affordable and Innovative Interior Design Ideas</h1>
              <p>
                Discover creative interior design solutions that are both stylish and budget-friendly. Transform your space with modern ideas that maximize beauty and functionality without breaking the bank.
                <br /><br />
                Unlike common misconceptions, great design doesn’t have to be expensive. Our approach brings elegance and practicality together, inspired by timeless design principles.
              </p>

            </div>
            <div className="ln-detail">
              <p className="ac-date">9 Sept 2024</p>
              <Link to={`/blog-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1>Articles & News</h1>
        <div className="blog-art-list">
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article2} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Find Solutions for Your Building Construction Needs</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article4} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let's Solve Your Building Construction Challenges</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article3} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Get the Perfect Solution for Your Construction Project</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article2} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Discover Solutions for Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article4} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>We Provide Solutions for All Your Construction Needs</p>
              <div className="ba-detail">
                <p className="ba-date">7 Sept 2024</p>
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
    </div>
  );
}
