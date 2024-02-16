import BannerSection from '../layouts/BannerSection.js';
import AboutSection from '../layouts/AboutSection.js';
import ServicesSection from '../layouts/ServicesSection.js';
import ProjectSection from '../layouts/ProjectSection.js';
import ContactSection from '../layouts/ContactSection.js';
import '../../style.css';

function Home() {
    return (
        <div className="App">
            <BannerSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/> 
            <ContactSection/>
        </div>
    );
}

export default Home; 