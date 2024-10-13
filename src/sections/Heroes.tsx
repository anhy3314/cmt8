import imgSrc from '../assets/images/cmt8/bg-yn.jpg';
import HeroesParallax from "../components/heroesParallax";

export default function Heroes() {
    return (
        <div className='container' id='Heroes'>
            <img src={imgSrc} className='img2' />
            <div className='headline-2'>
                <div className='main-text-3'>Các Nhân tố quan trọng</div>
            </div>
            <HeroesParallax />
        </div>

    )
}