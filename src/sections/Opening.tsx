import imgSrc from '../assets/images/cmt8/bg-opening-2.jpg'
import '../styles/styles.css'
export default function Opening() {

    return (
        <div className='container' id='Opening'>
            <img src={imgSrc} className='img1' />
            <div className='headline-1'>
                <div className='sub-text' >Bước ngoặt lịch sử của dân tộc Việt Nam.</div>
                <div className='main-text-1'>Cách Mạng Tháng 8</div>
            </div>
            <div className='description-1'>
                <p>
                Tháng 8 năm 1945, dưới sự lãnh đạo của Đảng Cộng sản Đông Dương và Mặt trận Việt Minh, nhân dân Việt Nam đã đứng lên giành chính quyền, đánh dấu sự kết thúc ách thống trị của thực dân Pháp và phát xít Nhật, mở ra kỷ nguyên độc lập cho dân tộc.
                </p>
            </div>
        </div>
    )
}