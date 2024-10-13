import img33 from '../assets/images/cmt8/yn-bac-doc-ban-tuyen-ngon.jpg'
import img34 from '../assets/images/cmt8/yn-cqm.jpg'
import img35 from '../assets/images/cmt8/yn-chuyenminh.jpg'

export type ResultContent = {
    title: string,
    image: string,
    content: string,
}

export const ResultContents: ResultContent[] = [
    {
        title: 'Tuyên bố độc lập'
        , image: img33
        ,content: `Vào ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn độc lập, khẳng định sự ra đời của nước Việt Nam Dân chủ Cộng hòa. Đây là sự kiện đánh dấu một bước ngoặt vĩ đại trong lịch sử dân tộc, chấm dứt hơn 80 năm ách thống trị của thực dân Pháp và phát xít Nhật.`
    },
    {
        title: 'Thành lập chính quyền mới',
         image: img34, 
         content: `Sau khi giành chính quyền, Mặt trận Việt Minh đã thành lập chính quyền mới, với các cơ quan Nhà nước hoạt động theo thể chế dân chủ. Người dân lần đầu tiên có quyền tham gia vào các hoạt động chính trị, thể hiện ý chí và nguyện vọng của mình.`
    },
    {
        title: 'Sự chuyển mình của đất nước', 
        image: img35,
        content: `Cuộc cách mạng đã tạo ra một nền tảng vững chắc cho sự phát triển của đất nước. Việt Nam bắt đầu xây dựng một xã hội mới, thực hiện các chính sách nhằm cải cách kinh tế, xã hội và giáo dục, tạo điều kiện cho sự phát triển bền vững trong tương lai.`
    },

]