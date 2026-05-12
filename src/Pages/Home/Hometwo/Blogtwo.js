import Link from "next/link"
import Image from "next/image";
import Blogimg01 from '../../../assets/images/shape/blog-two-shape-1.png';
import Blogimg02 from '../../../assets/images/shape/blog-two-shape-2.png';
import Blogimg03 from '../../../assets/images/blog/blog-two-1.jpg';
import Blogimg04 from '../../../assets/images/blog/blog-two-2.jpg';
import Blogimg05 from '../../../assets/images/blog/blog-two-3.jpg';

export default function Blogtwo() {
    return (
        <>
            <div className="blog-two">
                <div className="blog-two-shape-1">
                    <Image src={Blogimg01} alt="shape" layout='intrinsic'/>
                </div>
                <div className="blog-two-shape-2">
                    <Image src={Blogimg02} alt="shape" layout='intrinsic'/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    🤝 BLOG
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Recent blog: insights, updates, and tips for your financial journey
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-two-box">
                                <Link href="/Blogstandard" className="blog-two-image">
                                    <Image src={Blogimg03} alt="blog-img" layout='intrinsic'/>
                                </Link>
                                <div className="blog-two-details">
                                    <div className="blog-two-meta">
                                        <Link href="#" className="tagline">
                                            Loan
                                        </Link>
                                        <span>
                                            <Link href="#">10 Jun 2024</Link>
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/Blogstandard">
                                            Fuel your business growth with loanlift’s tailored financing
                                            solutions.
                                        </Link>
                                    </h5>
                                    <p>
                                        Explore how Loanlift tailored financial solutions help small
                                        businesses thrive. Learn about strategies to maximize.
                                    </p>
                                    <Link href="/Blogdetails" className="btn-link">
                                        <span>Read More</span>
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-two-box">
                                <Link href="/Blogstandard" className="blog-two-image">
                                    <Image src={Blogimg04} alt="blog-img" layout='intrinsic'/>
                                </Link>
                                <div className="blog-two-details">
                                    <div className="blog-two-meta">
                                        <Link href="#" className="tagline">
                                            Funding
                                        </Link>
                                        <span>
                                            <Link href="#">06 March 2024</Link>
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/Blogstandard">
                                            Loanlift with empowers small business success
                                        </Link>
                                    </h5>
                                    <p>
                                        Discover the ways Loanlift empowers small businesses to unlock
                                        their growth potential. Read about our.
                                    </p>
                                    <Link href="/Blogdetails" className="btn-link">
                                        <span>Read More</span>
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-two-box">
                                <Link href="/Blogstandard" className="blog-two-image">
                                    <Image src={Blogimg05} alt="blog-img" layout='intrinsic'/>
                                </Link>
                                <div className="blog-two-details">
                                    <div className="blog-two-meta">
                                        <Link href="#" className="tagline">
                                            Financial
                                        </Link>
                                        <span>
                                            <Link href="#">29 Sup 2024</Link>
                                        </span>
                                    </div>
                                    <h5>
                                        <Link href="/Blogstandard">
                                            Fast-Track financial goals with quick approvals
                                        </Link>
                                    </h5>
                                    <p>
                                        Learn how Loanlift quick approval process can fast-track your
                                        financial goals. See how our efficient approach.
                                    </p>
                                    <Link href="/Blogdetails" className="btn-link">
                                        <span>Read More</span>
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}