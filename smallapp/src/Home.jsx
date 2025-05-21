import React from 'react'
import Hero from './components/Hero'


const Home = () => {


  const data={
    name: "Preety Plantes",
    image: "./images/Hiro.png"
  }
  return (
        <Hero {...data} />
  )
}

export default Home