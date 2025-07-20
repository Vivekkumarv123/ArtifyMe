import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{display:"flex"}} to="/">
          <div className="header-logo">
            <img src={"https://cdn11.bigcommerce.com/s-ehphc/images/stencil/1280x1280/products/1709/8598/OZ7-ALPHA_white__94368.1655735881.jpg?c=2"} alt="logo"></img>
          </div>
          <div className="header-text">
            <p>ArtifyMe</p>
          </div>
        </Link>
      </div>
      <div className="header-pages">
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li><Link to={`/catalog`}>Catalog</Link></li>
            <li><Link to={`/products`}>Products</Link></li>
            <li><Link to={`/appointment`}>Appointmnet Booking</Link></li>
            <li><Link to={`team`}>Team</Link></li>
            <li><Link to={`/services`}>Services</Link></li>
            <li><Link to={`/projects`}>Projects</Link></li>
            <li><Link to={`/blog`}>Blog</Link></li>
            <li><Link to={`/contact`}>Contact</Link></li>
            <li><Link to={`/profile`}><button className="profile-header"><img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="Profile" /></button></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;