import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Awards, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
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
