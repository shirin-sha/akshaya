import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Portfoliobred from "../../Global/Portfoliobred";
import Portfolio from '../../Portfolio/Portfolio/Portfolio';
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Portfoliobred Title="Portfolio" Subtitle="Portfolio" />
            <Portfolio />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}