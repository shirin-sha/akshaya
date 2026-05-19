"use client"
import Slider from 'react-slick';
import Image from 'next/image';
import Testimonialimg01 from '../../../assets/images/shape/testimonial-shape-two-1.png';
import Testimonialimg02 from '../../../assets/images/testimonial/testimonial-1.png';
import Testimonialimg03 from '../../../assets/images/testimonial/testimonial-2.png';
import Testimonialimg04 from '../../../assets/images/testimonial/testimonial-3.png';
import Testimonialimg05 from '../../../assets/images/testimonial/testimonial-4.png';
import Testimonialimg06 from '../../../assets/images/testimonial/testimonial-3.png';

export default function Testimonialtwo() {
    const Testimonialslider = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 50000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className="testimonial-two">
                <div className="testimonial-shape-one-1">
                    <Image src={Testimonialimg01} alt="shape" layout='intrinsic'/>
                </div>
                <div className="container">
                    <div className="heading-box">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            🤝 TESTIMONIAL
                        </span>
                        <h2 className="heading-title wow fadeInUp animated animated">
                            What our 1200+ customers are saying
                        </h2>
                    </div>
                    <Slider className="testimonial-slider-two" {...Testimonialslider}>
                        <div className="testimonial-slider-two-item">
                            <div className="testimonial-slider-two-box">
                                <div className="testimonial-two-box-meta">
                                    <Image
                                        src={Testimonialimg02}
                                        alt="admin-images"
                                        layout='intrinsic'
                                    />
                                    <div className="testimonial-two-membar">
                                        <h5>Project Partner                                        </h5>
                                        <span>Residential And Commercial Client</span>
                                    </div>
                                </div>
                                <p>
                                    LoanLift transformed my business! Their expert team guided me
                                    through the entire process, helping me secure the funding I needed.
                                    I couldn’t have grown my business without their support.
                                </p>
                                <span className="tagline">Business Loans</span>
                                <div className="last-quote text-end">
                                    <i className="flaticon-quote-1" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider-two-item">
                            <div className="testimonial-slider-two-box">
                                <div className="testimonial-two-box-meta">
                                    <Image
                                        src={Testimonialimg03}
                                        alt="admin-images"
                                        layout='intrinsic'
                                    />
                                    <div className="testimonial-two-membar">
                                        <h5>Project Partner</h5>
                                        <span>Residential And Commercial Client</span>
                                    </div>
                                </div>
                                <p>
                                    LoanLift has been an absolute game-changer for my business. Their
                                    expert guidance helped me secure the funding I needed to grow and
                                    expand. The team was incredibly supportive.
                                </p>
                                <span className="tagline">Mortgage Loans</span>
                                <div className="last-quote text-end">
                                    <i className="flaticon-quote-1" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider-two-item">
                            <div className="testimonial-slider-two-box">
                                <div className="testimonial-two-box-meta">
                                    <Image
                                        src={Testimonialimg04}
                                        alt="admin-images"
                                        layout='intrinsic'
                                    />
                                    <div className="testimonial-two-membar">
                                        <h5>Project Partner</h5>
                                        <span>Residential And Commercial Client</span>
                                    </div>
                                </div>
                                <p>
                                    Thanks to LoanLift, I was able to expand my business with ease.
                                    Their knowledgeable and supportive team made securing funding simple
                                    and stress-free. Highly recommend their services!
                                </p>
                                <span className="tagline">Personal Loans</span>
                                <div className="last-quote text-end">
                                    <i className="flaticon-quote-1" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider-two-item">
                            <div className="testimonial-slider-two-box">
                                <div className="testimonial-two-box-meta">
                                    <Image
                                        src={Testimonialimg05}
                                        alt="admin-images"
                                        layout='intrinsic'
                                    />
                                    <div className="testimonial-two-membar">
                                        <h5>Project Partner</h5>
                                        <span>Residential And Commercial Client</span>
                                    </div>
                                </div>
                                <p>
                                    LoanLift transformed my business! Their expert team guided me
                                    through the entire process, helping me secure the funding I needed.
                                    I couldn’t have grown my business without their support.
                                </p>
                                <span className="tagline">Business Loans</span>
                                <div className="last-quote text-end">
                                    <i className="flaticon-quote-1" />
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider-two-item">
                            <div className="testimonial-slider-two-box">
                                <div className="testimonial-two-box-meta">
                                    <Image
                                        src={Testimonialimg06}
                                        alt="admin-images"
                                        layout='intrinsic'
                                    />
                                    <div className="testimonial-two-membar">
                                        <h5>William Wilson</h5>
                                        <span>Home Owner</span>
                                    </div>
                                </div>
                                <p>
                                    Thanks to LoanLift, I was able to expand my business with ease.
                                    Their knowledgeable and supportive team made securing funding simple
                                    and stress-free. Highly recommend their services!
                                </p>
                                <span className="tagline">Personal Loans</span>
                                <div className="last-quote text-end">
                                    <i className="flaticon-quote-1" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}