import imgSrc from '../assets/images/cmt8/bg-ynls.jpg'
import LogisticsCardSection from '../components/logisticsCardSection'
import '../styles/styles.css'
export default function Logistics() {
    return (
        <div className="container" id='Logistics'>
            <img src={imgSrc} className='img3' />
            <div className='headline-2'>
                <div className='main-text-1'>Ý nghĩa lịch sữ</div>
            </div>
            <LogisticsCardSection />
        </div>
    )
}