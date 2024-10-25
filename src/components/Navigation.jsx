import "../styles/components/_navigation.scss";
import logo from "../assets/Logo/flyscape.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import { motion } from "framer-motion";

// MAIN FUNCTIONS

const Navigation = () => {

  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  }


  return (
    <div className="nav-container">
      <div className="nav-section">
        <img src={logo} alt="logo" className="nav-logo"/>
        <div className="nav-menu">
          <a href="#" className="nav-list">About</a>
          <a href="#" className="nav-list">Tour</a>
          <a href="#" className="nav-list">Package</a>
          <a href="#" className="nav-list">Contact</a>
        </div>
        
        <div className="nav-btn-box">
          <motion.button className="nav-btn"
            whileHover={{scale: 1.02}}
          >Book Trip</motion.button>
        </div>

        <a href="#" className="nav-burger" onClick={toggleMenu}>
          {menu ? <RxHamburgerMenu className="nav-burger-icon"/> : <AiOutlineClose className="nav-burger-icon"/>}
        </a>
      </div>

        {!menu && <div className="mobile-nav">
          <MobileNav />
        </div>}
    </div>
  )
}

// OTHER FUNCTIONS

const MobileNav = () => {

  return(
    <div className="mobile-nav-menu">
      <a href="#" className="mobile-nav-list">About</a>
      <a href="#" className="mobile-nav-list">Tour</a>
      <a href="#" className="mobile-nav-list">Package</a>
      <a href="#" className="mobile-nav-list">Contact</a>
    </div>
  )
}

export default Navigation
