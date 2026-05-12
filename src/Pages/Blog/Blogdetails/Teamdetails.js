import Link from 'next/link';
import Image from 'next/image';
import Teamsimg01 from '../../../assets/images/blog/single-blog-image-1.jpg';
import Teamsimg02 from '../../../assets/images/blog/blog-standard-image-5.jpg';
import Teamsimg03 from '../../../assets/images/blog/single-blog-image-2.jpg';
import Teamsimg04 from '../../../assets/images/blog/single-blog-image-3.jpg';
import Teamsimg05 from '../../../assets/images/blog/single-blog-image-3.png';
import Teamsimg06 from '../../../assets/images/blog/single-blog-image-4.png';
import Teamsimg07 from '../../../assets/images/blog/single-blog-image-5.png';
import Teamsimg08 from '../../../assets/images/blog/blog-standard-image-6.jpg';
import Teamsimg09 from '../../../assets/images/blog/blog-standard-image-7.jpg';
import Teamsimg10 from '../../../assets/images/favicon-2.png';
export default function Teamdetails(){
    return(
        <>
            <div className="blog-list-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-block">
                            <div className="single-blog-image">
                                <Image
                                    src={Teamsimg01}
                                    alt="blog-image"
                                />
                            </div>
                            <div className="blog-item-meta">
                                <p>
                                    <Link href="#">By Deni</Link>
                                </p>
                                <p>
                                    <Link href="#">On 25 Dec 2024</Link>
                                </p>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-details">
                                <h3>Achieving Financial Freedom: Loanlift Proven Strategies</h3>
                                <p>
                                    At loanlift, we are dedicated to helping our clients reach this
                                    milestone through our proven strategies and tailored financial
                                    solutions. Achieving financial freedom involves more than just
                                    managing your finances; it requires a comprehensive approach that
                                    addresses your unique needs and goals. In this blog, we’ll explore
                                    how loanlift can guide you toward achieving financial freedom with
                                    practical steps and effective strategies.
                                </p>
                                <p>
                                    We work closely with you to develop a comprehensive financial plan
                                    that aligns with your objectives. This includes budgeting,
                                    forecasting, and identifying key financial metrics to track
                                    progress. By setting clear goals and creating a strategic plan,
                                    you can make informed decisions that drive financial growth. Our
                                    team at loanlift is here to support you every step of the way,
                                    helping you navigate your path to financial freedom with
                                    confidence and clarity.
                                </p>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-image-two">
                                <div>
                                    <Image
                                        src={Teamsimg03}
                                        alt="blog-image"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={Teamsimg04}
                                        alt="blog-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-details">
                                <h3>The Impact of Credit Scores on Your Loan Application</h3>
                                <p>
                                    We work closely with you to develop a comprehensive financial plan
                                    that aligns with your objectives. This includes budgeting,
                                    forecasting, and identifying key financial metrics to track
                                    progress. By setting clear goals and creating a strategic plan,
                                    you can make informed decisions that drive financial growth. Our
                                    team at loanlift is here to support you every step of the way,
                                    helping you navigate your path to financial freedom with
                                    confidence and clarity.
                                </p>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-quoght">
                                <p>
                                    A dedicated team of 30 professionals highlights the significant
                                    effort is putting innovative lending solutions.these shows that
                                    LoanLift is fully committed to making it a reality.
                                </p>
                                <div className="single-blog-quoght-author">
                                    <span>Johnny M. Martin</span>
                                    <i className="flaticon-quote" />
                                </div>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-link">
                                <ul className="single-blog-tag">
                                    <li>Tags :</li>
                                    <li>
                                        <Link href="#">Loan</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Money</Link>
                                    </li>
                                    <li>
                                        <Link href="#">2024</Link>
                                    </li>
                                </ul>
                                <ul className="single-blog-social-media">
                                    <li>Share :</li>
                                    <li>
                                        <Link href="https://www.facebook.com/">
                                            <i className="fa-brands fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://x.com/">
                                            <i className="fa-brands fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://in.linkedin.com/">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="single-blog-pagination">
                                <div className="single-blog-pagination-pre">
                                    <Link href="#" className="btn-link-two">
                                        <i className="fa-solid fa-arrow-left" />
                                    </Link>
                                    <h5>
                                        <Link className="single-blog-pagination-link" href="#">
                                            How to Use Business <br /> Loans to Expand Your
                                        </Link>
                                    </h5>
                                </div>
                                <div className="single-blog-pagination-next">
                                    <h5>
                                        <Link className="single-blog-pagination-link" href="#">
                                            Innovative Financing <br /> Solutions for Startups
                                        </Link>
                                    </h5>
                                    <Link href="#" className="btn-link-two">
                                        <i className="fa-solid fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="blog-block">
                            <div className="comment-widget">
                                <h3>Comments</h3>
                                <div className="comment-widget-item">
                                    <Image
                                        src={Teamsimg05}
                                        alt="comment-image"
                                    />
                                    <div className="comment-widget-item-details">
                                        <div className="comment-meta">
                                            <p>William. L</p>
                                            <span>August 24, 2024</span>
                                        </div>
                                        <div className="comment-text">
                                            <p>
                                                Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse molestiae consequatur qui dolorem eum fugiat
                                                voluptas
                                            </p>
                                        </div>
                                        <Link href="#" className="comment-reply">
                                            Reply <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="comment-widget-item reply">
                                    <Image
                                        src={Teamsimg06}
                                        alt="comment-image"
                                    />
                                    <div className="comment-widget-item-details">
                                        <div className="comment-meta">
                                            <p>Alina. R</p>
                                            <span>August 28, 2024</span>
                                        </div>
                                        <div className="comment-text">
                                            <p>
                                                Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse molestiae consequatur qui dolorem eum fugiat
                                                voluptas
                                            </p>
                                        </div>
                                        <Link href="#" className="comment-reply">
                                            Reply <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="comment-widget-item">
                                    <Image
                                        src={Teamsimg07}
                                        alt="comment-image"
                                    />
                                    <div className="comment-widget-item-details">
                                        <div className="comment-meta">
                                            <p>Jackson. K</p>
                                            <span>September 05, 2024</span>
                                        </div>
                                        <div className="comment-text">
                                            <p>
                                                Quis autem vel eum iure reprehenderit qui in ea voluptate
                                                velit esse molestiae consequatur qui dolorem eum fugiat
                                                voluptas
                                            </p>
                                        </div>
                                        <Link href="#" className="comment-reply">
                                            Reply <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-form-widget">
                            <h3>Leave A Reply</h3>
                            <form action="#">
                                <div className="comment-form-group-one">
                                    <div className="comment-form-group-one-inner">
                                        <label>
                                            <i className="fa-regular fa-user" />
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="comment-form-group-one-inner">
                                        <label>
                                            <i className="fa-solid fa-phone" />
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Phone"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="comment-form-group-one">
                                    <label>
                                        <i className="fa-regular fa-envelope" />
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        required=""
                                    />
                                </div>
                                <div className="comment-form-group-one">
                                    <label>
                                        <i className="fa-solid fa-message" />
                                    </label>
                                    <textarea
                                        name="comment"
                                        rows={4}
                                        className="form-control"
                                        placeholder="Comments"
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="submit" className="btn btn-secondary">
                                    Leave A comment
                                    <i className="flaticon-next" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-sidebar stcky">
                            <div className="blog-block">
                                <div className="blog-serch-widget">
                                    <form action="#">
                                        <input type="search" placeholder="Search " />
                                        <button type="submit">
                                            <i className="flaticon-search-interface-symbol" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="category-widget">
                                    <h4>Category</h4>
                                    <ul>
                                        <li className="active">
                                            <Link href="#">Home Loan</Link> <span>(05)</span>
                                        </li>
                                        <li>
                                            <Link href="#">Wedding Loan</Link> <span>(09)</span>
                                        </li>
                                        <li>
                                            <Link href="#">Mortgage Loan</Link> <span>(04)</span>
                                        </li>
                                        <li>
                                            <Link href="#">Business Loan</Link> <span>(06)</span>
                                        </li>
                                        <li>
                                            <Link href="#">Education loan</Link> <span>(08)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="recent-blog-widget">
                                    <h4>Recent News</h4>
                                    <div className="recent-blog-widget-item">
                                        <Image
                                            src={Teamsimg02}
                                            alt="blog-image"
                                        />
                                        <div className="recent-blog-widget-item-title">
                                            <span>September 20, 2023</span>
                                            <Link href="#">
                                                Securing Your Dream Home: A Complete Guide to Home{" "}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="recent-blog-widget-item">
                                        <Image
                                            src={Teamsimg08}
                                            alt="blog-image"
                                        />
                                        <div className="recent-blog-widget-item-title">
                                            <span>September 20, 2023</span>
                                            <Link href="#">
                                                Fueling Business Growth: How to Choose the Right Business{" "}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="recent-blog-widget-item">
                                        <Image
                                            src={Teamsimg09}
                                            alt="blog-image"
                                        />
                                        <div className="recent-blog-widget-item-title">
                                            <span>September 20, 2023</span>
                                            <Link href="#">
                                                Your Dream Wedding, Within reach Exploring Wedding Loan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="tag-widget">
                                    <h4>Popular Tags</h4>
                                    <ul>
                                        <li className="active">
                                            <Link href="#">Finance</Link>
                                        </li>
                                        <li>
                                            <Link href="#">loanlift</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Investors</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Investors</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Credit Score</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog-block mb-0">
                                <div className="bolg-cta-widget">
                                    <div className="bolg-cta-widget-inner">
                                        <Image src={Teamsimg10} alt="logo" />
                                        <h3>Advisory Specialists Premier Loan </h3>
                                        <p className="lead">
                                            <Link href="tel:+020-098-45611">
                                                <i className="flaticon-phone" /> +020-098-456 11
                                            </Link>
                                        </p>
                                        <Link href="/Contactus" className="btn btn-primary">
                                            Get Started <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}