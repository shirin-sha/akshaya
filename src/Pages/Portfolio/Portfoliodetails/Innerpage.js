import Link from "next/link"

export default function Innerpage() {
    return (
        <>
            <div className="inner-page-hero">
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
