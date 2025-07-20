import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullname: "",
    mail: "",
    subject: "",
    phone: "",
    interested: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Show alert
    alert("Thank you for your message! We will get back to you soon.");

    // Clear form
    setFormData({
      fullname: "",
      mail: "",
      subject: "",
      phone: "",
      interested: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>
      <div className="contact-content">
        <h2>We love meeting new people and helping them.</h2>
        <div className="contact-form">
          <div className="contact-form-info">
            <div className="icons">
              <p>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                <a href="mailto: vvivek23it@student.mes.in">vvivek23it@student.mes.in</a>
              </p>
              <p>
                <span className="icon">
                  <BsTelephone />
                </span>
                +91 9999999999
              </p>
              <p>
                <span className="icon">
                  <GiWorld />
                </span>
                <a href="https://www.artifyme.com">www.artifyme.com</a>
              </p>
            </div>
            <div className="contact-smedias">
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
                  <a href="https://www.github.com/">
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
          </div>
          <form className="contact-form-fill" onSubmit={handleSubmit}>
            <div className="nameEmail">
              <input 
                name="fullname" 
                placeholder="Name" 
                value={formData.fullname} 
                onChange={handleChange} 
              />
              <input 
                name="mail" 
                placeholder="Email" 
                value={formData.mail} 
                onChange={handleChange} 
              />
            </div>
            <div className="subjectPhone">
              <input 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject} 
                onChange={handleChange} 
              />
              <input 
                name="phone" 
                placeholder="Phone" 
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>
            <div className="interested">
              <textarea 
                name="interested" 
                placeholder="Hello, I need help.. / I am interested in.." 
                value={formData.interested} 
                onChange={handleChange} 
              />
            </div>
            <div className="send">
              <button type="submit">
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8677063263267!2d73.0331611!3d19.016352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632353568762!5m2!1sen!2sin"
          title="map"
          style={{
            border: "0",
            allowFullScreen: "",
            ariaHidden: "false",
            tabIndex: "0",
            width: "900px",
            height: "450px",
          }}
        ></iframe>
      </div>
    </div>
  );
}
