
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/images/logo2.webp';

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
                                        <Link href="/">
                                            <Image
                                                src={Logo}
                                                alt="Al Shaya Enterprises"
                                                width={200}
                                                height={100}
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-one-about-details">
                                        <p>
                                            Alshaya Enterprises is a trusted turnkey interiors and commercial equipment
                                            partner, delivering quality solutions for residential, commercial, hospitality,
                                            retail, healthcare, education, warehousing and specialized project
                                            requirements.
                                        </p>
                                    </div>
                                    <div className="footer-one-about-contact">
                                        <h4>Contact</h4>
                                        <ul>
                                            <li>
                                                <Link href="mailto:info@alshayaenterprises.com">
                                                    <i className="flaticon-envelope" />
                                                    info@alshayaenterprises.com
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="tel:+96551514000">
                                                    <i className="flaticon-phone" />
                                                    +965 51514000
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" style={{ paddingLeft: '72px' }}>
                                    <div className="footer-one-link">
                                        <h3>Services</h3>
                                        <ul>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">FF&E, Furniture And Flooring</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Sanitaryware</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Lighting</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Commercial Kitchens And Laundry</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Residential Kitchens</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Supermarket Equipment</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Warehouse And Storage Requirements</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div className="footer-one-link m-0">
                                        <h3>Quick Links</h3>
                                        <ul>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">About Us</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Projects</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">News</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Downloads</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="#">Careers</Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-right-arrow" />
                                                <Link href="/Contactus">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 ">
                                    <div className="footer-One-subscribe">
                                        <h3>Subscribe</h3>
                                        <p>
                                            Stay updated with the latest interior solution ideas, project updates, product
                                            insights and service news from Alshaya Enterprises.
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
                                                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
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
                                        <p>© Copyright Alshaya Enterprises. All rights reserved</p>
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
