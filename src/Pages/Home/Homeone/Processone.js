"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Process01 from '../../../assets/images/process-video-thamb.jpg';
import Process02 from '../../../assets/images/process-image.jpg';
import IconConsultation from '../../../assets/icons/Consultation.svg';
import IconSelection from '../../../assets/icons/Selection.svg';
import IconCoordination from '../../../assets/icons/Coordination.svg';
import IconHandover from '../../../assets/icons/Handover.svg';

const processSteps = [
    {
        icon: IconConsultation,
        title: "Consultation",
        description:
            "We understand your project needs, space requirements, preferred style, budget and timeline.",
    },
    {
        icon: IconSelection,
        title: "Selection",
        description:
            "Our team recommends suitable products, finishes, materials and technical solutions.",
    },
    {
        icon: IconCoordination,
        title: "Coordination",
        description:
            "We manage product sourcing, delivery planning and project communication.",
    },
    {
        icon: IconHandover,
        title: "Handover",
        description:
            "Our team supports installation, final checks, service needs and project completion.",
    },
];

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
                                {processSteps.map((step, index) => (
                                    <div key={index} className="process-one-box">
                                        <div className="process-one-box-icon">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={50}
                                                height={50}
                                                className="process-one-icon-img"
                                            />
                                        </div>
                                        <div className="process-one-box-title">
                                            <h3>{step.title}</h3>
                                        </div>
                                        <div className="process-one-box-devider" />
                                        <div className="process-one-box-details">
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                ))}
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
