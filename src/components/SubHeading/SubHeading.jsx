// Importing React library and images from the constants module
import React from 'react';

import { images } from '../../constants';

// Functional component for SubHeading
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
