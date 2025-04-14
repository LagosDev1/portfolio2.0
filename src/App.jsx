import React, {useState, useEffect} from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Tech from './components/tech/Tech';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import HashLoader from "react-spinners/HashLoader";




const App = () => {
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout (()=>{
      setLoading(false)
    }, 4000)

  }, [])
  return (
    <div>
      {loading ? (
         <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            width:'100%',
            height: '100vh',
          }}

  
        >
        
       <HashLoader
        color={"#4db5ff"}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Tech />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
