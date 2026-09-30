import { aboutData } from "../components/about/about-us";
import AboutPage1 from "../components/about/Aboutpage";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";

export default function AboutPage() {


    return (
        <>
        
        
        <Navbar />
        <AboutPage1 data={aboutData}/>
        <Footer/>
        </>
    )
}