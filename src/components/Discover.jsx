import "../styles/components/_discover.scss"
import Title from "../components/reusables/Title"
import DiscoverInfos from "./reusables/DiscoverInfos"

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Discover = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.9, // Trigger animation when 20% of the component is visible
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
        title="Discover the World From Above"
        descriptions="Experience breathtaking views and new perspectives by exploring the world from above."
        />
        <motion.div className="cards-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        >
          {DiscoverInfos.map((card, index)=> {
            return (
              <div key={index} className="cards-box">
                <span>{card.icon}</span>
                <p>{card.title}</p>
                <p>{card.descriptions}</p>
              </div>
            )
          })}
        </motion.div>
    </div>
  )
}

export default Discover
