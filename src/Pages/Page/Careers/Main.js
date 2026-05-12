import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Careersbred from "../../Global/Careersbred";
import Careersloan from "../Careers/Careersloan";
import Careerscta from "../Careers/Careerscta";
import Footertwo from "../../Global/Footertwo";
import BackToTop from "../../Global/BackToTop";


export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Careersbred Title="Careers" Subtitle="Careers" />
            <Careersloan />
            <Careerscta />
            <Footertwo />
            <BackToTop />
        </>
    )
}