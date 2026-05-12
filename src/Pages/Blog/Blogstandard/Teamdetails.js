import Link from 'next/link';
import Image from 'next/image';
import Teamdtlimg01 from '../../../assets/images/blog/blog-standard-image-1.jpg';
import Teamdtlimg02 from '../../../assets/images/blog/blog-standard-image-2.jpg';
import Teamdtlimg03 from '../../../assets/images/blog/blog-standard-image-3.jpg';
import Teamdtlimg04 from '../../../assets/images/blog/blog-standard-image-4.jpg';
import Teamdtlimg05 from '../../../assets/images/blog/blog-standard-image-5.jpg';
import Teamdtlimg06 from '../../../assets/images/blog/blog-standard-image-6.jpg';
import Teamdtlimg07 from '../../../assets/images/blog/blog-standard-image-7.jpg';

export default function Teamdetails() {
    return (
        <>
            <div className="blog-list-section">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-8">
                            <div className="blog-block">
                                <div className="blog-list-item">
                                    <div className="blog-image">
                                        <Link href="/Blogdetails">
                                            <Image
                                                src={Teamdtlimg01}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-item-tagline">
                                        <Link href="#">FIRST LOAN</Link>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p>
                                            <Link href="#">By Deni </Link>
                                        </p>
                                        <p>
                                            <Link href="#">On 29 Sup 2024</Link>
                                        </p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h3>
                                            <Link href="#">A Beginner’s Guide to Securing Your First Loan</Link>
                                        </h3>
                                        <p>
                                            Learn the essentials of obtaining your first loan, from
                                            understanding credit scores to choosing the right lender. This
                                            guide helps first-time borrowers make informed financial
                                            decisions.
                                        </p>
                                        <Link href="/Blogdetails" className="btn-link">
                                            <span>continue reading </span>
                                            <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="blog-list-item">
                                    <div className="blog-image">
                                        <Link href="/Blogdetails">
                                            <Image
                                                src={Teamdtlimg02}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-item-tagline">
                                        <Link href="#">CREDIT SCORE</Link>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p>
                                            <Link href="#">By Jhon</Link>
                                        </p>
                                        <p>
                                            <Link href="#">On 29 Sup 2024</Link>
                                        </p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h3>
                                            <Link href="#">
                                                How to Improve Your Credit Score Before Applying for a Loan
                                            </Link>
                                        </h3>
                                        <p>
                                            A good credit score is crucial for loan approval. Discover
                                            actionable steps to boost your credit, ensuring better loan
                                            terms and higher chances of approval.
                                        </p>
                                        <Link href="/Blogdetails" className="btn-link">
                                            <span>continue reading </span>
                                            <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="blog-list-item">
                                    <div className="blog-image">
                                        <Link href="/Blogdetails">
                                            <Image
                                                src={Teamdtlimg03}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-item-tagline">
                                        <Link href="#">LOAN</Link>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p>
                                            <Link href="#">By Elei</Link>
                                        </p>
                                        <p>
                                            <Link href="#">On 29 Sup 2024</Link>
                                        </p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h3>
                                            <Link href="#">5 Common Loan Application Mistakes to Avoid</Link>
                                        </h3>
                                        <p>
                                            Applying for a loan? Avoid these common mistakes that can lead
                                            to delays or rejections. Learn how to submit a flawless
                                            application for a smooth approval process.
                                        </p>
                                        <Link href="/Blogdetails" className="btn-link">
                                            <span>continue reading </span> <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-block">
                                <div className="blog-list-item">
                                    <div className="blog-image">
                                        <Link href="/Blogdetails">
                                            <Image
                                                src={Teamdtlimg04}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-item-tagline">
                                        <Link href="#"> INTEREST RATE</Link>
                                    </div>
                                    <div className="blog-item-meta">
                                        <p>
                                            <Link href="#">By Martin</Link>
                                        </p>
                                        <p>
                                            <Link href="#">On 29 Sup 2024</Link>
                                        </p>
                                    </div>
                                    <div className="blog-item-details">
                                        <h3>
                                            <Link href="#">
                                                The Benefits of Fixed vs. Variable Loan Interest Rates
                                            </Link>
                                        </h3>
                                        <p>
                                            Fixed and variable interest rates offer different advantages.
                                            Explore the pros and cons of each to determine which type best
                                            suits your financial situation and long-term goals.
                                        </p>
                                        <Link href="/Blogdetails" className="btn-link">
                                            <span>continue reading </span> <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-block mb-0">
                                <ul className="pagination">
                                    <li className="active">
                                        <Link href="#">1</Link>
                                    </li>
                                    <li>
                                        <Link href="#">2</Link>
                                    </li>
                                    <li>
                                        <Link href="#">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#">4</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-angles-right" />
                                        </Link>
                                    </li>
                                </ul>
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
                                            <Image className='img-fluid'
                                                src={Teamdtlimg05}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                            <div className="recent-blog-widget-item-title">
                                                <span>September 20, 2023</span>
                                                <Link href="/Blogdetails">
                                                    Securing Your Dream Home: A Complete Guide to Home{" "}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="recent-blog-widget-item">
                                            <Image
                                                src={Teamdtlimg06}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                            <div className="recent-blog-widget-item-title">
                                                <span>September 20, 2023</span>
                                                <Link href="/Blogdetails">
                                                    Fueling Business Growth: How to Choose the Right Business
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="recent-blog-widget-item">
                                            <Image
                                                src={Teamdtlimg07}
                                                alt="blog-image"
                                                layout='intrinsic'
                                            />
                                            <div className="recent-blog-widget-item-title">
                                                <span>September 20, 2023</span>
                                                <Link href="/Blogdetails">
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
                                            <Image src={Teamdtlimg04} alt="logo" layout='intrinsic'/>
                                            <h3>Advisory Specialists Premier Loan</h3>
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