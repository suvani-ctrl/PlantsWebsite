import React from 'react';
import Hero from './components/Hero';

const About = () => {
  const data = {
    name: "Preety Plants",
    image: "./images/about.png"
  };

  return (
    <>
      <Hero {...data} />
      {/* i learnt props in react js here  */}
    </>
  );
};

export default About;
