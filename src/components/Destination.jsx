import "../styles/components/_destination.scss";
import DestinationInfos from "./DestinationInfos";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Destination = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when 20% of the component is visible
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
    }}
    >
      <div className="destination-section">
        <div className="destination-first-section">
          <h2>Popular Destination</h2>
          <p>Unleash Your Wanderlust With SkyWings</p>
        </div>
      </div>
      <div className="carousel-container">
        <DesInfo />
      </div>
    </motion.div>
  )
}

// OTHER FUNCTIONS

const DesInfo = () => {
  return (
    <>
      {DestinationInfos.map((place)=>{
        return (
          <div key={place.id} className="carousel">
            <motion.img src={place.img} alt="" 
            
              whileHover={{y: -5}}
            />
            <div className="carousel-box">
              <div className="carousel-names">
                <span>{place.name}</span>
                <span>✈︎ {place.location}</span>
              </div>
              <div className="rating">
                <span className="star-rating">{place.rating}</span>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}


export default Destination
