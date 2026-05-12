
import Link from 'next/link';
import Image from 'next/image';
import Footerlogo from '../../assets/images/Footer_logo.svg';

export default function Footer() {
    return (
        <>
            <footer className="footer-one">
                <div className="container">
                    <div className="footer-main-one">
                        <div className="footer-one-inner">
                            <div className="row gutter-y-30">
                                <div className="col-xl-3 col-lg-4 col-md-6 footer-about">
                                    <div className="footer-one-about">
                                        <Link href="#">
                                            <Image src={Footerlogo} alt="footer-logo" layout='intrinsic'/>
                                        </Link>
                                    </div>
                                    <div className="footer-one-about-details">
                                        <p>
                                            Contact us loanlift and collaborate with us for making you Big
                                            dream business with our best loan services
                                        </p>
                                    </div>
                                    <div className="footer-one-about-contact">
                                        <h4>Contact us</h4>
                                        <ul>
                                            <li>
                                                <Link href="mailto:Loanlift@gmail.com">
                                                    <i className="flaticon-envelope" />
                                                    help@company.com
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="tel:+020.098.45611">
                                                    <i className="flaticon-phone" />
                                                    +1 20.098.456 11
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-one-link">
                                        <h3>Services</h3>
                                        <ul>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Servicedetails">Personal Loans</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Servicedetails">Business Loans</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="Servicedetails">Mortgage Loans</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Servicedetails">Emergency Loans</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Servicedetails">Student Loans</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Servicedetails">Small Business Loans</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div className="footer-one-link m-0">
                                        <h3>Page</h3>
                                        <ul>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Aboutus">About Us </Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Faq">FAQS</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Careers">Careers </Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Applyloan">Apply a Loan </Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Contactus">Contact Us </Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Team">Meet The Team </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 ">
                                    <div className="footer-One-subscribe">
                                        <h3>Subscribe</h3>
                                        <p>
                                            Stay up-to-date with the latest trends in digital marketing and
                                            receive exclusive tips and insights by subscribing to our
                                            newsletter.
                                        </p>
                                        <form className="footer-One-subscribe-form" action="#">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email Address"
                                                required=""
                                            />
                                            <button type="submit" className="btn btn-primary btn-small">
                                                Subscribe <i className="flaticon-next" />
                                            </button>
                                        </form>
                                        <div className="footer-one-social-media">
                                            <h4>Social Icons</h4>
                                            <ul>
                                                <li>
                                                    <Link href="https://www.facebook.com/" target="_blank">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://in.linkedin.com/" target="_blank">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://x.com/" target="_blank">
                                                        <i className="fa-brands fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="footer-lower">
                        <div className="container">
                            <div className="row row-gap-3">
                                <div className="col-md-6">
                                    <div className="footer-copy-right-one">
                                        <p>© Copyright loanlift. All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="footer-buttom-link text-end">
                                        <ul>
                                            <li>
                                                <Link href="#">Terms &amp; Condition</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Privacy policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}