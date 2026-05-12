import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Careersbred from "../../Global/Careersbred";
import Applyloans from "../Applyloan/Applyloans";
import Footertwo from "../../Global/Footertwo";
import BackToTop from "../../Global/BackToTop";


export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Careersbred Title="Apply Now" Subtitle="Apply Now" />
            <Applyloans />
            <Footertwo />
            <BackToTop />
        </>
    )
}