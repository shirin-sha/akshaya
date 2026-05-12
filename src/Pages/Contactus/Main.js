import Preloader from "../Global/Preloader";
import Headerone from "../Home/Homeone/Headerone";
import Innerpage from '../Contactus/Innerpage';
import Aboutthree from '../Contactus/Aboutthree';
import Contact from '../Contactus/Contact';
import Footer from "../Global/Footer";
import BackToTop from '../Global/BackToTop';
export default function Main(){
    return(
        <>
          <Preloader />
          <Headerone />
          <Innerpage/>
          <Aboutthree/>
          <Contact/>
          <Footer />
          <BackToTop/>
        </>
    )
}