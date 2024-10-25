
import "../styles/components/_hero.scss";

import planeImg from "../assets/hero/airplane.png";

import placesOne from "../assets/places_img/1.jpg"
import placesTwo from "../assets/places_img/2.jpg"
import placesThree from "../assets/places_img/3.jpg"
import placesFour from "../assets/places_img/4.jpg"
import placesFive from "../assets/places_img/5.jpg"

import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">

        <div className="hero-titles">
          <p>Elevate your travel journey</p>
          <h1>Experience <br />The Magic Of Flight!</h1>
          <motion.button
            whileHover={{scale: 1.1}}
          
          >Book A Trip Now</motion.button>
        </div>

        <motion.img src={planeImg} alt="plane" className="hero-plane"
        
          initial={{x: 150}}
          animate={{x: 0}}
          transition={{duration: 1}}
        />

        <div className="hero-places">
          <span className="hero-sub">Know More  ➤</span>
          <div className="hero-infos">
            <motion.div className="hero-circles-img"

              initial={{x: -40}}
              animate={{x:0}}
              transition={{duration: .5}}

            >
              <img src={placesOne} alt="" className="circles-icons first-icon"/>
              <img src={placesTwo} alt="" className="circles-icons second-icon"/>
              <img src={placesThree} alt="" className="circles-icons third-icon"/>
              <img src={placesFour} alt="" className="circles-icons fourth-icon"/>
              <img src={placesFive} alt="" className="circles-icons fifth-icon"/>
            </motion.div>
            <div className="hero-circles-infos">
              <span>Awesome places</span>
              <p>Discover The World One Adventure At A Time!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
