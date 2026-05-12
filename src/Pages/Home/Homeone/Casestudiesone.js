"use client"
import React, {useState} from 'react';
import Slider from 'react-slick';
import Link from "next/link";
import Image from "next/image";
import Case01 from '../../../assets/images/case-study/case-study-1.jpg';
import Case02 from '../../../assets/images/case-study/case-study-2.jpg';
import Case03 from '../../../assets/images/case-study/case-study-3.jpg';
import Case04 from '../../../assets/images/case-study/case-study-4.jpg';
import Case05 from '../../../assets/images/case-study/case-study-1.jpg';

export default function Casestudiesone() {
    const [backgroundImage, setBackgroundImage] = useState('');

    const caseStudySlider = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const caseStudyItems = [
        {
            image: Case01,
            title: "A case study on securing growth funding with loanLift",
            category: "Business",
            client: "technology Solutions"
        },
        {
            image: Case02,
            title: "How loanLift supported in managing cash flow",
            category: "Home",
            client: "Centric Lending"
        },
        {
            image: Case03,
            title: "A case study on growth through loanLift financing",
            category: "Student",
            client: "Debt Restructuring"
        },
        {
            image: Case04,
            title: "LoanLift's strategies for enhancing loan accessibility",
            category: "Business",
            client: "Streamlined Application"
        },
        {
            image: Case05,
            title: "A deep dive into loanLift's innovative mortgage solutions",
            category: "Personal",
            client: "Quick Solutions"
        },
    ]
    const handleMouseEnter = (imageSrc) => {
        setBackgroundImage(imageSrc);
    };

    const handleMouseLeave = () => {
        setBackgroundImage('');
    };
    return (
        <>
            <section className="case-studies-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-11">
                            <div className="heading-box">
                                <span className="heading-subtitle">
                                    🤝 OUR PORTFOLIO
                                </span>
                                <h2 className="heading-title">
                                    Our portfolio elevating financial services through innovation &amp; technology
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="case-studies-slider-inner-one">
                        <div
                            className="case-studies-background"
                            style={{
                                backgroundImage: backgroundImage ? `url(${backgroundImage .src})` : '',
                                transition: 'background-image 0.3s ease-in-out'
                            }}
                        ></div>
                        <Slider className="case-studies-slider-one" {...caseStudySlider}>
                            {caseStudyItems.map((data, index) =>
                                <div
                                    key={index}
                                    className="case-studies-slider-one-item"
                                    onMouseEnter={() => handleMouseEnter(data.image)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="case-studies-one-image">
                                        <Image src={data.image} alt="case-image" layout='intrinsic'/>
                                        <div className="case-studies-one-details">
                                            <div className="case-studies-details-one-inner">
                                                <h4>
                                                    <Link href="/Portfoliodetails">
                                                        {data.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                            <div className="case-studies-one__details">
                                                <span className="tagline">{data.category}</span>
                                                <p>{data.client}</p>
                                                <Link href="/Portfoliodetails" className="more-btn m-auto">
                                                    <i className="flaticon-next"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}