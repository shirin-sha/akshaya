import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Servicebred from '../../Global/Servicebred';
import Servicesthree from "../Service1/Servicesthree";
import Testimonialone from "../Service1/Testimonialone";
import Pricingplanone from "../Service1/Pricingplanone";
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

export default function Main (){
        return(
            <>
                 <Preloader/>
                 <Headertwo/>
                 <Servicebred Title="Our Services 1" Subtitle="Our Services"/>
                 <Servicesthree/>
                 <Testimonialone/>
                 <Pricingplanone/>
                 <Ctaone/>
                 <Footertwo/>
                 <BackToTop/>
            </>
        )

}