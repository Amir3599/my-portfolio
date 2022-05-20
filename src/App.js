import React from 'react'

import { About, Footer, Header, Skills, Work, Worksamples } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Work />
      <Skills />
      <Worksamples />
      <Footer />
    </div>
  );
}

export default App;
