// Importing necessary dependencies, components, and styles
import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Awards, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

// Functional component for the root App component
const App = () => (
  // Main container for the entire application
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Awards />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
