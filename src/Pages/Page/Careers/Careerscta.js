import Image from 'next/image';
import Carctaimg from '../../../assets/images/about/ceo-image-small.png';

export default function Careerscta() {
    return (
        <>
            <div className="careers-cta-section">
                <div className="container">
                    <div className="careers-cta-title text-center">
                        <h2>
                            Untitled truly values work-life balance. we work hard for you and
                            deliver, but at the end of the day you can switch off
                        </h2>
                    </div>
                    <div className="ceo-details">
                        <Image src={Carctaimg} alt="ceo-image" layout='intrinsic'/>
                        <div className="ceo-details-inner">
                            <p>Zachary</p>
                            <span>CEO, Loanlift</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}