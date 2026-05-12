import Link from 'next/link';
import Portfoliobg from '../../assets/images/background/protfolio-bg.jpg';

export default function Portfoliobred({Title,Subtitle}) {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Portfoliobg .src})` }}
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
                            <Link href="#">{Subtitle}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}