import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const LOADER_DURATION_MS = 4000;

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'black',
  width: '100%',
  height: '100vh',
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) Aos.init({ duration: 1000 });
  }, [loading]);

  if (loading) {
    return (
      <div style={loaderStyle}>
        <HashLoader color="#4db5ff" size={80} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
