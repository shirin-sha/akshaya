import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetails from '../Blogstandard/Teamdetails';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';



export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Blogbred Title="Blog Standard" Subtitle="Blog Standard" />
            <Teamdetails />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}