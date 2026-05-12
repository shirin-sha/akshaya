import Link from "next/link"
import Servbg from '../../../assets/images/background/services-deatils-bg.jpg';

export default function Servicedtlbred(){
    return(
        <>
            <div
            className="inner-page-hero"
            style={{
                backgroundImage: `url(${Servbg.src})`
            }}
        >
            <div className="container">
                <div className="hero-heading-title">
                    <h2>Make Your Homeownership Dream a Reality</h2>
                </div>
                <ul className="bradcrumb">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/Services1">Services </Link>
                    </li>
                    <li>
                        <Link href="#">Mortgage Loans</Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}