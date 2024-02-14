import NavBar from './Sections/Navbar.jsx'; 
import Header from './Sections/Header.jsx'; 
import BannerSection from './Sections/BannerSection.js';
import AboutSection from './Sections/AboutSection.js';
import ServicesSection from './Sections/ServicesSection.js';
import ProjectSection from './Sections/ProjectSection.js';
import ContactSection from './Sections/ContactSection.js';
import Footer from './Sections/footer.js';
import './style.css';



function Home() {
    return (
        <div className="App">
            <NavBar/> 
            <Header/>
            <BannerSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectSection/> 
            <ContactSection/>
            <Footer/> 
        </div>
    );
}

export default Home;
