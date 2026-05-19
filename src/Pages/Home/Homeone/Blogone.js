import Link from 'next/link';
import Image from 'next/image';
import Blog01 from '../../../assets/images/shape/blog-shape.png';
import Blog02 from '../../../assets/images/blog/blog-1.jpg';
import Blog03 from '../../../assets/images/blog/blog-3.jpg';
import Blog04 from '../../../assets/images/blog/blog-2.jpg';

const Blogdata=[
    {
        Image: Blog02,
        badge: "INTERIORS",
        name: "By Alshaya Team",
        date: "On 12 May 2026",
        content: "How smart interior planning improves commercial spaces"
    },
    {
        Image: Blog03,
        badge: "HOSPITALITY",
        name: "By Alshaya Team",
        date: "On 05 May 2026",
        content: "Why quality FF&E matters for guest experience"
    },
    {
        Image: Blog04,
        badge: "RETAIL",
        name: "By Alshaya Team",
        date: "On 28 Apr 2026",
        content: "Choosing the right equipment for supermarket projects"
    },
    
]
export default function Blogone() {
    return (
        <>
            <section className="blog-one">
                {/* <div className="blog-shape-one-1">
                    <Image src={Blog01} alt="shape" layout='intrinsic'/>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="heading-box text-center">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    NEWS AND TIPS
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Recent News And Blog
                                </h2>
                                <p className="heading-details">
                                    Explore insights, ideas and updates related to interiors, commercial equipment,
                                    retail spaces, kitchens, storage systems and modern project solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-30">
                        {Blogdata.map((data, index) =>
                            <div key={index}
                                className="col-lg-4 col-md-6">
                                <div className="blog-one-box">
                                    <div className="blog-one-image">
                                        <Link href="/Blogdetails">
                                            <Image src={data.Image} alt={data.content} layout='intrinsic'/>
                                        </Link>
                                        <Link href="#" className="blog-one-tag">
                                            <span>{data.badge}</span>
                                        </Link>
                                    </div>
                                    <div className="blog-one-meta">
                                        <p>
                                            <Link href="#">{data.name} </Link>
                                        </p>
                                        <p>
                                            <Link href="#">{data.date}</Link>
                                        </p>
                                    </div>
                                    <div className="blog-one-details">
                                        <h5>
                                            <Link href="/Blogdetails">
                                                {data.content}
                                            </Link>
                                        </h5>
                                        <Link href="/Blogdetails" className="btn-link">
                                            <span>Read More</span>
                                            <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        </>
    )
}