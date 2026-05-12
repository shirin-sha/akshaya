"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../assets/images/Header_logo.svg';
import Logo01 from '../../../assets/images/logo.png';
import Logo02 from '../../../assets/images/logo-black.svg';

export default function Headerthree() {
    const [isFixed, setIsFixed] = useState(false);
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const handleScroll = () => {
        setIsFixed(window.scrollY > 50);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleSearchClick = () => {
        setSearchActive(true);
        document.body.classList.add("search-active");
    };
    const handleCloseSearch = () => {
        setSearchActive(false);
        document.body.classList.remove("search-active");
    };
    const toggleMenu = () => {
        setMenuExpanded(prevState => !prevState);

    };
    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <>
            <header className={isFixed ? "main-header main-header-three sticky-header--cloned sticky-fixed" : "main-header main-header-three"}>
                <div className="container-fluid">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link href="/">
                                <Image src={Logo} alt="header-logo" layout='intrinsic'/>
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <ul className="main-menu-list">
                                <li className="menu-item-children">
                                    <Link href="#">Home</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link href="/">Home One</Link>
                                        </li>
                                        <li>
                                            <Link href="/Hometwo">Home Two</Link>
                                        </li>
                                        <li>
                                            <Link href="/Homethree">Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link href="#">Pages</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link href="/Aboutus">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/Faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link href="/Careers">Careers</Link>
                                        </li>
                                        <li>
                                            <Link href="/Applyloan">Apply a Loan</Link>
                                        </li>
                                        <li>
                                            <Link href="/Team">Meet The Team</Link>
                                        </li>
                                        <li>
                                            <Link href="/Teamdetails">Team Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link href="#">Services</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link href="/Service1">Services </Link>
                                        </li>
                                        <li>
                                            <Link href="/Service2">Services 2</Link>
                                        </li>
                                        <li>
                                            <Link href="/Servicedetails">Services Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link href="#">Portfolio</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link href="/Portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link href="/Portfoliogrid">Portfolio Grid</Link>
                                        </li>
                                        <li>
                                            <Link href="/Portfoliodetails">Portfolio Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link href="#">Blog</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link href="/Blogstandard">Blog Standard</Link>
                                        </li>
                                        <li>
                                            <Link href="/Bloggrid">Blog Grid</Link>
                                        </li>
                                        <li>
                                            <Link href="/Bloggrid2">Blog Grid 2</Link>
                                        </li>
                                        <li>
                                            <Link href="/Blogdetails">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link href="/Contactus">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="header-right-end" onClick={toggleMenu}>
                                <span className="line-1" />
                                <span className="line-2" />
                                <span className="line-3" />
                            </div>
                        </div>
                        <div className="main-menu-right" >
                            <ul className="contact-info">
                                <li>
                                    <i className="flaticon-envelope" />
                                    <Link href="mailto:Loanlift@gmail.com">help@company.com</Link>
                                </li>
                            </ul>
                            <div className={`menu-right-end  ${isSearchActive ? "setSearchActive" : ""}`}>
                                <Link href="#" className="search-btn" onClick={handleSearchClick}>
                                    <i className="flaticon-search-interface-symbol" />
                                </Link>
                                <span />
                                <div className="header-side-menu" onClick={toggleSideMenu}>

                                    <span />
                                    <span />
                                    <span />
                                </div>
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
                                <Image width={150} src={Logo01} alt="logo" layout='intrinsic'/>
                            </Link>
                        </div>
                        <div className="mobile-nav-container">
                            <ul className="mobile-menu-list">
                                <li className={`menu-item-has-children ${openDropdown === 1 ? "dropdown-open" : ""}`}>
                                    <Link href="#" className="expended" onClick={() => toggleDropdown(1)}>Home
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 1 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 1 && (
                                        <ul>
                                            <li>
                                                <Link href="/">Home-1</Link>
                                            </li>
                                            <li>
                                                <Link href="/Hometwo">Home-2</Link>
                                            </li>
                                            <li>
                                                <Link href="/Homethree">Home-3</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 2 ? "dropdown-open" : ""}`}>
                                    <Link href="#" className="expanded" onClick={() => toggleDropdown(2)}>Services
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 2 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 2 && (
                                        <ul>
                                            <li>
                                                <Link href="/Service1">Services </Link>
                                            </li>
                                            <li>
                                                <Link href="/Service2">Services 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/Servicedetails">Services Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 3 ? "dropdown-open" : ""}`}>
                                    <Link href="#" className="expanded" onClick={() => toggleDropdown(3)}>Pages
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 3 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 3 && (
                                        <ul>
                                            <li>
                                                <Link href="/Aboutus">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/Faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link href="/Careers">Careers</Link>
                                            </li>
                                            <li>
                                                <Link href="/Applyloan">Apply a Loan</Link>
                                            </li>
                                            <li>
                                                <Link href="/Contactus">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/Team">Meet The Team</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 4 ? "dropdown-open" : ""}`}>
                                    <Link href="#" className="expanded" onClick={() => toggleDropdown(4)}>Blog
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 4 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 4 && (
                                        <ul>
                                            <li>
                                                <Link href="/Blogstandard">Blog Standards</Link>
                                            </li>
                                            <li>
                                                <Link href="/Bloggrid">Blog Grid</Link>
                                            </li>
                                            <li>
                                                <Link href="/Bloggrid2">Blog Grid 2</Link>
                                            </li>
                                            <li>
                                                <Link href="/Blogdetails">Blog Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 5 ? "dropdown-open" : ""}`}>
                                    <Link href="#" className="expanded" onClick={() => toggleDropdown(5)}>Portfolio
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 5 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 5 && (
                                        <ul>
                                            <li>
                                                <Link href="/Portfolio">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link href="/Portfoliogrid">Portfolio Grid</Link>
                                            </li>
                                            <li>
                                                <Link href="/Portfoliodetails">Portfolio Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`side-menu-wrapper ${isMenuOpen ? "expanded" : ""}`}>
                    <div className="side-menu-overlay" />
                    <div className="side-menu-content">
                        <Link href="#" className="side-menu-toggler" onClick={toggleSideMenu}>
                            <span />
                            <span />
                        </Link>
                        <div className="side-menu-logo-box">
                            <Link href="/">
                                <Image src={Logo02} alt="logo" layout='intrinsic'/>
                            </Link>
                        </div>
                        <div className="side-menu-container">
                            <p>
                                Loanlift - Business Consulting WordPress Theme for professionals,
                                services, and solutions.
                            </p>
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <i className="flaticon-clock" />
                                    <span>Mon - Frd : 8:00 -16:00</span>
                                </li>
                                <li>
                                    <i className="flaticon-envelope" />
                                    <Link href="#">help@company.com</Link>
                                </li>
                                <li>
                                    <i className="flaticon-phone" />
                                    <Link href="#"> +120.098.456 11</Link>
                                </li>
                            </ul>
                            <h4>Office Address</h4>
                            <p>28 Valencia Street, New York United States of America</p>
                            <ul className="side-menu-social-media">
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
                </div>
            </header>
            {isSearchActive && (
                <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
                    <button className="close-search " onClick={handleCloseSearch} />
                    <form method="post" action="blog.html">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search Here"
                                required=""
                                position="absolute"
                            />
                            <button type="submit">
                                <i className="flaticon-search" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}