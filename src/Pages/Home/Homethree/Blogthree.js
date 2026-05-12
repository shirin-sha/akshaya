import Link from 'next/link';
import Image from 'next/image';
import Blogtimg01 from '../../../assets/images/blog/blog-two-image.jpg';
import Blogtimg02 from '../../../assets/images/blog/blog-three-2.jpg';
import Blogtimg03 from '../../../assets/images/blog/blog-three-3.jpg';

const Blog3data = [
    {
        name: "By Elei",
        date: "On 18 Feb 2024",
        Image: Blogtimg01,
        heading: "Top 5 ways loanlift fuels small business growth",
        about: "Loanlift fuels small business growth through tailored financial solutions that address specific needs."
    },
    {
        name: "By Deni",
        date: "On 18 Feb 2024",
        Image: Blogtimg02,
        heading: "Top benefits of choosing loanLift for your financial needs",
        about: "Loanlift fuels small business growth through tailored financial solutions that address specific needs."
    },
    {
        name: "By Jhon",
        date: "On 18 Feb 2024",
        Image: Blogtimg03,
        heading: "The ultimate guide to securing business loans: tips from loanLift",
        about: "Loanlift fuels small business growth through tailored financial solutions that address specific needs."
    },
]
export default function Blogthree() {
    return (
        <>
            <div className="blog-three">
                <div className="container">
                    <div className="heading-box text-center">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            🤝 BLOG
                        </span>
                        <h2 className="heading-title wow fadeInUp animated animated">
                            Recent new &amp; events
                        </h2>
                    </div>
                    <div className="row gutter-y-30">
                        {Blog3data.map((data, index) =>
                            <div key={index}
                                className="col-lg-4 col-md-6">
                                <div className="blog-three-box">
                                    <div className="blog-three-box-meta">
                                        <p>
                                            <Link href="#">{data.name}</Link>{" "}
                                        </p>
                                        <p>
                                            <Link href="#">{data.date}</Link>
                                        </p>
                                    </div>
                                    <div className="blog-three-box-image">
                                        <Image src={data.Image} alt="blog-image" layout='intrinsic'/>
                                    </div>
                                    <div className="blog-three-box-details">
                                        <h5>
                                            <Link href="/Bloggrid2">
                                                {data.heading}
                                            </Link>
                                        </h5>
                                        <p>
                                            {data.about}
                                        </p>
                                        <Link href="/Blogdetails" className="btn-link">
                                            Read More <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}