export interface StoryChapter {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  quote?: string;
  content: string[];
  keyHighlights: string[];
  images: {
    url: string;
    caption: string;
    aspect?: 'square' | 'video' | 'portrait';
  }[];
  stat?: {
    value: string;
    label: string;
  };
}

export interface NotificationItem {
  id: number;
  name: string;
  role: string;
  location: string;
  action: string;
  timeAgo: string;
  avatar: string;
}

export const ZALO_GROUP_LINK = "https://zalo.me/g/lwlrya789";
export const HOTLINE = "0329088730";
export const HOTLINE_DISPLAY = "0329 088 730";

// Authentic image assets provided by user
export const IMAGES = {
  // Portrait & Brand Profile
  profilePortrait: "https://i.postimg.cc/4yq2QyyS/ed13e782-1f2a-49ee-9241-7ca8104ca1c4.png",
  profileBlouse: "https://i.postimg.cc/x8TbYqB9/W1.jpg",
  profileWork: "https://i.postimg.cc/HnZ8Ld1f/W2.jpg",
  profileBanner: "https://i.postimg.cc/4yNhZnjJ/W3.jpg",
  profileSmile: "https://i.postimg.cc/sxDZy1bf/W4.jpg",
  
  // Chapter 1: Nữ hộ sinh BV Thủ Đức
  nurseStory: "https://i.postimg.cc/PrXMr51X/T1.png",
  nurseAlt: "https://i.postimg.cc/tgpq8wLD/T1.png",
  familyPhoto: "https://i.postimg.cc/zf8z4697/T2.png",
  realPharmacy: "https://i.postimg.cc/4yNhZnjJ/W3.jpg",
  
  // Chapter 2: Mẹ 4 con & 7 năm Đại học Dược
  studyStory: "https://i.postimg.cc/15mK53Dy/T2.png",
  studyAlt: "https://i.postimg.cc/zf8z4697/T2.png",
  studyGraduation: "https://i.postimg.cc/0jFX0jj4/hinh-2.png",
  
  // Chapter 3: Nhà thuốc Phúc An 5 & Thử thách sau dịch
  pharmacyStory: "https://i.postimg.cc/RVSTVZwZ/T3.png",
  pharmacyAlt: "https://i.postimg.cc/PqTX09B3/T3.png",
  pharmacyCounter: "https://i.postimg.cc/66mPXjc7/hinh-3.png",
  
  // Chapter 4: Học công nghệ & AI
  techStory: "https://i.postimg.cc/Dyvcyw12/T4.png",
  techAlt: "https://i.postimg.cc/1zsmb2Lv/T4.png",
  techLaptop: "https://i.postimg.cc/BZVz0YpF/hinh-4.png",
  techLearning: "https://i.postimg.cc/DZFtvbFJ/hinh-4.png",
  
  // Chapter 5: Bốn bức tường mở rộng & Chăm sóc Ruột - Gan - Máu
  expandStory: "https://i.postimg.cc/bNm9GfRs/T5.png",
  expandAlt: "https://i.postimg.cc/TPfdBFZs/T5.png",
  healthCare: "https://i.postimg.cc/ZYMQS7Hr/hinh-5.png",
  healthWork: "https://i.postimg.cc/76VjfYYZ/hinh-5.png",
  
  // Chapter 6: Đồng hành đội nhóm Dược sĩ
  teamStory: "https://i.postimg.cc/PrSQLnM8/T6.png",
  teamAlt: "https://i.postimg.cc/7LwHjdFr/T6.png",
  teamMeeting: "https://i.postimg.cc/59RrV7g3/hinh-6.png",
  teamWork: "https://i.postimg.cc/rmJ7KFFs/hinh-6.png",
  
  // Chapter 7: Giám đốc Toàn quốc & Chuyến đi Hà Nội - Sa Pa
  awardStory: "https://i.postimg.cc/TYtJyvcb/T7.png",
  awardAlt: "https://i.postimg.cc/Bv4SRkr4/T7.png",
  awardTrophy: "https://i.postimg.cc/kMpHm1s1/hinh-8.png",
  sapaTrip: "https://i.postimg.cc/jdF0H56g/V1.jpg",
  awardCeremony: "https://i.postimg.cc/9XLv2Mkh/59.png",
  
  // Chapter 8: Sứ mệnh 1.000 chị em
  missionStory: "https://i.postimg.cc/CLcsZp4q/T8.png",
  missionAlt: "https://i.postimg.cc/TPfdBFzG/T8.png",
  missionCelebration: "https://i.postimg.cc/Kc0dbzWb/60.png",
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "nu-ho-sinh",
    tag: "Chặng đường 1 · Khởi nguồn từ trái tim",
    title: "Tôi Từng Là Một Nữ Hộ Sinh Tại Bệnh Viện Quận Thủ Đức",
    subtitle: "8 năm gắn bó, mỗi ngày đi về 80 cây số, thức dậy từ 4 giờ sáng và bài học đầu đời về sự hiện diện giữa con người với con người.",
    quote: "Trong khoảnh khắc vượt cạn đau đớn nhất, ngoài chuyên môn y tế, người phụ nữ chỉ cần một bàn tay ấm và ánh mắt cho họ biết: 'Chị không phải vượt cạn một mình'.",
    content: [
      "Trước khi trở thành Dược sĩ Trịnh Thủy của ngày hôm nay, tôi từng có 8 năm công tác tại Khoa Sản – Bệnh viện quận Thủ Đức. Đó là những năm tháng vô cùng đặc biệt đã tôi luyện nên y đức và lòng trắc ẩn trong tôi.",
      "Tôi từng đứng cạnh rất nhiều người phụ nữ trong thời khắc thiêng liêng nhất đời người. Có người kiên cường, có người run rẩy rơi nước mắt, có người đau quá chỉ biết siết thật chặt bàn tay tôi. Và rồi, sau tất cả những nhọc nhằn ấy là tiếng khóc chào đời trong trẻo của một đứa trẻ. Nhìn người mẹ kiệt sức bỗng nở nụ cười rạng rỡ, tôi yêu nghề từ những khoảnh khắc chân thực như thế.",
      "Thế nhưng, mỗi ngày tôi phải thức từ 4 giờ sáng, vượt qua quãng đường 80km cả đi lẫn về để đến bệnh viện. Ở nhà, tôi có 4 đứa con thơ đang mong ngóng mẹ từng giờ. Sau 8 năm gồng gánh, tôi hiểu mình không thể có mặt ở tất cả mọi nơi cùng một lúc. Tôi quyết định rời bệnh viện – không phải vì hết yêu nghề, mà vì có 4 đứa trẻ đang cần tôi làm mẹ nhiều hơn."
    ],
    keyHighlights: [
      "8 năm công tác tại Khoa Sản – BV quận Thủ Đức",
      "80 km di chuyển mỗi ngày, thức dậy từ 4h sáng",
      "Quyết định lớn vì 4 người con thơ cần mẹ bên cạnh"
    ],
    images: [
      {
        url: IMAGES.nurseStory,
        caption: "Những năm tháng tôi luyện y đức và sự thấu cảm tại Khoa Sản – BV quận Thủ Đức"
      },
      {
        url: "https://i.postimg.cc/4yNhZnjJ/W3.jpg",
        caption: "Dược sĩ Trịnh Thủy – Hành trình phụng sự sức khỏe cộng đồng và gia đình"
      }
    ],
    stat: {
      value: "8 Năm",
      label: "Cống hiến tại Khoa Sản Bệnh viện"
    }
  },
  {
    id: "me-4-con-7-nam-hoc-duoc",
    tag: "Chặng đường 2 · Nghị lực của người mẹ",
    title: "Người Mẹ 4 Con & 7 Năm Miệt Mài Trên Giảng Đường Đại Học Dược",
    subtitle: "Từ giã bệnh viện, thu mình bên góc bếp và con thơ, rồi chọn bước tiếp vì ước mơ tiếp tục chăm sóc sức khỏe cho cộng đồng.",
    quote: "Có những hành trình không cần mình đi thật nhanh. Chỉ cần những ngày muốn bỏ cuộc nhất, mình vẫn chọn bước thêm một bước.",
    content: [
      "Rời bệnh viện, cuộc sống tôi quanh quẩn chăm sóc 4 đứa con. Phụ nữ nào từng ở nhà bỉm sữa cũng hiểu: mình thương con vô bờ, nhưng sâu thẳm vẫn khát khao được làm việc, được có ích cho xã hội. Tôi tự hỏi: Liệu có con đường nào giúp tôi vừa được ở gần các con, vừa tiếp tục phụng sự sức khỏe?",
      "Và tôi chọn đi học lại ngành Dược. Khi đã là mẹ của 4 con, quay lại giảng đường không còn như tuổi đôi mươi. Tôi vừa là sinh viên, vừa là mẹ bỉm. Đến giờ học thì gửi con cho bà ngoại rồi phóng xe đi, tan học lại vội vã lao về lo cơm nước, kèm con học.",
      "Hành trình ấy kéo dài ròng rã suốt 7 năm trời tại Đại học Dược Lạc Hồng. Có những đêm mệt rã rời, những trang sách nhòe đi vì kiệt sức. Nhưng rồi tôi tự nhủ: Mình không học để chứng minh điều gì với ai, mình học để có một nghề tử tế lo cho các con. Bằng tất cả nỗ lực, tôi vinh dự 2 lần nhận học bổng và giấy khen của trường, tốt nghiệp với tấm bằng Dược sĩ danh giá."
    ],
    keyHighlights: [
      "7 năm bền bỉ vừa nuôi 4 con vừa học Đại học Dược Lạc Hồng",
      "2 lần nhận học bổng & giấy khen thành tích xuất sắc",
      "Biết ơn người mẹ và gia đình đã luôn là điểm tựa"
    ],
    images: [
      {
        url: IMAGES.studyGraduation,
        caption: "Ngày nhận bằng tốt nghiệp Đại học Dược Lạc Hồng - Thành quả của 7 năm không bỏ cuộc"
      },
      {
        url: IMAGES.studyStory,
        caption: "Những trang giáo trình đẫm mồ hôi và nghị lực của người mẹ 4 con"
      }
    ],
    stat: {
      value: "7 Năm",
      label: "Đèn sách kiên trì tại ĐH Dược"
    }
  },
  {
    id: "nha-thuoc-phuc-an-5",
    tag: "Chặng đường 3 · Thách thức thương trường",
    title: "Nhà Thuốc Phúc An 5 Ra Đời & Thử Thách Của Dược Sĩ Truyền Thống",
    subtitle: "Khai trương sau đại dịch COVID-19, đối mặt sự bùng nổ của chuỗi nhà thuốc lớn và thói quen tìm kiếm thông tin trên mạng xã hội.",
    quote: "Tôi có chuyên môn, tư vấn rất có tâm khi khách đứng trước mặt. Nhưng khi họ bước ra khỏi cửa, mối liên kết gần như bị cắt đứt hoàn toàn.",
    content: [
      "Cầm tấm bằng Dược trên tay, tôi mở Nhà thuốc Phúc An 5. Tôi từng nghĩ rất đơn giản: Cứ mở cửa, đón khách, lắng nghe, tư vấn tận tâm, bán thuốc chuẩn, đúng liều, giá hợp lý thì khách hàng sẽ luôn bên mình.",
      "Nhưng Phúc An 5 ra đời đúng thời điểm hậu COVID-19: kinh tế khó khăn, các chuỗi nhà thuốc hiện đại mọc lên san sát. Đặc biệt, hành vi khách hàng thay đổi hoàn toàn: người ta lướt TikTok, Facebook, Google tìm hiểu bệnh lý trước khi đến nhà thuốc; người ta nhắn Zalo hỏi thuốc; người ta xem video để chọn chuyên gia đáng tin cậy.",
      "Trong khi đó, tôi vẫn là một dược sĩ truyền thống đứng thu mình sau tủ thuốc kính. Tôi không biết Marketing, không biết làm hình ảnh, không biết giữ data khách hàng. Và điều lớn nhất khiến tôi rụt rè: Tôi rất sợ công nghệ và sợ máy tính."
    ],
    keyHighlights: [
      "Mở Nhà thuốc Phúc An 5 phục vụ bằng cái tâm người làm ngành y",
      "Đứng trước nguy cơ tụt lại phía sau khi thị trường dịch chuyển Online",
      "Nỗi trăn trở: 'Nếu không thay đổi, 3-5 năm nữa nhà thuốc sẽ đi về đâu?'"
    ],
    images: [
      {
        url: IMAGES.pharmacyCounter,
        caption: "Nhà thuốc Phúc An 5 - Nơi gắn bó với từng khách hàng thân quen"
      },
      {
        url: IMAGES.pharmacyStory,
        caption: "Lắng nghe và tư vấn chuẩn liều với tâm huyết người làm y tế"
      }
    ],
    stat: {
      value: "18+ Năm",
      label: "Kinh nghiệm thực tiễn ngành y dược"
    }
  },
  {
    id: "vuot-qua-noi-so-cong-nghe",
    tag: "Chặng đường 4 · Bước ngoặt đột phá",
    title: "Khi Thứ Mình Sợ Nhất Lại Chính Là Thứ Mình Phải Học",
    subtitle: "Từ người sợ máy tính, ngại quay video, tôi bắt đầu học lại từ đầu: Facebook, Zalo, Canva, Video và bước vào thế giới AI, ChatGPT.",
    quote: "80km mỗi ngày mình từng đi, 4h sáng từng dậy, 7 năm học Dược còn vượt qua được, lẽ nào hôm nay tôi chịu đầu hàng một cái máy tính?",
    content: [
      "Đứng trước câu hỏi: 'Nếu 3 năm nữa vẫn làm theo cách cũ thì Phúc An 5 sẽ ra sao?', tôi quyết định không trốn tránh nữa. Ở độ tuổi mà nhiều người nghĩ chỉ cần yên ổn làm việc, tôi một lần nữa trở thành học trò.",
      "Tôi học từng cú nhấp chuột máy tính, học giao diện Facebook, Zalo, Canva, tập viết kịch bản và đứng trước ống kính quay video. Rồi tôi tiếp cận AI và ChatGPT để tự động hóa công việc, tối ưu nội dung sức khỏe khoa học.",
      "Những ngày đầu thật sự bối rối: quay video thì ngượng ngùng, đăng bài không ai xem thì buồn, thao tác người ta làm vài phút thì tôi phải hỏi đi hỏi lại. Nhưng tôi không ép mình phải thành chuyên gia sau một đêm. Tôi chỉ tự nhủ: Hôm nay biết thêm một chút so với hôm qua là được. Và từng bước, tôi đã làm chủ công nghệ!"
    ],
    keyHighlights: [
      "Làm chủ máy tính, Canva, Capcut, Zalo & mạng xã hội",
      "Ứng dụng AI & ChatGPT tạo nội dung chăm sóc sức khỏe chuẩn y khoa",
      "Xây dựng hệ thống quản lý Data khách hàng tự động và chu đáo"
    ],
    images: [
      {
        url: IMAGES.techLaptop,
        caption: "Miệt mài học hỏi công nghệ và ứng dụng AI vào thực tế nhà thuốc"
      },
      {
        url: IMAGES.techStory,
        caption: "Từ e ngại công nghệ đến tự tin làm chủ các công cụ chuyển đổi số"
      }
    ],
    stat: {
      value: "100%",
      label: "Tự chủ công nghệ & ứng dụng AI"
    }
  },
  {
    id: "bon-buc-tuong-rong-ra",
    tag: "Chặng đường 5 · Mở rộng tầm vóc",
    title: "Bốn Bức Tường Nhà Thuốc Bắt Đầu 'Rộng' Ra",
    subtitle: "Chuyển từ bán thuốc đơn thuần sang Giải Pháp Chăm Sóc Sức Khỏe Chủ Động: Thanh Lọc Ruột – Gan – Máu kết hợp Y học cổ truyền.",
    quote: "Online không làm tôi rời bỏ nhà thuốc. Ngược lại, Online giúp tôi nhìn thấy một cách làm nghề bao dung và chạm đến nhiều cuộc đời hơn.",
    content: [
      "Trước đây, muốn tư vấn cho ai, tôi phải đợi họ bước qua cánh cửa nhà thuốc. Muốn làm việc, tôi phải có mặt tại nhà thuốc 12 tiếng mỗi ngày. Online đã đập tan giới hạn ấy.",
      "Một video hướng dẫn dinh dưỡng của tôi giờ đây có thể giúp ích cho hàng nghìn người ở khắp các tỉnh thành. Tôi xây dựng hướng đi chuyên sâu cho Nhà thuốc Phúc An 5: Chăm sóc sức khỏe chủ động, tập trung vào thanh lọc Ruột – Gan – Máu, điều hòa huyết áp, mỡ máu, tiểu đường, acid uric và cân nặng thông qua kết hợp Dược học hiện đại với Y học cổ truyền lành tính.",
      "Đặc biệt, Online trả lại cho tôi điều quý giá nhất: THỜI GIAN. Nhờ có quy trình và công nghệ hỗ trợ, tôi vừa chăm sóc khách hàng từ xa chu đáo, vừa có thời gian đồng hành cùng gia đình và các con đang tuổi trưởng thành."
    ],
    keyHighlights: [
      "Định vị giải pháp chăm sóc sức khỏe chủ động: Ruột - Gan - Máu",
      "Kết hợp Y học hiện đại, dinh dưỡng liệu pháp và thảo dược cổ truyền",
      "Chăm sóc khách hàng đa kênh, giải phóng thời gian gò bó"
    ],
    images: [
      {
        url: IMAGES.healthCare,
        caption: "Tập trung giải pháp chăm sóc sức khỏe chủ động cho người bệnh mãn tính"
      },
      {
        url: IMAGES.expandStory,
        caption: "Bốn bức tường mở rộng không giới hạn khoảng cách địa lý"
      }
    ],
    stat: {
      value: "63",
      label: "Tỉnh thành có khách hàng đồng hành"
    }
  },
  {
    id: "dong-hanh-cung-chi-em",
    tag: "Chặng đường 6 · Chia sẻ & Nâng đỡ",
    title: "Từ Người Cần Được Chỉ Dẫn Đến Người Trao Cần Câu Cho Chị Em Dược Sĩ",
    subtitle: "Không giữ lại cho riêng mình, tôi quay lại cầm tay chỉ việc cho những người đồng nghiệp đang loay hoay trước kỷ nguyên số.",
    quote: "Cái này Thủy làm được rồi, để Thủy chỉ lại cho chị. Không cần đi một mình, chúng ta có thể cùng nhau học và tiến bước.",
    content: [
      "Sau khi làm được cho chính nhà thuốc của mình, tôi nhìn thấy rất nhiều chị em dược sĩ ngoài kia vẫn đang mắc kẹt y hệt tôi ngày trước: có chuyên môn vững, có tâm sáng, nhưng nhà thuốc vắng khách, sợ công nghệ và không biết bắt đầu từ đâu.",
      "Tôi bắt đầu mở các buổi chia sẻ nhỏ. Không phải với tư cách một chuyên gia cao siêu, mà là một người đi trước một bước chia sẻ cho người đi sau: 'Hôm nay đăng gì?', 'Nút này bấm ở đâu?', 'Làm sao quay video tự nhiên không run?', 'Làm thế nào chăm khách sau bán thuốc?'.",
      "Từ một vài người ban đầu, tôi đã kết nối và đồng hành cùng nhóm hơn 20 chị em dược sĩ từ Bắc chí Nam. Những người phụ nữ từng sợ hãi trước chiếc máy tính nay đã tự tin làm video, ứng dụng AI, đưa nhà thuốc lên Online một cách đàng hoàng, tử tế."
    ],
    keyHighlights: [
      "Đồng hành cầm tay chỉ việc thực chiến cho dược sĩ truyền thống",
      "Phương pháp: Không LiveStream, Không Cày View, Không Ôm Hàng, Không Ship Hàng, Không Đa Cấp",
      "Xây dựng cộng đồng nữ dược sĩ đoàn kết, san sẻ và cùng tiến bộ"
    ],
    images: [
      {
        url: IMAGES.teamMeeting,
        caption: "Những buổi gặp gỡ, kết nối đầy năng lượng cùng chị em Dược sĩ toàn quốc"
      },
      {
        url: IMAGES.teamStory,
        caption: "Cùng học, cùng làm và cùng tháo gỡ từng nút thắt công nghệ"
      }
    ],
    stat: {
      value: "20+",
      label: "Dược sĩ nòng cốt chuyển đổi số thành công"
    }
  },
  {
    id: "giam-doc-toan-quoc-sa-pa",
    tag: "Chặng đường 7 · Quả ngọt & Vươn xa",
    title: "Danh Hiệu Giám Đốc Toàn Quốc & Chuyến Đi Hà Nội – Sa Pa Trong Mơ",
    subtitle: "Dấu mốc khẳng định: Một người phụ nữ từng sợ máy tính, một nhà thuốc nhỏ nơi ngõ phố vẫn có thể tạo nên kỳ tích khi kiên trì cho đi.",
    quote: "Chuyến đi Sa Pa không chỉ là một phần thưởng du lịch. Nó là tiếng chuông nhắc tôi: 'Thủy à, thế giới bên ngoài còn rộng lớn lắm, hãy tiếp tục đi và trao đi'.",
    content: [
      "Tôi chưa bao giờ bắt đầu vì một danh vị. Tôi chỉ nghĩ đơn giản mình biết gì thì giúp nấy. Nhưng bằng sự đồng lòng của đội nhóm và sự tin yêu của cộng đồng, tôi vinh dự đạt cấp bậc Giám Đốc Toàn Quốc.",
      "Phần thưởng là chuyến hành trình Hà Nội – Sa Pa hùng vĩ. Đứng giữa mây trời Tây Bắc, cảm xúc trong tôi vỡ òa. Trong suốt nhiều năm ròng rã, thế giới của tôi chỉ vỏn vẹn trong 4 bức tường: Phòng sinh bệnh viện, gác trọ chăm con, giảng đường đại học và nhà thuốc nhỏ.",
      "Tôi chưa bao giờ dám mơ rằng công việc này lại cho tôi cơ hội vừa sống trọn vẹn với nghề, vừa được đi đến những vùng đất diệu kỳ và gặp gỡ những con người tuyệt vời đến thế. Đó là minh chứng sống động rằng nỗ lực chân chính luôn được đền đáp xứng đáng."
    ],
    keyHighlights: [
      "Vinh danh cấp bậc Giám Đốc Toàn Quốc danh giá",
      "Chuyến đi thưởng Hà Nội – Sa Pa đánh dấu bước trưởng thành vượt bậc",
      "Minh chứng cho nghị lực phi thường của người phụ nữ làm chủ cuộc đời"
    ],
    images: [
      {
        url: IMAGES.awardCeremony,
        caption: "Khoảnh khắc được vinh danh Giám Đốc Toàn Quốc trước hàng trăm đồng nghiệp"
      },
      {
        url: IMAGES.sapaTrip,
        caption: "Đứng giữa đất trời Sa Pa - Chuyến đi ghi dấu ước mơ thành hiện thực"
      }
    ],
    stat: {
      value: "Top 1",
      label: "Giám Đốc Toàn Quốc xuất sắc"
    }
  },
  {
    id: "su-menh-1000-duoc-si",
    tag: "Chặng đường 8 · Sứ mệnh cuộc đời",
    title: "Đi Một Vòng Rất Dài Để Trở Về Với Hai Chữ: ĐỒNG HÀNH",
    subtitle: "Mục tiêu hỗ trợ 1.000 chị em dược sĩ truyền thống trên cả nước bứt phá khỏi giới hạn, tự chủ thời gian và kinh tế.",
    quote: "Thành công lớn nhất không phải mình đã đi được bao xa, mà là trên con đường mình đi, đã có thêm bao nhiêu người có thể cùng tiến về phía trước.",
    content: [
      "Cuộc đời tôi đã bước qua rất nhiều cánh cửa: Cánh cửa phòng sinh, cánh cửa ngôi nhà có 4 đứa trẻ gọi mình là mẹ, cánh cửa giảng đường Đại học Dược, cánh cửa Nhà thuốc Phúc An 5, và giờ là cánh cửa Online không còn bốn bức tường giới hạn.",
      "Và dù đứng ở đâu, kim chỉ nam của tôi vẫn là lời dặn từ cô nữ hộ sinh năm xưa: 'Đừng chỉ nhìn thấy một ca bệnh hay một đơn thuốc, hãy nhìn thấy con người ở phía sau nó'.",
      "Hôm nay, mục tiêu lớn nhất của cuộc đời tôi là: Đồng hành và hỗ trợ 1.000 chị em dược sĩ trên khắp Việt Nam. Giúp họ tự tin bước ra khỏi nỗi sợ công nghệ, làm chủ nhà thuốc thời đại mới, tăng thu nhập và tìm lại sự tự do đích thực bên gia đình thân yêu."
    ],
    keyHighlights: [
      "Sứ mệnh phụng sự: Đồng hành cùng 1.000 nữ dược sĩ toàn quốc",
      "Triết lý cốt lõi: 'Trao sức khỏe – Nhận niềm tin' bằng sự tử tế trọn vẹn",
      "Cam kết chia sẻ 100% quy trình thực chiến không giấu nghề"
    ],
    images: [
      {
        url: IMAGES.missionCelebration,
        caption: "Cộng đồng những người phụ nữ cùng nhau tỏa sáng và tự chủ"
      },
      {
        url: IMAGES.missionStory,
        caption: "Hành trình kết nối yêu thương và trao giá trị cho cộng đồng"
      }
    ],
    stat: {
      value: "1.000",
      label: "Mục tiêu Dược sĩ đồng hành"
    }
  }
];

export const PHUC_AN_PILLARS = [
  {
    icon: "Pill",
    title: "Dược Sĩ Hơn 18 Năm Kinh Nghiệm",
    description: "Có nền tảng chuyên môn Dược sâu rộng cùng bề dày thực tiễn tư vấn và chăm sóc khách hàng qua hàng chục nghìn trường hợp thực tế.",
    points: [
      "Tốt nghiệp Đại học Dược Lạc Hồng chính quy",
      "8 năm kinh nghiệm y tế tại Khoa Sản Bệnh viện Thủ Đức",
      "Liên tục cập nhật kiến thức Dược lý & Dược lâm sàng mới nhất"
    ]
  },
  {
    icon: "UserCheck",
    title: "Tư Vấn 1:1 – Cá Nhân Hóa Toàn Diện",
    description: "Lắng nghe kỹ lưỡng từng tình trạng, thói quen sinh hoạt và bệnh sử trước khi đưa ra phác đồ hướng dẫn cụ thể cho từng cá nhân.",
    points: [
      "Không tư vấn theo rập khuôn máy móc",
      "Kèm cặp, theo dõi chỉ số sức khỏe định kỳ hàng tuần",
      "Sẵn sàng giải đáp 24/7 mọi lo lắng về tương tác thuốc"
    ]
  },
  {
    icon: "HeartPulse",
    title: "Chuyên Gia Hỗ Trợ Thanh Lọc Ruột – Gan – Máu",
    description: "Đồng hành cùng khách hàng quan tâm đến cân nặng, ổn định đường huyết, mỡ máu, huyết áp cao và giảm đau do acid uric (Gout).",
    points: [
      "Tập trung vào gốc rễ chuyển hóa: Ruột sạch - Gan khỏe - Máu thông",
      "Giải pháp phục hồi tế bào tự nhiên, an toàn lâu dài",
      "Giúp giảm phụ thuộc quá mức vào các loại thuốc giảm triệu chứng"
    ]
  },
  {
    icon: "Leaf",
    title: "Kết Hợp Đa Nền Tảng: Dược – Dinh Dưỡng – Đông Y",
    description: "Ứng dụng hài hòa kiến thức Tây y hiện đại, Dinh dưỡng trị liệu và Y học cổ truyền, thảo dược lành tính trong quá trình phục hồi.",
    points: [
      "Dược học hiện đại chuẩn liều - an toàn",
      "Dinh dưỡng bữa ăn hàng ngày điều chỉnh chuyển hóa",
      "Thảo dược thiên nhiên bồi bổ tạng phủ từ bên trong"
    ]
  }
];

export const REGISTERED_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    name: "Ds. Mai Phương",
    role: "Chủ Nhà thuốc Mai Phương",
    location: "Hải Dương",
    action: "vừa tham gia nhóm Zalo hỗ trợ",
    timeAgo: "2 phút trước",
    avatar: "https://images.unsplash.com/photo-1594824813628-9a3d46377317?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Ds. Thanh Hằng",
    role: "Nhà thuốc An Tâm",
    location: "Đà Nẵng",
    action: "vừa nhận trọn bộ tài liệu Ứng dụng AI",
    timeAgo: "4 phút trước",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Ds. Nguyễn Kim Oanh",
    role: "Nhà thuốc Phúc Lộc",
    location: "Bình Dương",
    action: "vừa đăng ký nhận lộ trình 1:1 cùng Ds. Thủy",
    timeAgo: "6 phút trước",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Ds. Lê Thu Hương",
    role: "Nhà thuốc Minh Khang",
    location: "Hà Nội",
    action: "vừa vào nhóm Zalo nhận quà tài liệu miễn phí",
    timeAgo: "8 phút trước",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Ds. Bích Ngọc",
    role: "Nhà thuốc Tâm Đức",
    location: "Cần Thơ",
    action: "vừa nhận quy trình chăm sóc khách Ruột - Gan - Máu",
    timeAgo: "11 phút trước",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Ds. Hoàng Yến",
    role: "Nhà thuốc Á Châu",
    location: "Nghệ An",
    action: "vừa kết nối với Dược sĩ Trịnh Thủy",
    timeAgo: "15 phút trước",
    avatar: "https://images.unsplash.com/photo-1594824813628-9a3d46377317?w=100&auto=format&fit=crop&q=80"
  }
];

export const GALLERY_IMAGES = [
  {
    url: IMAGES.studyGraduation,
    title: "Lễ Tốt Nghiệp Đại Học Dược Lạc Hồng",
    category: "Học tập & Danh hiệu",
    description: "Dấu ấn 7 năm miệt mài vượt khó của người mẹ 4 con"
  },
  {
    url: IMAGES.awardCeremony,
    title: "Vinh Danh Cấp Bậc Giám Đốc Toàn Quốc",
    category: "Thành tựu",
    description: "Trái ngọt từ sự sẻ chia và tinh thần đồng đội"
  },
  {
    url: IMAGES.sapaTrip,
    title: "Chuyến Du Lịch Hà Nội - Sa Pa",
    category: "Trải nghiệm",
    description: "Thế giới mở ra khi người phụ nữ dám bước ra khỏi vùng an toàn"
  },
  {
    url: IMAGES.awardTrophy,
    title: "Cúp & Bằng Khen Cống Hiến",
    category: "Học tập & Danh hiệu",
    description: "Ghi nhận đóng góp cho cộng đồng chăm sóc sức khỏe"
  },
  {
    url: IMAGES.teamMeeting,
    title: "Kết Nối Đội Ngũ Dược Sĩ Toàn Quốc",
    category: "Đồng hành",
    description: "Cùng nhau học tập, đưa nhà thuốc truyền thống lên Online"
  },
  {
    url: IMAGES.pharmacyCounter,
    title: "Nhà Thuốc Phúc An 5",
    category: "Nhà thuốc",
    description: "Nơi trao gửi sức khỏe và nhận lại trọn vẹn niềm tin của bà con"
  },
  {
    url: IMAGES.techLaptop,
    title: "Ứng Dụng AI & Chuyển Đổi Số",
    category: "Công nghệ",
    description: "Học tập mỗi ngày để phụng sự khách hàng tốt hơn"
  },
  {
    url: IMAGES.missionCelebration,
    title: "Hành Trình Lan Tỏa Giá Trị 1.000 Chị Em",
    category: "Sứ mệnh",
    description: "Đồng hành để cùng nhau bước về phía trước"
  }
];
