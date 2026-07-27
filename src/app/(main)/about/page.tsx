import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">Về Math Academy</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Nền tảng học toán trực tuyến hàng đầu dành cho học sinh THPT tại Việt Nam.
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 mb-12 border border-blue-100 dark:border-blue-800/50">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mt-0">Sứ mệnh của chúng tôi</h2>
          <p className="text-blue-800 dark:text-blue-200">
            Mang đến cơ hội tiếp cận giáo dục chất lượng cao, hoàn toàn miễn phí cho mọi học sinh trên mọi miền tổ quốc. 
            Chúng tôi tin rằng mọi học sinh đều có tiềm năng giỏi Toán nếu được hướng dẫn đúng phương pháp.
          </p>
        </div>

        <h3>Tại sao chọn Math Academy?</h3>
        <ul>
          <li><strong>Hệ thống bài giảng chất lượng:</strong> Được biên soạn bởi đội ngũ giáo viên giỏi, giàu kinh nghiệm luyện thi.</li>
          <li><strong>Ngân hàng câu hỏi khổng lồ:</strong> Hàng ngàn bài tập từ cơ bản đến vận dụng cao, có đáp án và lời giải chi tiết.</li>
          <li><strong>Công nghệ hiện đại:</strong> Giao diện tối ưu, trải nghiệm học tập mượt mà, hỗ trợ hiển thị công thức Toán học chuẩn xác (KaTeX).</li>
          <li><strong>Theo dõi tiến độ:</strong> Hệ thống phân tích kết quả học tập giúp học sinh nhận biết điểm mạnh, điểm yếu để cải thiện.</li>
        </ul>

        <h3>Đội ngũ phát triển</h3>
        <p>
          Math Academy được xây dựng và phát triển bởi những kỹ sư phần mềm tâm huyết với nền giáo dục nước nhà, kết hợp cùng các thầy cô giáo chuyên Toán.
        </p>
      </div>
    </div>
  );
}
