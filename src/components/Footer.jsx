import "../styles/components/_footer.scss"
import logo from "../assets/logo/flyscape.png"

import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className="footer-container"
    
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    >
      <div className="footer-wrapper">
        <div className="first-box">
          <img src={logo} alt="" />
          <p>Discover the world one adventure at a time. Life is short, book the trip!</p>
          <div className="social-icons">
            <CiTwitter className="icons"/>
            <RiFacebookCircleLine className="icons"/>
            <FaInstagram className="icons"/>
            <FaTiktok className="icons"/>
          </div>
        </div>
        <div className="second-box">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Tour Guide</a>
          <a href="#">Packages</a>
          <a href="#">Contact</a>
        </div>
        <div className="third-box">
          <h4>Resources</h4>
          <a href="#">Free eBooks</a>
          <a href="#">Tutorials</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
        <div className="fourth-box">
          <h4>Extra Links</h4>
          <a href="#">Customer Service</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 FLYSCAPES | All Rights Reserved</p>
      </div>
    </motion.div>
  )
}

export default Footer
