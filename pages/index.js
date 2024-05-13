import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import AboutUs from '../components/AboutUs';
import CompanyLogos from '../components/CompanyLogos';
import Brotherhood from '../components/Brotherhood';
import ApplyNow from '../components/ApplyNow';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroBanner />
      <CompanyLogos />
      <AboutUs /> 
      <Brotherhood /> 
      <ApplyNow />  
      <Footer /> 
      {/* Your section content will go here */}
    </div>
  );
}