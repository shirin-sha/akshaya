"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Testimonialimg01 from '../../../assets/images/background/testimonial-three-bg.jpg';
import Testimonialimg02 from '../../../assets/images/testimonial/testimonial-1.png';
import Testimonialimg03 from '../../../assets/images/testimonial/testimonial-2.png';
import Testimonialimg04 from '../../../assets/images/testimonial/testimonial-3.png';
import Testimonialimg05 from '../../../assets/images/testimonial/testimonial-4.png';

const CustomArrow = ({ className, onClick, direction }) => (
    <button 
        type="button" 
        className={className}
        onClick={onClick}
        aria-label={`${direction} slide`}
    >
        <i className="flaticon-arrow-right" />
    </button>
);

export default function Testimonialthree() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <CustomArrow direction="Previous" />,
        nextArrow: <CustomArrow direction="Next" />,
    };

    useEffect(() => {
        const handleScroll = () => {
            const elementsToAnimate = document.querySelectorAll(
                '.why-choose-one-image img, .banner-three-video img, .testimonial-three .testimonial-three-background-image, .why-choose-one-image-2 img'
            );
            
            const winPos = window.pageYOffset;
            const targetPos = winPos * 0.05;
            
            elementsToAnimate.forEach((element) => {
                element.style.transform = `translateY(${targetPos}px) scale(1.2)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const testimonials = [
        {
            img: Testimonialimg02,
            name: 'John Miller'
        },
        {
            img: Testimonialimg03,
            name: 'Sarah Thompson'
        },
        {
            img: Testimonialimg04,
            name: 'Brian Clark'
        },
        {
            img: Testimonialimg05,
            name: 'Megan Scott'
        }
    ];

    return (
        <div className="testimonial-three">
            <div className="testimonial-three-background-image">
                <Image src={Testimonialimg01} alt="background" layout='intrinsic'/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-12 ms-auto">
                        <div className="testimonial-three-block">
                            <div className="heading-box">
                                <h2 className="heading-title">
                                    What Our Customers Say?
                                </h2>
                            </div>
                            <div className="slider-wrapper">
                                <Slider className="testimonial-slider-three" {...settings}>
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="testimonial-three-item">
                                            <p>
                                                Signing the agreement and completing the documentation with
                                                ApexFunding was seamless and straightforward. Their team guided
                                                me through every step, ensuring I understood all the details. I
                                                felt confident and well-informed throughout the entire process.
                                            </p>
                                            <div className="testimonial-three-details-inner">
                                                <div className="testimonial-three-details">
                                                    <Image 
                                                        src={testimonial.img} 
                                                        alt={testimonial.name} 
                                                        layout='intrinsic'
                                                    />
                                                    <div className="testimonial-member-details">
                                                        <h5>{testimonial.name}</h5>
                                                        <p>Satisfied Client</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}