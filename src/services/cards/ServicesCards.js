import '../../css/App.css'
import adbanner from '../../images/adbanner.png';
import oobhead from '../../images/oobhead.png';
import confetti from '../../images/confetti.png';
import webscreen from '../../images/webscreen.png';
import graphicdesigning from '../../images/graphicdesigning.png'
import saleschart from '../../images/saleschart.png';
import videocamera from '../../images/videocamera.png';

export default function ServicesCards(){

    return (
        <div>
            <div className='flex-container'>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={oobhead} alt='Out of the box head' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Creative Concept & Execution
                        </div>
                        <div className='card-text'>
                            Expert Conceptualization and Impeccable Execution for Your Brand.
                        </div>
                    </div>
                </div>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={adbanner} alt='Ad Banner' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Media Buying
                        </div>
                        <div className='card-text'>
                            We offer funnel driven Media Buying solution that generates higher ROI for Your Company.
                        </div>
                    </div>
                </div>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={saleschart} alt='Sales chart' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Brand Identity
                        </div>
                        <div className='card-text'>
                            We offer funnel driven Media Buying solution that generates higher ROI for Your Company.
                        </div>
                    </div>
                </div>
            </div>
            {/* Line 2 */}
            <div className='flex-container common-top-margin'>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={webscreen} alt='Web screen' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Web Design & Development
                        </div>
                        <div className='card-text'>
                            Expert Conceptualization and Impeccable Execution for Your Brand.
                        </div>
                    </div>
                </div>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={confetti} alt='Confetti' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Event & Activation
                        </div>
                        <div className='card-text'>
                            We offer funnel driven Media Buying solution that generates higher ROI for Your Company.
                        </div>
                    </div>
                </div>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={graphicdesigning} alt='Graphic designing' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Creative & Copyrighting
                        </div>
                        <div className='card-text'>
                            We offer funnel driven Media Buying solution that generates higher ROI for Your Company.
                        </div>
                    </div>
                </div>
            </div>
            {/* Line 3 */}
            <div className='flex-container common-top-margin'>
                <div className='card-main-container card-container'>
                    <div>
                        <img src={videocamera} alt='Video camera' />
                    </div>
                    <div className='common-left-text'>
                        <div className='card-text-big'>
                            Graphic Designing & Video production
                        </div>
                        <div className='card-text'>
                            Expert in designing graphics & video production from Your Product.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}