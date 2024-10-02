import './App.css';
import HeroSection from './section/HeroSection/HeroSection';
import AboutSection from './section/AboutSection/AboutSection';
import ServicesSection from './section/ServicesSection/ServicesSection';
import TechSection from './section/TechSection/TechSection';
import ProcessSection from './section/ProcessSection/ProcessSection';
import OptInSection from './section/OptInSection/OptInSection';
import FotterSection from './section/FooterSection/FotterSection';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <TechSection/>
        <ProcessSection/>
        <OptInSection/>
        <FotterSection/>
      </div>
    </div>
  );
}

export default App;
