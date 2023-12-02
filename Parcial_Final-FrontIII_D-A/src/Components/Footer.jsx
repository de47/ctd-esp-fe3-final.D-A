import React from 'react'
import { SiFacebook } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SlSocialSkype } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        <a href="https://web.facebook.com/"><SiFacebook /></a>
        <a href="https://www.skype.com/es/"><SlSocialSkype /></a>
        <a href="https://web.facebook.com/"><FaFacebookMessenger /></a>
        <a href="https://www.instagram.com/"> <BsInstagram /></a>
        
        
       

    </footer>
  )
}

export default Footer
