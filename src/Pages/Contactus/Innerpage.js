import Link from 'next/link';
import Bgimg from '../../assets/images/background/contact-bg.jpg';
export default function Innerpage(){
    return(
        <>
             <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Bgimg.src})` }}
            >
                <div className="container">
                    <div className="hero-heading-title">
                        <h2>Contact</h2>
                    </div>
                    <ul className="bradcrumb">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#">Page</Link>
                        </li>
                        <li>
                            <Link href="#">Contacts Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}