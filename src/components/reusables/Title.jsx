import "../../styles/components/_titles.scss"

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* eslint-disable react/prop-types */
const Title = ({ title, descriptions}) => {

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
    <motion.div className="title-container"

    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}>
      <h2>{title}</h2>
      <p>{descriptions}</p>
    </motion.div>
  )
}

export default Title
