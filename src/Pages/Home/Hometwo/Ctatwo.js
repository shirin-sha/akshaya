import Image from 'next/image';
import Ctaimg01 from '../../../assets/images/cta/cta-3.jpg';
import Ctaimg02 from '../../../assets/images/cta/cta-4.jpg';


export default function Ctatwo() {
    return (
        <>
            <div className="cta-two">
                <div className="container-fluid">
                    <div className="cta-two-box-one">
                        <div className="cta-two-category-box">
                            <h2 className="cta-two-category-title">Your business needs</h2>
                            <span>
                                <Image
                                    className="cta-two-category-img"
                                    src={Ctaimg01}
                                    alt="cta-two-category-img-4"
                                    layout='intrinsic'
                                />
                            </span>
                        </div>
                    </div>
                    <div className="cta-two-box-two">
                        <div className="cta-two-category-box">
                            <span>
                                <Image
                                    className="cta-two-category-img"
                                    src={Ctaimg02}
                                    alt="cta-two-category-img-5"
                                    layout='intrinsic'
                                />
                            </span>
                            <h2 className="cta-two-category-title">Ensuring consistent</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}