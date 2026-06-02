"use client";
import React, { useState } from "react";
import Link from "next/link";
import Bgimg from "../../../assets/images/background/features-bg-three.jpg";
import Bgimg01 from "../../../assets/images/features-video-thumb.jpg";

export default function Featuresone() {
    const [ytshow, setytshow] = useState(false);

    return (
        <>
            <div className="features-three features">
                <div className="container">
                    <div className="row gutter-y-30 justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div
                                className="features-box-three"
                                style={{ backgroundImage: `url(${Bgimg.src})` }}
                            >
                                <h4>Get in touch with our team for personalized support and expert guidance.</h4>
                                <Link href="/Contactus" className="btn btn-outline-secondary">
                                    Connect To Team <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div
                                className="features-box-three features-box-three-middel"
                                style={{ backgroundImage: `url(${Bgimg01.src})` }}
                            >
                                <div className="features-video">
                                    <div className="features-video-info">
                                      
                                        <div>
                                            <p>Explore Our Expertise</p>
                                            <p
                                                style={{
                                                    marginTop: "6px",
                                                    marginBottom: 0,
                                                    fontSize: "20px",
                                                    fontWeight: 700,
                                                    lineHeight: 1.3,
                                                    textAlign: "left",
                                                    color: "var(--loanlift-text-light)",
                                                }}
                                            >
                                                Delivering Projects with Excellence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <form action="#" className="features-three-form" onSubmit={(e) => e.preventDefault()}>
                                <h3>What Do You Need?</h3>
                                <div
                                    className="features-three-form-content features-consultation-fields"
                                    style={{ textAlign: "left", marginTop: "8px" }}
                                >
                                    <div style={{ marginBottom: "18px" }}>
                                        <label
                                            htmlFor="support-project-type"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Project Type
                                        </label>
                                        <input
                                            id="support-project-type"
                                            type="text"
                                            name="projectType"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <label
                                            htmlFor="support-service-required"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Service Required
                                        </label>
                                        <input
                                            id="support-service-required"
                                            type="text"
                                            name="serviceRequired"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <label
                                            htmlFor="support-project-location"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Project Location
                                        </label>
                                        <input
                                            id="support-project-location"
                                            type="text"
                                            name="projectLocation"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <label
                                            htmlFor="support-timeline"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Timeline
                                        </label>
                                        <input
                                            id="support-timeline"
                                            type="text"
                                            name="timeline"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ marginBottom: "18px" }}>
                                        <label
                                            htmlFor="support-name"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="support-name"
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                    <div style={{ marginBottom: "24px" }}>
                                        <label
                                            htmlFor="support-phone"
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "15px",
                                                color: "var(--loanlift-text-black)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            id="support-phone"
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-secondary">
                                    Request Consultation <i className="flaticon-next" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {ytshow && (
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytshow(false)} />
                        <iframe
                            src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                            allowFullScreen
                            title="See How We Work"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
