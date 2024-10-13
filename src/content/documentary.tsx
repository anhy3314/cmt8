import img23 from '../assets/images/cmt8/h1.jpg'
import img24 from '../assets/images/cmt8/cmt8-h2.jpg'
import img25 from '../assets/images/cmt8/pbc.jpg'
import img26 from '../assets/images/cmt8/muathucm.jpg'
import img27 from '../assets/images/cmt8/nandoi.jpg'
export type DocumentaryContent = {
    name: string,
    description: string,
    image: string,
    url: string,
}

export const DocumentaryContents: DocumentaryContent[] = [
    {
        name: `[Video] Tư liệu`,
        description: `
NGỌN LỬA từ TRO TÀN mở đường KHAI SINH đất nước Việt Nam`,
        image: img23,
        url: `https://www.youtube.com/watch?v=AZnl7qGPwHk`,

    },
    {
        name: `[Video] CÁCH MẠNG THÁNG 8 VÀ NỀN ĐỘC LẬP CHO VIỆT NAM`,
        description: ``,
        image: img24,
        url: `https://www.youtube.com/watch?v=ILbPXBv15GQ`,

    },
    {
        name: `[Video] Phan Bội Châu, Người Tiên Phong Cho Tư Tưởng Chống Pháp Không Theo Phong Kiến`,
        description: ``,
        image: img25,
        url: `https://www.youtube.com/watch?v=cIIeezm-zVY`,

    },
    {
        name: `[Video] 19/8/1945 - MÙA THU CÁCH MẠNG`,
        description: ``,
        image: img26,
        url: `https://www.youtube.com/watch?v=fQb6hLWvl-c`,

    },
    {
        name: `[Video] Toàn Cảnh Nạn Đói 1945 Ở Việt Nam`,
        description: ``,
        image: img27,
        url: `https://www.youtube.com/watch?v=v5gjkFVfzzU`,

    },

]