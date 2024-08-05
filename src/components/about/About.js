import React from "react";
import { delay, motion } from "framer-motion";
import "./about.css";
import bar from '/Personal portfolio/portflio/src/components/images/progressBar.png'

export const About = () => {
  return (
    <div id="about">
      <h1 className="aboutText">Educational Background </h1>
      <h4>Here are the few lines about my educational Background:</h4>
      <div className="details">
        <motion.div
          className="education__primary"
          whileHover={{
            scale: 1.2,
            boxShadow: "-4px 4px 3px 0px rgba(237,237,178,0.88)",
          }}
        >
          <h6>MATRICULATION:</h6>
          <span>Usman Public School - 93% </span>
          <p>Batch 2020-21</p>
        </motion.div>
        <motion.div
          className="education__secondary"
          whileHover={{
            scale: 1.2,
            boxShadow: "-4px 4px 3px 0px rgba(237,237,178,0.88)",
          }}
        >
          <h6>INTERMEDIATE:</h6>
          <span>Govt. Dehli College - 85%</span>
          <p>Batch 2021-23</p>
        </motion.div>
        <motion.div
          className="education__bachelors"
          whileHover={{
            scale: 1.2,
            boxShadow: "-4px 4px 3px 0px rgba(237,237,178,0.88)",
          }}
        >
          <h6>BACHELORS:</h6>
          <span>DHA Suffa University</span>
          <p>Batch 2024-28</p>
        </motion.div>
      </div>

      <div className="skills">
        <div className="wheelOne">
          <motion.div whileHover={{ scale: 1.2 }}>
          <p>95%</p>
          <img src={bar} alt="progress-bar" />
          </motion.div>
          <h4>HTML</h4>
        </div>

        <div className="wheelTwo">
          <motion.div whileHover={{ scale: 1.2 }}>
          <p>80%</p>
          <img src={bar} alt="progress-bar" />
          </motion.div>
          <h4>CSS</h4>
        </div>

        <div className="wheelThree">
          <motion.div whileHover={{ scale: 1.2 }}>
          <p>80%</p>
          <img src={bar} alt="progress-bar" />
          </motion.div>
          <h4>JavaScript</h4>
        </div>

        <div className="wheelFour">
          <motion.div whileHover={{ scale: 1.2 }}>
          <p>70%</p>
          <img src={bar} alt="progress-bar" />
          </motion.div>
          <h4>React</h4>
        </div>

      </div>
    </div>
  );
};
