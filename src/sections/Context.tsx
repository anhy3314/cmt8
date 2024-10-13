import img25 from '../assets/images/cmt8/bg-bcls.jpg';
import ContextSection from '../components/contextSection';
export default function Context() {
    return (
        <div className='container' id='Context'>
            <img src={img25} className='img5' />
            <div className='headline-2'>
                <div className='main-text-2'>Bối cảnh lịch sữ</div>
            </div>
            <ContextSection />
        </div>
    )
}