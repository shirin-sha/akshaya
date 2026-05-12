
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetails from "../Blogdetails/Teamdetails";
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Blogbred Title="A Beginner’s Guide to Securing Your First Loan" Subtitle="Blog Details" />
            <Teamdetails />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}