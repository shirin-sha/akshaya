"use client"
import NumberCounter from 'number-counter';
import Image from 'next/image';
import Why03 from '../../../assets/images/why-choose-image-1.jpg';

export default function Whychooseone() {
    return (
        <>
            <section className="why-choose-section-one">
              
               
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-xl-9 why-choose-left-one">
                            <div className="heading-box heading-white">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    WHY CHOOSE
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Your trusted partner for tailored interiors, equipment solutions and project
                                    guidance
                                </h2>
                            </div>
                            <div className="why-choose-one-image">
                                <Image
                                    src={Why03}
                                    alt="why-choose-image"
                                    width={Why03.width}
                                    height={Why03.height}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                    <div className="why-choose-one-box">
                                        <div className="why-choose-box-one-title">
                                            <i className="flaticon-solution" />
                                            <h4>Turnkey Project Support</h4>
                                        </div>
                                        <p>
                                            We support clients from concept and product selection to supply, installation
                                            and after sales service.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                    <div className="why-choose-one-box">
                                        <div className="why-choose-box-one-title">
                                            <i className="flaticon-badge" />
                                            <h4>Quality Brand Selection</h4>
                                        </div>
                                        <p>
                                            We offer trusted products and solutions that balance quality, durability, design
                                            and project budget.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                    <div className="why-choose-one-box">
                                        <div className="why-choose-box-one-title">
                                            <i className="flaticon-trusted" />
                                            <h4>Experienced Project Team</h4>
                                        </div>
                                        <p>
                                            Our design, sales, logistics and service teams work together to deliver smooth
                                            project execution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12">
                            <ul className="counter-box-one">
                                <li>
                                    <h6 data-target={7} data-symbol="+">
                                        <NumberCounter end={7} start={0} postFix="+" />
                                    </h6>
                                    <span>01</span>
                                    <p>Core solution categories</p>
                                </li>
                                <li>
                                    <h6 data-target={6} data-symbol="+">
                                        <NumberCounter end={6} start={0} postFix=" +" />
                                    </h6>
                                    <span>02</span>
                                    <p>Regional project experience</p>
                                </li>
                                <li>
                                    <h6 data-target={50} data-symbol="+">
                                        <NumberCounter end={50} start={0} postFix=" +" />
                                    </h6>
                                    <span>03</span>
                                    <p>Industries served</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}