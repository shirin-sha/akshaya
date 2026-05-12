"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Process01 from '../../../assets/images/process-video-thamb.jpg';
import Process02 from '../../../assets/images/process-image.jpg';

export default function Processone() {
    const [ytshow, setytshow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(
                '.process-one-image'
            );

            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const elementBottom = el.getBoundingClientRect().bottom;
                const viewportTop = 0;
                const viewportBottom = window.innerHeight;

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <>
            <section className="process-one">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    OUR PROCESS
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Consultation to successful project delivery process
                                </h2>
                                <p className="heading-details">
                                    Our process is designed to make every project clear, coordinated and result
                                    focused. From the first discussion to final handover, we provide practical
                                    guidance, reliable products and professional support.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="process-one-video">
                                <Image src={Process01} alt="video-thumb" />
                                <Link
                                    href="#"
                                    className="process-one-video-btn" onClick={() => setytshow(true)}
                                >
                                    <i className="fa-solid fa-play" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="process-one-image">
                                <Image src={Process02} alt="process-image" />
                            </div>
                        </div>
                        <div className="col-xl-9 col-md-8 align-self-center">
                            <div
                                className="process-item-one wow fadeInRight animated animated"
                                data-wow-delay="500ms"
                                data-wow-duration="2000ms"
                            >
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-application" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Consultation</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            We understand your project needs, space requirements, preferred style, budget
                                            and timeline.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-contract" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Selection</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            Our team recommends suitable products, finishes, materials and technical
                                            solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-approval" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Coordination</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            We manage product sourcing, delivery planning and project communication.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-money-1" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Handover</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            Our team supports installation, final checks, service needs and project
                                            completion.
                                        </p>
                                    </div>
                                </div>
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