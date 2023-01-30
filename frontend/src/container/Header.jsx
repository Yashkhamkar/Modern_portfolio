import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";
import flutter from "../assets/flutter.png";
import react from "../assets/react.png";
import cpp from "../assets/c++.png";
import Wrap from "../Wrapper/Wrap";
import "./Header.scss";
import MotionWrap from "../Wrapper/MotionWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Yash</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Competitive Programmer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[react, cpp, flutter].map((some, index) => (
        <div className="circle-cmp app__flex" key={`some-${index}`}>
          <img src={some} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Wrap(MotionWrap(Header,"app__header"), "home");
