import "../styles/components/_ticket.scss";
import Title from "./reusables/Title";
import imagetwo from "../assets/places_img/2.jpg"
import imagethree from "../assets/places_img/3.jpg"
import imagefour from "../assets/places_img/4.jpg"


import { IoLocationOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";

/* eslint-disable react/prop-types*/ 

const Ticket = () => {

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

  // USESTATE PARTS

  const [activeCardIndex, setActiveCardIndex] = useState(1); // Set the second card (index 1) as active initially

  const handleCardClick = (index) => {
    setActiveCardIndex(index); // Set the clicked card as active
  };

  return (
    <div>
      <Title 
        title="Journey To The Skies Made Simple!"
        descriptions="Travelling Is A Wonderful way to Explore new places, Learn about different cultures, and gain unique experiences"
      />
      <motion.div className="ticket-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      
      >
        <div className="card-container">
        <TicketCards 
          icon={<IoLocationOutline size={30} color="blue"/>}
          bg={imagetwo}
          title="Find Your Destination"
          descriptions="travelling is a wonderful way to explore new places. learn about different cultures, and gain unique experiences"
          isActive={activeCardIndex === 0}
          onCardClick={() => handleCardClick(0)}
        />
        </div>
        <div className="card-container">
        <TicketCards 
          icon={<IoTicketOutline
            size={30} color="blue"/>}
          bg={imagethree}
          title="Book A Ticket"
          descriptions="travelling is a wonderful way to explore new places. learn about different cultures, and gain unique experiences"
          isActive={activeCardIndex === 1}  // Check if this card is active (second card is true by default)
          onCardClick={() => handleCardClick(1)}
        />
        </div>
        <div className="card-container">
        <TicketCards 
          icon={<MdOutlinePayment size={30} color="blue"/>}
          bg={imagefour}
          title="Pay & Start Journey"
          descriptions="travelling is a wonderful way to explore new places. learn about different cultures, and gain unique experiences"
          isActive={activeCardIndex === 2}  // Check if this card is active
          onCardClick={() => handleCardClick(2)}
        />
        </div>
      </motion.div>
    </div>
  )
}


const TicketCards = ({ icon, title, descriptions, bg, isActive, onCardClick }) => {

  return (
    <AnimatePresence>
    <motion.div 
      className={`${isActive ? "card-up" : "cards"}`}  // Apply class based on isActive prop
      onClick={onCardClick}

      animate={{ y: isActive ? 10 : 0, opacity: 1 }}
      transition={{ duration: 0.5}}
    >
      <div className="icon">{icon}</div>
      <div className="cards-text">
        <span>{title}</span>
        <p>{descriptions}</p>
        <a href="#">LEARN MORE ...</a>
      </div>
      <img src={bg} alt="" />
    </motion.div>
    </AnimatePresence>
  )
}

export default Ticket
