import Link from "next/link"
import Bgimg from '../../../assets/images/background/portfolio-details-bg.jpg';
export default function Innerpage() {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{
                    backgroundImage: `url(${Bgimg.src})`
                }}
            >
                <div className="container">
                    <div className="hero-heading-title">
                        <h2>Simplified Wedding Loan Process</h2>
                    </div>
                    <ul className="bradcrumb">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/Portfolio">Portfolio </Link>
                        </li>
                        <li>
                            <Link href="#">Simplified Wedding loan Process</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}