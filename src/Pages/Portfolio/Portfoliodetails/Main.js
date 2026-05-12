import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Innerpage from "../Portfoliodetails/Innerpage";
import Details from "../Portfoliodetails/Details";
import Portfolio from "../Portfoliodetails/Portfolio"
import Ctaone from "../../Global/Ctaone";
 import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
export default function Main() {
    return (
        <>

            <Preloader />
            <Headertwo />
            <Innerpage />
            <Details />
            <Portfolio />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}