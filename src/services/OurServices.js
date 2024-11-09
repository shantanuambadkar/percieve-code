import '../css/App.css'
import ServicesCards from './cards/ServicesCards'

export default function OurServices(){
    return (
        <div className='our-services-container'>
            <div className='common-padding'>
                <div className='services-text'>
                    We are an award-winning, certified, 360-degree digital-first advertising agency in Mumbai, MH, India.
                </div>
                <div className='services-text'>
                    We offer complete end-to-end solutions that drives meaningful results for our clients.
                </div>
                <div className='services-text-big common-top-margin'>
                    WHAT WE DO
                </div>
                <div className='common-padding'>
                    <ServicesCards/>
                </div>
            </div>
        </div>
    )
}