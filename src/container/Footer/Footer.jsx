// Importing necessary dependencies, icons, images, and styles
import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram, FiMapPin } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

// Functional component for Footer
const Footer = () => (
   // Main container for Footer section with specific styling and ID
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      {/* Container for contact information */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"><FiMapPin />&nbsp;Oyugis Town, Kenya</p>
        <p className="p__opensans">+254742299486</p>
      </div>

      {/* Container for logo and motto */}
      <div className="app__footer-links_logo">
        <img src={images.tasteharbor} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

       {/* Container for working hours */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    {/* Container for copyright */}
    <div className="footer__copyright">
      <p className="p__opensans">2024 TasteHarbor. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
