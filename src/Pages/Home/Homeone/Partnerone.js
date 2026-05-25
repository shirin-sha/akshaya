"use client"
import Slider from 'react-slick';
import Image from 'next/image';
import Part01 from '../../../assets/images/partner-logo/ahwet-zeitouna.webp';
import Part02 from '../../../assets/images/partner-logo/boots.webp';
import Part03 from '../../../assets/images/partner-logo/Canes.webp';
import Part04 from '../../../assets/images/partner-logo/h-m .webp';
import Part05 from '../../../assets/images/partner-logo/kidzania.webp';
import Part06 from '../../../assets/images/partner-logo/le-labo.webp';
import Part07 from '../../../assets/images/partner-logo/next.webp';
import Part08 from '../../../assets/images/partner-logo/starbucks.webp';

const partners = [
    { src: Part01, alt: 'Ahwet Zeitouna' },
    { src: Part02, alt: 'Boots' },
    { src: Part03, alt: 'Canes' },
    { src: Part04, alt: 'H&M' },
    { src: Part05, alt: 'Kidzania' },
    { src: Part06, alt: 'Le Labo' },
    { src: Part07, alt: 'Next' },
    { src: Part08, alt: 'Starbucks' },
];

export default function Partnerone() {
    const Partnerone = {
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <section className="partner-one">
                <div className="container-fluid">
                    <Slider className="partner-slider-one" {...Partnerone}>
                        {partners.map((partner) => (
                            <div className="partner-slider-one-item" key={partner.alt}>
                                <div className="partner-slider-logo">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="partner-slider-logo-img"
                                        sizes="(max-width: 600px) 50vw, (max-width: 991px) 33vw, 240px"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
