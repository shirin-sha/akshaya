import Link from 'next/link';
import Careersimg from '../../assets/images/background/apply-now-bg.jpg';

export default function Careersbred ({Title,Subtitle}) {
    return(
        <>
             <div
            className="inner-page-hero"
            style={{ backgroundImage: `url(${Careersimg .src})` }}
        >
            <div className="container">
                <div className="hero-heading-title">
                    <h2>{Title}</h2>
                </div>
                <ul className="bradcrumb">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#">Page </Link>
                    </li>
                    <li>
                        <Link href="#">{Subtitle}</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}