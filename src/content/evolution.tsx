import FastfoodIcon from '@mui/icons-material/Fastfood';
import { ReactNode } from "react";
export type EvolutionContent = {
    title: string,
    content: string,
    time: string,
    icon: ReactNode
}
export const EvolutionContents: EvolutionContent[] = [
    {
        title: `Cuộc khởi nghĩa tại Hà Nội`,
        content: `Vào tháng 8/1945, tình hình chính trị tại Hà Nội diễn ra rất căng thẳng. Sau khi Nhật Bản đầu hàng, chính quyền thân Nhật không còn đủ sức mạnh để kiểm soát tình hình. Trong bối cảnh đó, nhân dân Hà Nội, dưới sự lãnh đạo của Mặt trận Việt Minh, đã quyết định khởi nghĩa giành chính quyền. Ngày 19/8/1945, hàng triệu người dân Hà Nội đã tập trung xuống đường biểu tình, yêu cầu giành lại quyền lực. Đảng viên Việt Minh cùng các lực lượng cách mạng tổ chức các đội tự vệ và triển khai kế hoạch chiếm giữ các cơ quan đầu não của chính quyền như Đài phát thanh, trụ sở các bộ, và các cơ quan hành chính khác. Cuộc khởi nghĩa tại Hà Nội diễn ra rất nhanh chóng và hiệu quả. Chỉ trong một ngày, lực lượng cách mạng đã chiếm giữ thành công nhiều cơ quan, buộc chính quyền thực dân và thân Nhật phải đầu hàng. Đây chính là bước ngoặt quan trọng, đánh dấu sự khởi đầu cho cuộc cách mạng giành chính quyền trên toàn quốc.`,
        time: `19/8/1945`,
        icon: (<FastfoodIcon />),
    },
    {
        title: ` Cuộc khởi nghĩa tại Huế và Sài Gòn`,
        content: `Sau thành công tại Hà Nội, cuộc khởi nghĩa tiếp tục diễn ra mạnh mẽ tại Huế. Ngày 23/8/1945, hàng chục ngàn người dân Huế đã tập trung và biểu tình, yêu cầu chính quyền thực dân từ bỏ quyền lực. Các đội quân tự vệ đã nhanh chóng chiếm lĩnh các cơ quan công quyền, như Tòa Thị chính, Nhà Công vụ và các cơ quan hành chính khác. Tại Sài Gòn, vào ngày 25/8/1945, hàng chục ngàn người dân cũng đã đổ về trung tâm thành phố. Với sự tổ chức chặt chẽ của Việt Minh, người dân đã tiến hành biểu tình và bao vây các cơ quan chính quyền, khiến chính quyền thân Nhật không còn khả năng phản kháng. Cuộc khởi nghĩa ở Sài Gòn đã kết thúc với sự đầu hàng của chính quyền, tạo điều kiện thuận lợi cho việc thành lập chính quyền mới.`,
        time: `23/8/1945 - 25/8/1945 `,
        icon: (<FastfoodIcon />),

    },
    {
        title: `Các cuộc khởi nghĩa ở các tỉnh thành`,
        content: `Sau thành công tại Hà Nội, Huế và Sài Gòn, làn sóng khởi nghĩa đã nhanh chóng lan rộng ra các tỉnh thành khác trên cả nước. Từ Bắc vào Nam, nhiều địa phương đã tổ chức các cuộc khởi nghĩa, đấu tranh giành chính quyền. Các cuộc khởi nghĩa tại Nam Định, Thái Bình, Hải Phòng, và nhiều tỉnh miền Trung, miền Nam đã diễn ra sôi nổi. Những cuộc khởi nghĩa này đều đạt được những thắng lợi quan trọng, đánh dấu sự thất bại của chính quyền thực dân và thân Nhật. Qua đó, người dân khẳng định được quyền tự quyết của mình. Đến cuối tháng 8/1945, lực lượng cách mạng đã kiểm soát được hầu hết các tỉnh thành, tạo đà cho việc tuyên bố độc lập vào ngày 2/9/1945.`,
        time: `14/8/1945 - 28/8/1945`,
        icon: (<FastfoodIcon />),

    },
]