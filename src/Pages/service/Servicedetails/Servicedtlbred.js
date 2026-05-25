import Link from "next/link"

export default function Servicedtlbred(){
    return(
        <>
            <div className="inner-page-hero">
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
