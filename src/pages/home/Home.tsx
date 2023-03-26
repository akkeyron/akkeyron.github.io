import './Home.css';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Navbar from '../../components/Navbar2/Navbar';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import {FC} from 'react';
import Footer from '../../components/Footer/Footer';


const Home:FC = () => {
  return (
    <>
      <Header />
      <About />
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home