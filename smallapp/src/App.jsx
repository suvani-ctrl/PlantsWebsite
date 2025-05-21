

import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

// ✅ Define the theme object


const App = () => {

  const theme = {
  colors: {
    primary: "#283730",    // Dark Olive or Taupe
    secondary: "#B5A27A",      // Warm Gold
    background: "#202625",     // Off-white / Cream
    accent: "#1C1C1C",         // Near-black rich detail
    text: "#2C2C2C",           // Deep Charcoal
    muted: "#C2B9A3",          // Muted Sand / Linen
  },
  fonts: {
    main: "'Garamond', serif",           // Classic elegance
    heading: "'Playfair Display', serif" // Decorative serif for titles
  },
  media: {
    mobile: "768px",
    tablet: "1024px"
  }
};

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />      
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
