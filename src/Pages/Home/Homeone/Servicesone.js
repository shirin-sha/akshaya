import Link from "next/link"
import Image from "next/image";
import Shape01 from "../../../assets/images/shape/service-shape-1.png";
import Shape00 from '../../../assets/images/shape/service-shape-2.png';
import Shape02 from '../../../assets/images/services/services-1.png';
import Shape03 from '../../../assets/images/services/services-2.png';
import Shape04 from '../../../assets/images/services/services-3.png';
import Shape05 from '../../../assets/images/services/services-4.png';
import Shape06 from '../../../assets/images/services/services-5.png';
import Shape07 from '../../../assets/images/services/services-6.png';

const Servicedata = [
    {
        Image: Shape02,
        heading: "FF&E, Furniture And Flooring",
        content:
            "Premium furniture, fittings, equipment and flooring solutions for offices, hotels, education, healthcare, retail and commercial interiors.",
    },
    {
        Image: Shape03,
        heading: "Sanitaryware",
        content:
            "Elegant and durable sanitaryware, tiles, mixers, accessories and bathroom solutions for residential and commercial projects.",
    },
    {
        Image: Shape04,
        heading: "Lighting Solutions",
        content:
            "Architectural, decorative, outdoor, industrial and emergency lighting solutions designed for performance and visual appeal.",
    },
    {
        Image: Shape05,
        heading: "Commercial Kitchens And Laundry",
        content:
            "Professional kitchen and laundry equipment for hotels, restaurants, hospitals, clubs, canteens and high demand operations.",
    },
    {
        Image: Shape06,
        heading: "Residential Kitchens",
        content:
            "Custom kitchen and home furniture solutions supported by design consultation, quality materials and reliable installation.",
    },
    {
        Image: Shape07,
        heading: "Supermarket And Storage Solutions",
        content:
            "Smart retail, refrigeration, shelving, racking, conveyor and storage solutions for supermarkets and warehouse operations.",
    },
];
export default function Servicesone() {
    return (
        <>
            <section className="services-section-one">
               
              
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="heading-box text-center">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    OUR SERVICES
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Complete interior and equipment solutions tailored to your needs
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="service-one-inner">
                        {Servicedata.map((data, index) =>
                            <div key={index}
                                className="service-one-box">
                                <div className="service-one-box-image">
                                    <Image
                                        src={data.Image} alt="service images" layout='intrinsic'
                                    />
                                </div>
                                <div className="service-one-icon-box">
                                    <i className="flaticon-personal" />
                                </div>
                                <div className="service-one-info">
                                    <h4>{data.heading}</h4>
                                    <p>
                                        {data.content}
                                    </p>
                                </div>
                                <Link href="/Servicedetails" className="read-more-btn">
                                    <i className="flaticon-next" />
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="text-center">
                        <Link href="/Service1" className="btn btn-secondary">
                            View More
                            <i className="flaticon-next" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}