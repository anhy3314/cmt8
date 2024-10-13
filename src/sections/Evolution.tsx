import imgSrc from '../assets/images/cmt8/bg-db-cmt8.jpg'
import EvolutionTimeline from '../components/evolutionTimeline'
import '../styles/styles.css'

export default function Evolution() {
    return (
        <div className="container" id='Advancement'>
            <img src={imgSrc} className='img2' />
            <div className='headline-2'>
                <div className='main-text-2'>Diễn biến chính</div>
            </div>
            <EvolutionTimeline />
        </div>
    )
}