import React, { useEffect, useState } from "react";
import Wrap from "../Wrapper/Wrap";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import "./Skills.scss";
import ReactTooltip from "react-tooltip";
import MotionWrap from "../Wrapper/MotionWrap";

const Skills = () => {
  const [exp, setexp] = useState([]);
  const [skills, setskills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillquery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setexp(data);
    });
    client.fetch(skillquery).then((data) => {
      setskills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills and <span>Experience</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "#edf2f8" }}>
                <img src={urlFor(skill.icon)} alt={skill.name}></img>
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {exp.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
