import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbredcrumb from "../../Global/Faqbredcrumb";
import Team from "../Team/Team";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from "../../Global/BackToTop";

export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Faqbredcrumb Title="Team page" Subtitle="Team Details" />
            <Team />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}