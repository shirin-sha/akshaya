import Link from "next/link"
import Image from "next/image";
import Teamimage01 from '../../../assets/images/team/team-1.jpg';
import Teamimage02 from '../../../assets/images/team/team-2.jpg';
import Teamimage03 from '../../../assets/images/team/team-3.jpg';
import Teamimage04 from '../../../assets/images/team/team-4.jpg';
import Teamimage05 from '../../../assets/images/team/team-5.jpg';
import Teamimage06 from '../../../assets/images/team/team-6.jpg';
import Teamimage07 from '../../../assets/images/team/team-7.jpg';
import Teamimage08 from '../../../assets/images/team/team-8.jpg';

const Teamsdata = [
    {
        Image: Teamimage01,
        name: "Joan Johnson",
        position: "Chief Financial Officer"
    },
    {
        Image: Teamimage02,
        name: "Donnie Southern",
        position: "Head Of Operation"
    },
    {
        Image: Teamimage03,
        name: "Alexandra Southern",
        position: "Loan Consultant"
    },
    {
        Image: Teamimage04,
        name: "Jessica White",
        position: "Credit Manager"
    },
    {
        Image: Teamimage05,
        name: "George Witt",
        position: "Financial Analyst"
    },
    {
        Image: Teamimage06,
        name: "Robert Lee",
        position: "Credit Analyst"
    },
    {
        Image: Teamimage07,
        name: "Raul Mayer",
        position: "Regional Manager"
    },
    {
        Image: Teamimage08,
        name: "Alice Shelton",
        position: "Branch Manager"
    },
]
export default function Team() {
    return (
        <>
            <section className="team-one inner-page" style={{ backgroundColor: "transparent" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 m-auto">
                            <div className="heading-box text-center">
                                <span className="heading-subtitle wow fadeInUp animated">🤝 OUR TEAM</span>
                                <h2 className="heading-title wow fadeInUp animated">Meet Our Expert Team</h2>
                                <p className="heading-details">
                                    Meet the team dedicated to turning your homeownership dreams into reality. Our experts bring a wealth of experience and personalized care to guide you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-40">
                        {Teamsdata.map((data, index) =>
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team-one-box">
                                    <Link href="/Teamdetails" className="team-one-image">
                                        <Image src={data.Image} alt="team-image" layout='intrinsic'/>
                                    </Link>
                                    <div className="team-one-details">
                                        <div className="team-one-details-inner">
                                            <h5>{data.name}</h5>
                                            <p>{data.position}</p>
                                            <div className="team-one-social-media">
                                                <ul>
                                                    <li>
                                                        <Link href="https://www.facebook.com/" target="_blank">
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/" target="_blank">
                                                            <i className="fa-brands fa-instagram" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://in.linkedin.com/" target="_blank">
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/" target="_blank">
                                                            <i className="fa-brands fa-twitter" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-12">
                            <ul className="pagination">
                                <li className="active">
                                    <Link href="#">1</Link>
                                </li>
                                <li>
                                    <Link href="#">2</Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className="fa-solid fa-angles-right" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}