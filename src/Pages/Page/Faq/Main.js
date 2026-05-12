import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbredcrumb from "../../Global/Faqbredcrumb";
import Teamdetails from "../Faq/Teamdetails";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from "../../Global/BackToTop";


export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Faqbredcrumb Title="FAQS" Subtitle="FAQS" />
            <Teamdetails />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}