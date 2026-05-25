"use client"
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import Bannerbg0 from '../../../assets/images/background/banner-one-bg.jpg';
import Bannerbg from '../../../assets/images/background/banner-one-bg-2.jpg';
import BannerLogo from '../../../assets/icons/logo_07.jpg';

export default function Bannerone() {
    const Bannerslider = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        slidesToScroll: 1
    }
    return (
        <>
            <section className="banner-one">
                <div className="container-fluid p-0">
                    <Slider className="banner-one-slider" {...Bannerslider}>
                        <div className="banner-one-slider-item">
                            <div className="banner-one-slider-item-image zoom-in">
                                <Image
                                    src={Bannerbg0}
                                    alt="banner-images"
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-8 col-md-10">
                                        <div className="banner-one-info">
                                            <div className="banner-title fade-left">
                                                <h1>Transforming Spaces With Smart Interior Solutions</h1>
                                            </div>
                                            <div className="section-details fade-left">
                                                <p>
                                                    We deliver complete interior, furnishing and commercial equipment solutions
                                                    designed to support residential, commercial and large scale project
                                                    requirements with quality, style and dependable execution.
                                                </p>
                                            </div>
                                            <div className="fade-in-up">
                                                <Link href="/Contactus" className="btn btn-primary">
                                                    Contact Us
                                                    <i className="flaticon-next" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="banner-one-box">
                                        <div className="banner-one-box-inner">
                                            <span className="banner-one-box-icon">
                                                <Image
                                                    src={BannerLogo}
                                                    alt="Alshaya Enterprises"
                                                    width={45}
                                                    height={45}
                                                    className=""
                                                />
                                            </span>
                                            <h2 className="banner-one-box-title-lg">Quality and style</h2>
                                        </div>
                                        <p>
                                            Residential, commercial and large scale projects delivered with
                                            dependable execution and refined detailing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-one-slider-item">
                            <div className="banner-one-slider-item-image zoom-in">
                                <Image
                                    src={Bannerbg}
                                    alt="banner-images"
                                />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-8 col-md-10">
                                        <div className="banner-one-info">
                                            <div className="banner-title fade-left">
                                                <h1>Your Partner For Complete Project Solutions</h1>
                                            </div>
                                            <div className="section-details fade-left">
                                                <p>
                                                    From furniture, flooring and lighting to kitchens, supermarket equipment and
                                                    warehouse storage systems, Alshaya Enterprises helps clients build functional
                                                    and refined spaces.
                                                </p>
                                            </div>
                                            <div className="fade-in-up">
                                                <Link href="/Service1" className="btn btn-primary">
                                                    Explore Services
                                                    <i className="flaticon-next" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="banner-one-box">
                                        <div className="banner-one-box-inner">
                                            <span className="banner-one-box-icon">
                                                <Image
                                                    src={BannerLogo}
                                                    alt="Alshaya Enterprises"
                                                    width={45}
                                                    height={45}
                                                    className="banner-one-box-icon-img"
                                                />
                                            </span>
                                            <h2 className="banner-one-box-title-lg">Full scope supply</h2>
                                        </div>
                                        <p>
                                            Furniture, fixtures, equipment and fit-out support for spaces that
                                            work beautifully day to day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}