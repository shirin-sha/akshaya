import Image from 'next/image';
import Link from 'next/link';
import Contimg01 from '../../assets/images/contact-us/contact-from-image.jpg';

const serviceOptions = [
    'FF&E, Furniture And Flooring',
    'Sanitaryware',
    'Lighting',
    'Commercial Kitchens And Laundry',
    'Residential Kitchens',
    'Supermarket Equipment',
    'Warehouse And Storage Requirements',
    'General Enquiry',
    'Service Support',
];

const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'fa-brands fa-facebook-f' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'fa-brands fa-instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'fa-brands fa-linkedin-in' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'fa-brands fa-youtube' },
];

export default function Contact() {
    return (
        <>
            <div className="contact-form">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-8">
                            <div className="contact-form-inner">
                                <div className="contact-form-heading">
                                    <h2>Send Us Your Enquiry</h2>
                                    <p>
                                        Have a project requirement, showroom enquiry or service request? Share your
                                        details with us and our team will get back to you with the right support.
                                    </p>
                                </div>
                                <form action="#">
                                    <div className="inquiry-form-group-one">
                                        <label htmlFor="contact-name">
                                            <i className="fa-regular fa-user" aria-hidden="true" />
                                            <span className="visually-hidden">Your Name</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <label htmlFor="contact-mobile">
                                            <i className="fa-solid fa-phone" aria-hidden="true" />
                                            <span className="visually-hidden">Your Mobile Number</span>
                                        </label>
                                        <input
                                            id="contact-mobile"
                                            type="tel"
                                            name="mobile"
                                            className="form-control"
                                            placeholder="Your Mobile Number"
                                            required
                                        />
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <label htmlFor="contact-email">
                                            <i className="fa-regular fa-envelope" aria-hidden="true" />
                                            <span className="visually-hidden">Your Email</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-service">
                                            <i className="fa-solid fa-layer-group" aria-hidden="true" />
                                            <span className="visually-hidden">Select Service</span>
                                        </label>
                                        <select
                                            id="contact-service"
                                            name="service"
                                            className="loan-type"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Service
                                            </option>
                                            {serviceOptions.map((label) => (
                                                <option key={label} value={label}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <label htmlFor="contact-location">
                                            <i className="fa-solid fa-location-dot" aria-hidden="true" />
                                            <span className="visually-hidden">Project Location</span>
                                        </label>
                                        <input
                                            id="contact-location"
                                            type="text"
                                            name="project_location"
                                            className="form-control"
                                            placeholder="Project Location"
                                            required
                                        />
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <label htmlFor="contact-message">
                                            <i className="fa-solid fa-message" aria-hidden="true" />
                                            <span className="visually-hidden">Your Message</span>
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows={4}
                                            className="form-control"
                                            placeholder="Your Message Here"
                                            defaultValue=""
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-secondary">
                                            Get A Quote <i className="flaticon-next" aria-hidden="true" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-right">
                                <h3>Say Hi To Alshaya Enterprises</h3>
                                <Image src={Contimg01} alt="Contact"/>
                                <div className="contact-details">
                                    <p>
                                        Have questions about interior solutions, commercial equipment or project
                                        requirements? Our team is here to guide you with suitable products, technical
                                        support and complete project solution advice.
                                    </p>
                                    <p>
                                        We are committed to helping clients create smart, functional and elegant
                                        spaces across residential, commercial, hospitality, healthcare, education, retail,
                                        warehousing and specialized project sectors.
                                    </p>
                                </div>
                                <h4>Social Media</h4>
                                <ul className="contact-social-media">
                                    {socialLinks.map(({ label, href, icon }) => (
                                        <li key={label}>
                                            <Link
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={label}
                                                aria-label={label}
                                            >
                                                <i className={icon} aria-hidden="true" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
