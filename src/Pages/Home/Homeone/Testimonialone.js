"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import Test01 from '../../../assets/images/blog/blog-three-1.jpg';
import Test02 from '../../../assets/images/testimonial/testimonial-1.png';
import Test03 from '../../../assets/images/testimonial/testimonial-2.png';
import Test04 from '../../../assets/images/testimonial/testimonial-3.png';
import Test05 from '../../../assets/images/testimonial/testimonial-4.png';

export default function Testimonialone() {
    const [ytshow, setytshow] = useState(false);
    const Testimonialslider = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    }
    return (
        <>
            <section className="testimonial-one white-font">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6 col-sm-10 col-12 ms-auto me-auto">
                            <div className="testimonial-video-one">
                                <Image
                                 
                                    src={Test01}
                                    alt="testimonial-video-thamb"
                                    layout='intrinsic'
                                />
                                <Link
                                    href="#"
                                    className="testimonial-video-btn-one" onClick={() => setytshow(true)}
                                >
                                    <i className="fa-solid fa-play" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <div className="testimonial-one-right">
                                <div className="heading-box heading-white">
                                    <span className="heading-subtitle wow fadeInUp animated animated">
                                        🤝 SUCCESS STORY
                                    </span>
                                    <h2 className="heading-title wow fadeInUp animated animated">
                                        Project experiences with us
                                    </h2>
                                </div>
                                <Slider className="testimonial-slider-one" {...Testimonialslider}>
                                    <div className="testimonial-one-item">
                                        <p>
                                            The team provided clear guidance, suitable product options and dependable
                                            coordination throughout the project. Their support helped us complete the
                                            space with confidence, quality and attention to detail.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <Image
                                                height={78}
                                                width={78}
                                                    src={Test02}
                                                    alt="Testimonial-image"
                                                    layout='intrinsic'
                                                />
                                                <div>
                                                    <h5 className="white-font">Project Partner</h5>
                                                    <p className="white-font m-0">Residential And Commercial Client</p> 
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            From product selection to installation, Alshaya Enterprises made our
                                            commercial fit-out straightforward. Their team coordinated suppliers and
                                            timelines so we could focus on opening on schedule.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <Image
                                                  height={78}
                                                  width={78}
                                                    src={Test03}
                                                    alt="Testimonial-image"
                                                    layout='intrinsic'
                                                />
                                                <div>
                                                    <h5 className="white-font">Project Partner</h5>
                                                    <p className="white-font m-0">Residential And Commercial Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            We appreciated the practical recommendations and reliable after-sales support.
                                            The project team understood our requirements and delivered solutions that
                                            balanced design, durability and budget.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <Image
                                                  height={78}
                                                  width={78}
                                                    src={Test04}
                                                    alt="Testimonial-image"
                                                    layout='intrinsic'
                                                />
                                                <div>
                                                    <h5 className="white-font">Project Partner</h5>
                                                    <p className="white-font m-0">Residential And Commercial Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                    <div className="testimonial-one-item">
                                        <p>
                                            Working with Alshaya on our residential interiors was seamless. They guided
                                            us through options, handled logistics and ensured every detail met our
                                            expectations from concept to handover.
                                        </p>
                                        <div className="testimonial-one-details-inner">
                                            <div className="testimonial-one-details">
                                                <Image
                                                  height={78}
                                                  width={78}
                                                    src={Test05}
                                                    alt="Testimonial-image"
                                                    layout='intrinsic'
                                                />
                                                <div>
                                                    <h5 className="white-font">Project Partner</h5>
                                                    <p className="white-font m-0">Residential And Commercial Client</p>
                                                </div>
                                            </div>
                                            <i className="flaticon-quote-1" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {ytshow &&
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytshow(false)} />
                        <iframe
                            src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                            allowFullScreen="allowfullscreen"
                        />
                    </div>
                </div>
            }
        </>
    )
}