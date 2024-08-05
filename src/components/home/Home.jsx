import React from "react";
import { Outlet } from "react-router-dom";
import { delay, motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./home.css";
import homeImage2 from '/Personal portfolio/portflio/src/components/images/homeImage4.png'

export const Home = () => {
  const [text1, count1] = useTypewriter({
    words: ["Saifullah Ahmed"],
    loop: 1,
    typeSpeed: 80,
  });
  
  const [text2, count2] = useTypewriter({
    words: ["Web developer."],
    loop: 1,
    typeSpeed: 80,
    // startDelay: 2000 + text1.length * 80,
  }); 
  const textVariant = {
    hidden: {
      opacity: 0.35
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3
      }
    }
  }

  const imageVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1
    }
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 0px 16px 13px rgba(120, 120, 120, 0.37)'
  }
}

  return (
    <div className="homeWelcome">
      <motion.h4 className="aboutText"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 1, duration: 1}}
      whileHover={{ scale: 1.2 }}
      >
        Welcome to my portfolio</motion.h4>
    <div className="home" >
     <div className="container">
      <h1 className="text">
        Hi, my name is
        <span className="boldText"> {text1}</span>
        {
          !count1.isDone && (
            <Cursor />
          )
        }
      </h1>
      {count1.isDone && (
        <motion.h1 className="text"
        variants={textVariant}
        initial='hidden'
        animate='visible'
        >
          and I am a passionate
          <span className="boldText"> {text2}</span>
          <Cursor />
        </motion.h1>
      )}
    </div>
    <div className="home__image">
      <motion.img 
      variants={imageVariant}
      initial='hidden'
      animate='visible'
      whileHover='hover'
      src={homeImage2} alt="home-image"/>
    </div>
    <Outlet />
  </div>
  </div>
  );
};

export default Home;
