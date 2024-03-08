import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to TasteHarbor" />
      <h1 className="app__header-h1">Your number one online restaurant</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At TasteHarbor, we pride ourselves on offering a diverse and mouthwatering menu that caters to every palate. Our chefs craft each dish with passion and creativity, ensuring a delightful gastronomic experience for our valued customers. </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
  );

export default Header;
