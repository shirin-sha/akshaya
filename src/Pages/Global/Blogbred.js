import Link from 'next/link';
import Blog01 from '../../assets/images/background/blog-hero-bg.jpg';

export default function Blogbred({Title,Subtitle}) {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Blog01 .src})` }}
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
                            <Link href="/Blogstandard">Blog </Link>
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