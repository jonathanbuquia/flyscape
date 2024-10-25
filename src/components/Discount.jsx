import "../styles/components/_discount.scss";
import sales from "../assets/sale.jpeg"


import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* eslint-disable react/prop-types*/ 

const Discount = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
    
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}>
      <div className="discount-skywings">
        <div className="leftbox">
          <div className="leftbox-img">
            <motion.img src={sales} alt="" 
              whileHover={{y:-10}}
            />
          </div>
          <div className="leftbox-off">
            <h3>20% OFF</h3>
            <p>Till 28 December, 2024</p>
          </div>
        </div>
        <div className="rightbox">
          <div className="rightbox-words">
            <div className="topright">
              <motion.span className="bigtext"
                whileHover={{x: 7}}
                transition={{ type: 'spring', stiffness: 100 }}
              >UNLEASH</motion.span>
              <p>Travelling Is a Wonderful Way To Explore New Places, Learn About Different Cultures and Gain Unique</p>
            </div>
            <motion.span className="bigtext-mid"
            
            whileHover={{y: -7}}
            transition={{ type: 'spring', stiffness: 100 }}
            >WANDERLUST WITH</motion.span>
            <div className="lowerright">
              <p>Travelling Is a Wonderful Way To Explore New Places, Learn About Different Cultures</p>
              <motion.span className="bigtext"
                whileHover={{x: -7}}
                transition={{ type: 'spring', stiffness: 100 }}
                >SKYWINGS</motion.span>
            </div>
          </div>
          <div className="big-button">
            <a href="#">Book A Flight Now</a>
          </div>
        </div>
      </div>

      <motion.div className="about-us"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
      
      >
        <div className="left-container">
          <span>ABOUT US</span>
        </div>
        <div className="right-container">
          <div className="upper-box">
            <p>Travelling is a wonderful way to explore new places, offering a unique opportunity to immerse oneself in diverse cultures and environments. </p>
          </div>
          <div className="lower-container">
            <div className="lower-left">
              <p>Travelling allows us to connect with nature in profound ways, from hiking majestic mountains to relaxing on pristine beaches.</p>
            </div>
            <div className="lower-right">
              <p>As we navigate unfamiliar cities and landscapes, we develop a sense of adventure and curiosity that enriches our daily lives.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="countings">
        <NumberCounts counts="10+" descriptions="Year Experience"/>
        <NumberCounts counts="22k" descriptions="Happy Clients"/>
        <NumberCounts counts="4.9" descriptions="Overall Rating"/>
      </div>


    </motion.div>
  )
}

const NumberCounts = ({ counts, descriptions}) => {
  return (
    <div className="counts-container">
      <span>{counts}</span>
      <p>{descriptions}</p>
    </div>
  )
}

export default Discount
