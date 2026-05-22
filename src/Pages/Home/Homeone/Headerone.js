"use client"
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/images/logo2.webp";
import Logo01 from "../../../assets/images/logo.png";

export default function Headerone() {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const toggleMenu = () => {
      setMenuExpanded(prevState => !prevState);
  
    };
  
    return (
        <>
            <div className="topbar-one">
                <div className="container-fluid">
                    <div className="topbar-one-inner">
                        <ul className="topbar-one-info white-font">
                            <li>
                                <i className="flaticon-location" />
                                <p>Burj Alshaya, Al Soor Street, Kuwait City</p>
                            </li>
                            <li>
                                <i className="flaticon-mail" />
                                <Link href="mailto:info@alshayaenterprises.com">info@alshayaenterprises.com</Link>
                            </li>
                            <li>
                                <i className="flaticon-phone-call" />
                                <Link href="tel:+96551514000">+965 51514000</Link>
                            </li>
                        </ul>
                        <div className="topbar-one-right">
                            <ul className="topbar-one-right-one white-font">
                                <li>
                                    <Link href="#">Help</Link>
                                </li>
                                <li>
                                    <Link href="#">About</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact</Link>
                                </li>
                            </ul>
                            <ul className="topbar-one-social-media white-font">
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className={isFixed ? "sticky-header--cloned sticky-fixed" : "main-header"}>
                <div className="container-fluid">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="Al Shaya Enterprises"
                                    width={200}
                                    height={100}
                                    priority
                                   
                                />
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <ul className={`main-menu-list ${isMenuExpanded ? "expanded" : ""}`}>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Services</Link>
                                </li>
                                <li>
                                    <Link href="#">Projects</Link>
                                </li>
                                <li>
                                    <Link href="#">Media Hub</Link>
                                </li>
                                <li>
                                    <Link href="#">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/Contactus">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="header-right-end" onClick={toggleMenu}>
                                <button className="menu-toggle-btn" >
                                    <span className="line-1" />
                                    <span className="line-2" />
                                    <span className="line-3" />
                                </button>
                            </div>
                            <div className={`main-menu-right ${isMenuExpanded ? "expanded" : ""}`}>
                                <Link href="#" className="btn btn-primary">
                                    Get Started <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={`mobile-nav-wrapper ${isMenuExpanded ? "expanded" : ""}`}>
                    <div className="mobile-nav-overlay mobile-nav-toggler" onClick={toggleMenu} />
                    <div className="mobile-nav-content">
                        <Link href="#" className="mobile-nav-close mobile-nav-toggler" onClick={toggleMenu}>
                            <span />
                            <span />
                        </Link>
                        <div className="logo-box">
                            <Link href="/">
                                <Image
                                    src={Logo01}
                                    alt="Al Shaya Enterprises"
                                    width={150}
                                    height={50}
                                    style={{ width: "100%", height: "auto", maxWidth: 150 }}
                                />
                            </Link>
                        </div>
                        <div className="mobile-nav-container">
                            <ul className="mobile-menu-list">
                                <li>
                                    <Link href="/" onClick={toggleMenu}>Home</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>About Us</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>Services</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>Projects</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>Media Hub</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>Careers</Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={toggleMenu}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="#" className="btn btn-primary" onClick={toggleMenu}>
                                        Get Started <i className="flaticon-next" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}