import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Servicebred from '../../Global/Servicebred';
import Abouttwo from "../Service2/Abouttwo";
import Servicestwo from '../../Home/Hometwo/Servicestwo';
import Testimonialone from '../../service/Service1/Testimonialone';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
export default function Main(){
    return(
        <> 
            <Preloader/>
            <Headertwo/>
            <Servicebred Title="Our Services 2" Subtitle="Our Services 2"/>
            <Abouttwo/>
            <Servicestwo/>
            <Testimonialone/>
            <Ctaone/>
            <Footertwo/>
            <BackToTop/>
        </>
    )
}