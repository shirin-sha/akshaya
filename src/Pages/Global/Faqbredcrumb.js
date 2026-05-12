import Link from "next/link"
import Faqbg from '../../assets/images/background/team-bg.jpg';

export default function Faqbredcrumb({ Title, Subtitle }) {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Faqbg .src})` }}
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