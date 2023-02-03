import { useState } from 'react';
import LadingSection from './components/LadingSection';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <LadingSection image="/assets/hand2.png" />
    </>
  );
}

export default App;
