// Importing necessary dependencies and styles
import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

// Functional component for AboutUs
const AboutUs = () => (
  // Main container for AboutUs section with specific styling and ID
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    {/* Container for AboutUs content */}
    <div className="app__aboutus-content flex__center">
      {/* Container for About section */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">TasteHarbor is more than just an online restaurant; it's a celebration of flavors, a fusion of traditional and contemporary culinary artistry. Our journey began with the dream of crafting a dining experience that transcends the ordinary, and today, TasteHarbor stands as a testament to that vision. Led by our dedicated team, we curate a menu that takes you on a gastronomic journey, offering a diverse array of dishes inspired by global cuisines. With a commitment to quality, sustainability, and your satisfaction, TasteHarbor invites you to savor every bite, relish each moment, and join us in creating a tapestry of culinary memories. Thank you for being part of our flavorful story. Cheers to a journey filled with taste and harmony!</p>
      </div>

      {/* Container for History section */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">TasteHarbor's story is a journey of passion, dedication, and a deep love for the culinary arts. Established in 2017 by Joan Achieng, our roots trace back to a small kitchen with big dreams. What started as a humble endeavor to share exceptional flavors has blossomed into a culinary destination that continues to redefine the dining experience. Over the years, TasteHarbor has evolved, always staying true to our commitment to quality, innovation, and the joy of bringing people together through food. We've celebrated milestones, embraced challenges, and grown alongside our community of food enthusiasts. Today, TasteHarbor stands as a symbol of culinary excellence, inviting you to be a part of our rich history with every dish we serve. Join us in revisiting the moments that shaped TasteHarbor and look forward to many more chapters of delicious stories to come.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
