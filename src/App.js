import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

import './styles/globals.css';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
    return (
  <ThemeProvider>   
       <LanguageProvider>
            <Navbar />
            <main>
               <Hero />
               <About />
               <Skills />
               <Projects />
               <Contact />
               <Footer />
            </main>
       </LanguageProvider>
  </ThemeProvider>
  );
}

export default App;
