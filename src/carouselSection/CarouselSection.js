import '../css/App.css'
import perceiveLogo from '../images/perceiveLogo.svg';


export default function CarouselSection(){
    return(
        <div className='common-padding carousel-container'>
            <div>
                <img src={perceiveLogo} className='logo-margin' alt="Perceive Logo"/>
            </div>
            {/* <div className='services-text'>
                Be Inspired by the Best.
            </div> */}
        </div>
    )
}