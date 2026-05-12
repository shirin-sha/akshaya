import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetail from '../Bloggrid/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
export default function Main() {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Blogbred Title="Blog Grid 2 Columns" Subtitle="Blog Grid 2 Columns" />
            <Teamdetail />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}