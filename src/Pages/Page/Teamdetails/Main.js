import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbredcrumb from "../../Global/Faqbredcrumb";
import Teamdetails from "../Teamdetails/Teamdetails";
import Teamone from "../../Home/Homeone/Teamone";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from "../../Global/BackToTop";


export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Faqbredcrumb Title="Brian Hollifield" Subtitle="Team" />
            <Teamdetails />
            <Teamone />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}