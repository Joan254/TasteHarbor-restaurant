// Importing necessary dependencies and styles
import React, { useState } from 'react';

import './SpecialMenu.css';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

// Functional component for SpecialMenu
const SpecialMenu = () => {
  // State hook to manage the visibility of desserts
  const [showDesserts, setShowDesserts] = useState(false);

  // Function to toggle the visibility of desserts
  const toggleDesserts = () => {
    setShowDesserts(!showDesserts);
  };

  return (
    // Main container with specific styling and ID
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      {/* Container for menu items */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_appetizer  flex__center">
          <p className="app__specialMenu-menu_heading">
            {/* Conditional rendering based on the visibility of desserts */}
            {showDesserts ? 'Desserts' : 'Appetizers'}
          </p>
          <div className="app__specialMenu_menu_items">
            {/* Mapping through data to render menu items based on the visibility of desserts */}
            {showDesserts
              ? data.desserts.map((dessert, index) => (
                  <MenuItem
                    key={dessert.title + index}
                    title={dessert.title}
                    price={dessert.price}
                    tags={dessert.tags}
                  />
                ))
              : data.appetizers.map((appetizer, index) => (
                  <MenuItem
                    key={appetizer.title + index}
                    title={appetizer.title}
                    price={appetizer.price}
                    tags={appetizer.tags}
                  />
                ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_maincourse  flex__center">
          <p className="app__specialMenu-menu_heading">Main Courses</p>
          <div className="app__specialMenu_menu_items">
            {/* Mapping through data to render main course menu items */}
            {data.mainCourses.map((mainCourse, index) => (
              <MenuItem
                key={mainCourse.title + index}
                title={mainCourse.title}
                price={mainCourse.price}
                tags={mainCourse.tags}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Button to toggle visibility of desserts */}
      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={toggleDesserts}>
          {showDesserts ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
