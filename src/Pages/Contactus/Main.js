import Preloader from "../Global/Preloader";
import Headertwo from "../Global/Headertwo";
import Innerpage from '../Contactus/Innerpage';
import Aboutthree from '../Contactus/Aboutthree';
import Contact from '../Contactus/Contact';
import Footertwo from "../Global/Footertwo";
import BackToTop from '../Global/BackToTop';
export default function Main(){
    return(
        <>
          <Preloader />
          <Headertwo />
          <Innerpage/>
          <Aboutthree/>
          <Contact/>
          <Footertwo />
          <BackToTop/>
        </>
    )
}