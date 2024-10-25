import Title from "./reusables/Title"
import "../styles/components/_testimonials.scss";
import TestimonialsCards from "./reusables/TestimonialsCards";


import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {

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
    <div>
      <Title 
        title="Loved By Our Thousand Travelers"
        descriptions="Trusted and cherished by thousands of travelers for unforgettable experiences."
      />
      <motion.div className="testimonials-container"
      
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
        {TestimonialsCards.map((test, index) => {
          return (
            <motion.div key={index} className="testimonials-box"
            
            whileHover={{y: -7}}
            >
              <div className="upperbox">
                <span>{test.stars}</span>
                <p>{test.testimony}</p>
              </div>
              <div className="lowerbox">
                <div className="portrait">
                  <img src={test.image} alt="" />
                </div>
                <div className="names">
                  <p>{test.name}</p>
                  <p>{test.position}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Testimonials
