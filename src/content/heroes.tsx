import bac from '../assets/images/cmt8/nvtb/bac.jpg'
import tc from '../assets/images/cmt8/nvtb/tc.jpg'
import vng from '../assets/images/cmt8/nvtb/vng.jpg'
import ntt from '../assets/images/cmt8/nvtb/ntt.jpg'
export type HeroContent = {
    title: string,
    content: string,
    image: string,
}

export const HeroContents: HeroContent[] = [
    {
        title: 'Chủ tịch Hồ Chí Minh (1890-1969)',
        content: 'Chủ tịch Hồ Chí Minh là một nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam, là linh hồn của cuộc Cách mạng tháng 8, Người đã viết và đọc bản Tuyên ngôn Độc lập Việt Nam khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945 tại quảng trường Ba Đình, Hà Nội.',
        image: bac,
    },
    {
        title: 'Nhà cách mạng Trường Chinh (1907-1988)',
        content: 'Nhà cách mạng Trường Chinh là Tổng Bí thư của Đảng Cộng sản Đông Dương trong cuộc Cách mạng tháng 8. Trước thềm của cuộc cách mạng, tại Hội nghị toàn quốc của Đảng, ông được cử phụ trách Ủy ban Khởi nghĩa toàn quốc',
        image: tc,
    },
    {
        title: 'Võ Nguyên Giáp (1911–2013)',
        content: 'Võ Nguyên Giáp 1911-2013 là người đã thành lập và lãnh đạo Đội Việt Nam tuyên truyền giải phóng quân (22-12-1944) và là một trong những người góp công thành lập nước Việt Nam Dân Chủ Cộng Hòa.',
        image: vng,
    },
    {
        title: 'Nhà cách mạng Nguyễn Thị Thập (1908-1996)',
        content: 'Nhà cách mạng Nguyễn Thị Thập là người lãnh đạo cuộc khởi nghĩa giành chính quyền tại tỉnh Mỹ Tho trong Cách mạng tháng 8. Sau cách mạng, bà được bầu làm Đại biểu Quốc hội khóa I nước Việt Nam Dân chủ cộng hòa.',
        image: ntt,
    },
]
