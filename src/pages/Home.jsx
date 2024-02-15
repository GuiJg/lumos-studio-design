// import BannerSection from '../sections/BannerSection.js';
import AboutSection from '../sections/AboutSection.js';
import ServicesSection from '../sections/ServicesSection.js';
import ProjectSection from '../sections/ProjectSection.js';
import ContactSection from '../sections/ContactSection.js';
import Footer from '../sections/footer.js';
import '../style.css';

function Home() {
    return (
        <div className="App">
            {/* <BannerSection/> */}
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/> 
            <ContactSection/>
            <Footer/> 
        </div>
    );
}

export default Home; 