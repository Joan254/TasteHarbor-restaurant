// Importing necessary dependencies, icons, components, images, and styles
import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

// Functional component for Gallery
const Gallery = () => {
  // Ref for scrolling container
  const scrollRef = React.useRef(null);

  // Function for scrolling images
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    // Main container for Gallery section with specific styling
    <div className="app__gallery flex__center">
      {/* Container for content */}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Discover the artistry of our culinary creations through a visual journey in our gallery.</p>
      </div>

      {/* Container for images */}
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {/* Mapping through images to render image cards */}
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        {/* Container for scroll arrows */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
