"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";

const MOCK_COURSE = {
  id: "1",
  title: "Toán 12 - Ôn Thi THPT Quốc Gia",
  description: "Khóa học toàn diện bao gồm toàn bộ chương trình Toán 12, giúp học sinh nắm chắc kiến thức cơ bản và rèn luyện kỹ năng giải bài tập từ dễ đến khó.",
  stats: { students: 1250, rating: 4.8, duration: "24 giờ" },
  chapters: [
    {
      id: "c1", title: "Chương 1: Ứng dụng đạo hàm để khảo sát hàm số",
      lessons: [{ id: "l1", title: "Sự đồng biến, nghịch biến" }, { id: "l2", title: "Cực trị của hàm số" }, { id: "l3", title: "Giá trị lớn nhất và nhỏ nhất" }]
    },
    {
      id: "c2", title: "Chương 2: Hàm số lũy thừa, hàm số mũ và lôgarit",
      lessons: [{ id: "l4", title: "Lũy thừa" }, { id: "l5", title: "Hàm số mũ" }, { id: "l6", title: "Logarit" }]
    },
    {
      id: "c3", title: "Chương 3: Nguyên hàm - Tích phân và ứng dụng",
      lessons: [{ id: "l7", title: "Nguyên hàm" }, { id: "l8", title: "Tích phân" }]
    }
  ]
};

export default function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div className="hidden md:block w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">Nội dung khóa học</h2>
        </div>
        <div className="p-4 space-y-4">
          {MOCK_COURSE.chapters.map(chapter => (
            <div key={chapter.id}>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{chapter.title}</h3>
              <ul className="space-y-1 ml-4 border-l-2 border-slate-100 dark:border-slate-700">
                {chapter.lessons.map(lesson => (
                  <li key={lesson.id} className="pl-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded cursor-pointer" onClick={() => router.push(`/courses/${courseId}/lessons/${lesson.id}`)}>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{lesson.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{MOCK_COURSE.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">{MOCK_COURSE.description}</p>
          
          <div className="flex gap-6 mb-8 text-slate-700 dark:text-slate-300">
            <div><strong>Học viên:</strong> {MOCK_COURSE.stats.students}</div>
            <div><strong>Đánh giá:</strong> {MOCK_COURSE.stats.rating}/5</div>
            <div><strong>Thời lượng:</strong> {MOCK_COURSE.stats.duration}</div>
          </div>

          <button onClick={() => router.push(`/courses/${courseId}/lessons/${MOCK_COURSE.chapters[0].lessons[0].id}`)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            Bắt đầu học ngay
          </button>
        </div>
      </div>
    </div>
  );
}
