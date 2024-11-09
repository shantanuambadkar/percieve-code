import '../css/App.css'
import successman from '../images/successman.jpg';

export default function CarouselSection(){
    return(
        <div className='common-padding carousel-container'>
            <div>
                <img src={successman} alt="Successful man"/>
            </div>
            <div className='services-text'>
                Be Inspired by the Best.
            </div>
        </div>
    )
}