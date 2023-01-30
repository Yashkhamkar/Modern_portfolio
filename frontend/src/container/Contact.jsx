import React, { useState } from "react";
import Wrap from "../Wrapper/Wrap";
import emailz from "../assets/email.png";
import mobile from "../assets/mobile.png";
import "./Contact.scss";
import { client } from "../client";
import MotionWrap from "../Wrapper/MotionWrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Contact <span>Me </span>With</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={emailz} alt="email" />
          <a href="mailto:yashkhamkar1100@gmail.com" className="p-text">
            yashkhamkar1100@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="phone" />
          <a href="tel:+91 9970036897" className="p-text">
            +91 9970036897
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};
export default Wrap(MotionWrap(Contact,"app__footer"), "contact");
