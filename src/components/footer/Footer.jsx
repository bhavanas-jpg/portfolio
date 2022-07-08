import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo' ></a>

     <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
      <a href="https://github.com/bhavanas-jpg"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/bhavana-s-38513a168/"><BsLinkedin /></a>
      <a href="https://twitter.com/Bhavana814"><IoLogoTwitter /></a>
     </div>
     <div className="footer__copyright">
     <p><span>© | Oshna |🤍</span></p>
     </div>
    </footer>
  )
}

export default Footer