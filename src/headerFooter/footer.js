import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{ display: "flex" }} to="/">
              <div className="f-logo">
                <img src={'https://cdn11.bigcommerce.com/s-ehphc/images/stencil/1280x1280/products/1709/8598/OZ7-ALPHA_white__94368.1655735881.jpg?c=2'} alt="logo"></img>
              </div>
              <div className="f-text">
                <p>ArtifyMe</p>
              </div>
            </Link>
          </div>
          <div className="f-about-text">
            <p>
            "Art is the journey of a free soul; at ArtifyMe, we provide the canvas for your imagination to soar."
            </p>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-pages">
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/aboutus`}>About Us</Link>
            </li>
            <li>
              <Link to={`/projects`}>Our Projects</Link>
            </li>
            <li>
              <Link to={`/team`}>Our Team</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </section>
        <section className="f-services">
          <p>Services</p>
          <ul>
            <li>
              <Link to={`/serviceSingle`}>Our Interior Design</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Our Products</Link>
            </li>
          </ul>
        </section>
        <section className="f-contact">
          <p>Contact</p>
          <p>Nerul. Navi Mumbai, Maharastra 400706</p>
          <p>
            <a href="mailto: contact@artifyme.com">contact@artifyme.com</a>
          </p>
          <p>+91 999999999</p>
        </section>
      </div>
      <div className="terms">
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
          <ol>
            <Link to={`/cookies-policy`}>&bull; Cookies Policy</Link>
          </ol>
          <ol>
            <Link to={`/faq`}>&bull; FAQ</Link>
          </ol>
        </ul>
      </div>
      <div className="f-copyright">
        <p>Copyright © {new Date().getFullYear()} ArtifyMe | Designed by Vivek Kumar Verma</p>
      </div>
    </div>
  );
}
