import Link from 'next/link';

export default function Innerpage(){
    return(
        <>
             <div className="inner-page-hero">
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
