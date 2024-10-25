import "../styles/components/_logo.scss"

import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import airbnb from "../assets/companies/airbnb.png";
import booking from "../assets/companies/booking.png"
import expedia from "../assets/companies/expedia.png"
import trivago from "../assets/companies/trivago.png"



const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-section">
        <div className="logo-socials">
          <p>Follow</p>
          <CiTwitter className="social-icons"/>
          <RiFacebookCircleLine className="social-icons"/>
          <FaInstagram className="social-icons"/>
          <FaTiktok className="social-icons"/>
        </div>
        <div className="logo-companies">
          <img src={airbnb} alt=""  className="company-icons"/>
          <img src={booking} alt="" className="company-icons"/>
          <img src={expedia} alt="" className="company-icons"/>
          <img src={trivago} alt="" className="company-icons"/>
        </div>
      </div>
    </div>
  )
}

export default Logo
