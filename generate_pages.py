import os

base_dir = r'c:\Users\ADMIN\Documents\WEBHOCONL\src\app'

files = {
r'(auth)\layout.tsx': '''import React from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 bg-[url('/grid.svg')] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Link href="/">
          <Logo className="h-12 w-auto" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          Math Academy
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-800 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200 dark:border-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
}
''',

r'(auth)\login\page.tsx': '''"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <div className="mt-1">
            <input type="email" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mật khẩu</label>
          <div className="mt-1">
            <input type="password" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">Ghi nhớ đăng nhập</label>
          </div>
          <div className="text-sm">
            <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Quên mật khẩu?</Link>
          </div>
        </div>
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Đăng nhập"}
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">Hoặc</span>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full flex justify-center py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-xl shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
            Đăng nhập với Google
          </button>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Chưa có tài khoản? <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">Đăng ký ngay</Link>
      </p>
    </div>
  );
}
''',

r'(auth)\register\page.tsx': '''"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Họ và tên</label>
          <div className="mt-1">
            <input type="text" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <div className="mt-1">
            <input type="email" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Mật khẩu</label>
          <div className="mt-1">
            <input type="password" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Đăng ký"}
          </button>
        </div>
      </form>
      <div className="mt-6">
        <button className="w-full flex justify-center py-2 px-4 border border-slate-300 dark:border-slate-600 rounded-xl shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
          Đăng ký với Google
        </button>
      </div>
      <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Đã có tài khoản? <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">Đăng nhập</Link>
      </p>
    </div>
  );
}
''',

r'(auth)\forgot-password\page.tsx': '''"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">Đã gửi email</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Vui lòng kiểm tra email của bạn để nhận link đặt lại mật khẩu.
        </p>
        <div className="mt-6">
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Quay lại trang đăng nhập
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Đặt lại mật khẩu</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <div className="mt-1">
            <input type="email" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Gửi link đặt lại mật khẩu"}
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">Quay lại trang đăng nhập</Link>
      </p>
    </div>
  );
}
''',

r'(main)\courses\page.tsx': '''"use client";

import React, { useState } from "react";
import { CourseCard } from "@/components/shared/CourseCard";
import { SearchBar } from "@/components/shared/SearchBar";
import { motion } from "framer-motion";

const MOCK_COURSES = [
  { id: "1", title: "Toán 12 Cơ bản", difficulty: "Cơ bản", image: "/course-1.jpg" },
  { id: "2", title: "Hàm số và Đồ thị", difficulty: "Trung bình", image: "/course-2.jpg" },
  { id: "3", title: "Tích phân Vận dụng cao", difficulty: "Vận dụng cao", image: "/course-3.jpg" },
  { id: "4", title: "Hình học Không gian", difficulty: "Nâng cao", image: "/course-4.jpg" },
  { id: "5", title: "Đại số Tổ hợp", difficulty: "Cơ bản", image: "/course-5.jpg" },
  { id: "6", title: "Số phức Cơ bản & Nâng cao", difficulty: "Trung bình", image: "/course-6.jpg" },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("Tất cả");
  const filters = ["Tất cả", "Cơ bản", "Trung bình", "Nâng cao", "Vận dụng cao"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Khóa Học</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar placeholder="Tìm kiếm khóa học..." />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOCK_COURSES.filter(c => filter === "Tất cả" || c.difficulty === filter).map(course => (
          <motion.div key={course.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <CourseCard {...course} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
''',

r'(main)\courses\[courseId]\page.tsx': '''"use client";

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
''',

r'(main)\courses\[courseId]\lessons\[lessonId]\page.tsx': '''"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { NoteEditor } from "@/components/shared/NoteEditor";
import { PDFViewer } from "@/components/shared/PDFViewer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MOCK_LESSON = {
  id: "l1",
  title: "Sự đồng biến, nghịch biến của hàm số",
  description: "Bài giảng lý thuyết và bài tập về tính đơn điệu của hàm số.",
  videoUrl: "https://example.com/video.mp4",
  pdfUrl: "https://example.com/doc.pdf"
};

export default function LessonPage({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
  const { courseId, lessonId } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("notes");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Main Learning Area */}
      <div className="flex-1 flex flex-col">
        <div className="w-full bg-black aspect-video">
          <VideoPlayer url={MOCK_LESSON.videoUrl} />
        </div>
        
        <div className="p-6 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{MOCK_LESSON.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">{MOCK_LESSON.description}</p>
        </div>

        <div className="flex gap-4 p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <button onClick={() => setActiveTab("notes")} className={`pb-2 px-1 ${activeTab === "notes" ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-slate-500"}`}>Ghi chú</button>
          <button onClick={() => setActiveTab("docs")} className={`pb-2 px-1 ${activeTab === "docs" ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-slate-500"}`}>Tài liệu</button>
          <button onClick={() => setActiveTab("exercise")} className={`pb-2 px-1 ${activeTab === "exercise" ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : "text-slate-500"}`}>Bài tập</button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-slate-50 dark:bg-slate-900">
          {activeTab === "notes" && <NoteEditor />}
          {activeTab === "docs" && <PDFViewer url={MOCK_LESSON.pdfUrl} />}
          {activeTab === "exercise" && <div className="text-slate-500 text-center py-10">Chưa có bài tập cho phần này.</div>}
        </div>
      </div>

      {/* Right Sidebar for Navigation */}
      <div className="w-full lg:w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex flex-col">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"><ChevronLeft className="w-5 h-5"/></button>
          <span className="font-medium text-slate-700 dark:text-slate-300">Bài 1 / 20</span>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"><ChevronRight className="w-5 h-5"/></button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="font-bold mb-4">Danh sách bài học</h3>
          {/* Mock list */}
          <div className="space-y-2">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg cursor-pointer">
              <div className="font-medium text-blue-700 dark:text-blue-400">Bài 1: Sự đồng biến...</div>
            </div>
            <div className="p-3 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent rounded-lg cursor-pointer">
              <div className="text-slate-700 dark:text-slate-300">Bài 2: Cực trị của hàm số</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
''',

r'(main)\exams\page.tsx': '''"use client";

import React, { useState } from "react";
import { ExamCard } from "@/components/shared/ExamCard";
import { motion } from "framer-motion";

const MOCK_EXAMS = [
  { id: "1", title: "Đề thi Thử THPT QG 2024 - Đề 1", difficulty: "Vận dụng cao", questionsCount: 50, duration: 90 },
  { id: "2", title: "Kiểm tra 1 tiết Đại số chương 1", difficulty: "Trung bình", questionsCount: 25, duration: 45 },
  { id: "3", title: "Ôn tập Học kì 1 Toán 12", difficulty: "Cơ bản", questionsCount: 50, duration: 90 },
  { id: "4", title: "Đề thi Thử THPT QG 2024 - Đề 2", difficulty: "Nâng cao", questionsCount: 50, duration: 90 },
];

export default function ExamsPage() {
  const [filter, setFilter] = useState("Tất cả");
  const filters = ["Tất cả", "Cơ bản", "Trung bình", "Nâng cao", "Vận dụng cao"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Luyện Đề</h1>
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOCK_EXAMS.filter(e => filter === "Tất cả" || e.difficulty === filter).map(exam => (
          <motion.div key={exam.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ExamCard {...exam} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
''',

r'(main)\exams\[examId]\page.tsx': '''"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import { Clock, HelpCircle, AlertCircle } from "lucide-react";

const MOCK_EXAM_DETAIL = {
  id: "1",
  title: "Đề thi Thử THPT QG 2024 - Đề 1",
  description: "Đề thi bám sát cấu trúc đề minh họa của Bộ GD&ĐT năm 2024. Đầy đủ các phần Đại số và Hình học.",
  difficulty: "Vận dụng cao",
  questionsCount: 50,
  duration: 90 // minutes
};

export default function ExamDetailPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = use(params);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{MOCK_EXAM_DETAIL.title}</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">{MOCK_EXAM_DETAIL.description}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex flex-col items-center">
            <AlertCircle className="text-orange-500 mb-2" />
            <span className="text-sm text-slate-500">Độ khó</span>
            <span className="font-semibold">{MOCK_EXAM_DETAIL.difficulty}</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex flex-col items-center">
            <HelpCircle className="text-blue-500 mb-2" />
            <span className="text-sm text-slate-500">Số câu hỏi</span>
            <span className="font-semibold">{MOCK_EXAM_DETAIL.questionsCount} câu</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex flex-col items-center">
            <Clock className="text-green-500 mb-2" />
            <span className="text-sm text-slate-500">Thời gian</span>
            <span className="font-semibold">{MOCK_EXAM_DETAIL.duration} phút</span>
          </div>
        </div>

        {!showConfirm ? (
          <button onClick={() => setShowConfirm(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
            Bắt đầu làm bài
          </button>
        ) : (
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-2">Xác nhận bắt đầu</h3>
            <p className="text-orange-700 dark:text-orange-400 mb-6">Bạn có chắc muốn bắt đầu? Sau khi bắt đầu thời gian sẽ tính liên tục và không thể dừng.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowConfirm(false)} className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50">Hủy</button>
              <button onClick={() => router.push(`/exams/${examId}/start`)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Bắt đầu ngay</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
''',

r'(main)\exams\[examId]\start\page.tsx': '''"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { KaTeXRenderer } from "@/components/shared/KaTeXRenderer";
import { Clock, Flag, ChevronLeft, ChevronRight } from "lucide-react";

const MOCK_QUESTIONS = Array.from({ length: 10 }).map((_, i) => ({
  id: `q${i+1}`,
  content: `Tìm tập xác định của hàm số $y = \\log_2(x^2 - 4x + 3)$`,
  options: [
    { id: "A", content: "$D = (-\\infty; 1) \\cup (3; +\\infty)$" },
    { id: "B", content: "$D = (1; 3)$" },
    { id: "C", content: "$D = [1; 3]$" },
    { id: "D", content: "$D = (-\\infty; 1] \\cup [3; +\\infty)$" }
  ]
}));

export default function ExamTakePage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = use(params);
  const router = useRouter();
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flags, setFlags] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(90 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSelectAnswer = (qId: string, optId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  const toggleFlag = (qId: string) => {
    setFlags(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const handleSubmit = () => {
    if(window.confirm("Bạn có chắc muốn nộp bài?")) {
      router.push(`/exams/${examId}/result`);
    }
  };

  const currentQ = MOCK_QUESTIONS[currentQIndex];

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Bar */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 h-16 flex items-center justify-between px-6 shrink-0">
        <div className="font-bold text-lg hidden sm:block">Thi Thử THPT QG 2024</div>
        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full font-mono text-xl text-blue-600 dark:text-blue-400 font-bold shadow-inner">
          <Clock className="w-5 h-5" /> {formatTime(timeLeft)}
        </div>
        <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
          Nộp bài
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Question Area */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Câu {currentQIndex + 1}</h2>
              <button 
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${flags.has(currentQ.id) ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <Flag className={`w-5 h-5 ${flags.has(currentQ.id) ? 'fill-orange-600' : ''}`} /> Đánh dấu
              </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8 text-lg">
              <KaTeXRenderer math={currentQ.content} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ.options.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectAnswer(currentQ.id, opt.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    answers[currentQ.id] === opt.id 
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-md' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-blue-400 bg-white dark:bg-slate-800'
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold shrink-0 ${
                      answers[currentQ.id] === opt.id ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {opt.id}
                    </div>
                    <div className="pt-1"><KaTeXRenderer math={opt.content} /></div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-12">
              <button 
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(prev => prev - 1)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl disabled:opacity-50 hover:bg-slate-50"
              >
                <ChevronLeft /> Câu trước
              </button>
              <button 
                disabled={currentQIndex === MOCK_QUESTIONS.length - 1}
                onClick={() => setCurrentQIndex(prev => prev + 1)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl disabled:opacity-50 hover:bg-slate-50"
              >
                Câu sau <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Palette */}
        <div className="w-72 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700 flex flex-col">
          <div className="p-4 font-bold border-b border-slate-200 dark:border-slate-700">Danh sách câu hỏi</div>
          <div className="p-4 grid grid-cols-5 gap-2 overflow-y-auto">
            {MOCK_QUESTIONS.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isFlagged = flags.has(q.id);
              const isCurrent = currentQIndex === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQIndex(idx)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium relative border-2 ${
                    isCurrent ? 'border-blue-600' : 'border-transparent'
                  } ${
                    isAnswered ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlagged && <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white dark:border-slate-800" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
''',

r'(main)\exams\[examId]\result\page.tsx': '''"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MOCK_RESULT = {
  score: 8.5,
  totalScore: 10,
  correct: 42,
  incorrect: 5,
  unanswered: 3,
  timeSpent: "75:30"
};

const data = [
  { name: "Đúng", value: MOCK_RESULT.correct, color: "#22c55e" },
  { name: "Sai", value: MOCK_RESULT.incorrect, color: "#ef4444" },
  { name: "Bỏ qua", value: MOCK_RESULT.unanswered, color: "#94a3b8" }
];

export default function ExamResultPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = use(params);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 text-center">
        <h1 className="text-3xl font-bold mb-8">Kết quả bài thi</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-blue-600">{MOCK_RESULT.score}</span>
              <span className="text-sm text-slate-500">/{MOCK_RESULT.totalScore}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
              <div className="text-slate-500 text-sm">Thời gian làm bài</div>
              <div className="font-bold text-xl">{MOCK_RESULT.timeSpent}</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <div className="text-green-600 dark:text-green-400 text-sm">Số câu đúng</div>
              <div className="font-bold text-xl text-green-700 dark:text-green-300">{MOCK_RESULT.correct}</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
              <div className="text-red-600 dark:text-red-400 text-sm">Số câu sai</div>
              <div className="font-bold text-xl text-red-700 dark:text-red-300">{MOCK_RESULT.incorrect}</div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
              <div className="text-slate-600 dark:text-slate-400 text-sm">Chưa làm</div>
              <div className="font-bold text-xl">{MOCK_RESULT.unanswered}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link href={`/exams/${examId}/review`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30">
            Xem đáp án chi tiết
          </Link>
          <Link href={`/exams/${examId}`} className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 rounded-xl font-bold">
            Làm lại
          </Link>
        </div>
      </div>
    </div>
  );
}
''',

r'(main)\exams\[examId]\review\page.tsx': '''"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { KaTeXRenderer } from "@/components/shared/KaTeXRenderer";
import { CheckCircle2, XCircle } from "lucide-react";

const MOCK_REVIEW_DATA = [
  {
    id: "q1",
    content: `Tìm tập xác định của hàm số $y = \\log_2(x^2 - 4x + 3)$`,
    options: [
      { id: "A", content: "$D = (-\\infty; 1) \\cup (3; +\\infty)$" },
      { id: "B", content: "$D = (1; 3)$" },
      { id: "C", content: "$D = [1; 3]$" },
      { id: "D", content: "$D = (-\\infty; 1] \\cup [3; +\\infty)$" }
    ],
    userAnswer: "A",
    correctAnswer: "A",
    explanation: "Hàm số xác định khi $x^2 - 4x + 3 > 0 \\Leftrightarrow x < 1$ hoặc $x > 3$."
  },
  {
    id: "q2",
    content: `Thể tích khối chóp có diện tích đáy $B$ và chiều cao $h$ là:`,
    options: [
      { id: "A", content: "$V = Bh$" },
      { id: "B", content: "$V = \\frac{1}{3}Bh$" },
      { id: "C", content: "$V = 3Bh$" },
      { id: "D", content: "$V = \\frac{1}{2}Bh$" }
    ],
    userAnswer: "A",
    correctAnswer: "B",
    explanation: "Công thức thể tích khối chóp là $V = \\frac{1}{3}Bh$."
  }
];

export default function ExamReviewPage() {
  const router = useRouter();
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Chi tiết đáp án</h1>
        <button onClick={() => router.back()} className="text-blue-600 hover:underline">Quay lại</button>
      </div>

      <div className="space-y-8">
        {MOCK_REVIEW_DATA.map((q, idx) => {
          const isCorrect = q.userAnswer === q.correctAnswer;
          return (
            <div key={q.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold text-lg">Câu {idx + 1}</span>
                {isCorrect ? (
                  <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-sm font-medium"><CheckCircle2 className="w-4 h-4"/> Đúng</span>
                ) : (
                  <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-sm font-medium"><XCircle className="w-4 h-4"/> Sai</span>
                )}
              </div>
              
              <div className="mb-6 text-lg">
                <KaTeXRenderer math={q.content} />
              </div>

              <div className="space-y-3 mb-6">
                {q.options.map(opt => {
                  let className = "p-4 rounded-xl border flex gap-4 ";
                  if (opt.id === q.correctAnswer) className += "border-green-500 bg-green-50 dark:bg-green-900/20";
                  else if (opt.id === q.userAnswer && !isCorrect) className += "border-red-500 bg-red-50 dark:bg-red-900/20";
                  else className += "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900";

                  return (
                    <div key={opt.id} className={className}>
                      <span className="font-bold">{opt.id}.</span>
                      <KaTeXRenderer math={opt.content} />
                    </div>
                  );
                })}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="font-bold text-blue-800 dark:text-blue-300 mb-2">Giải thích chi tiết:</div>
                <div className="text-blue-900 dark:text-blue-100"><KaTeXRenderer math={q.explanation} /></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
''',

r'(main)\rankings\page.tsx': '''"use client";

import React, { useState } from "react";
import { Trophy, Medal } from "lucide-react";

const MOCK_RANKINGS = Array.from({ length: 20 }).map((_, i) => ({
  rank: i + 1,
  name: `Nguyễn Văn ${String.fromCharCode(65 + i)}`,
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  score: 9500 - i * 150,
  examsTaken: 45 - i,
  avgScore: (9.5 - i * 0.1).toFixed(1)
}));

export default function RankingsPage() {
  const [filter, setFilter] = useState("Tuần này");

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <Trophy className="w-10 h-10 text-yellow-500" /> Bảng Xếp Hạng
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4">Cập nhật thành tích của các học viên xuất sắc nhất</p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {["Tuần này", "Tháng này", "Tất cả"].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-full font-medium ${filter === f ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Hạng</th>
              <th className="p-4 font-medium">Học viên</th>
              <th className="p-4 font-medium text-right">Tổng điểm</th>
              <th className="p-4 font-medium text-right hidden sm:table-cell">Số đề</th>
              <th className="p-4 font-medium text-right hidden md:table-cell">Điểm TB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {MOCK_RANKINGS.map((user) => (
              <tr key={user.rank} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="p-4">
                  {user.rank === 1 && <Medal className="w-8 h-8 text-yellow-500" />}
                  {user.rank === 2 && <Medal className="w-8 h-8 text-slate-400" />}
                  {user.rank === 3 && <Medal className="w-8 h-8 text-amber-600" />}
                  {user.rank > 3 && <span className="w-8 inline-block text-center font-bold text-slate-500">{user.rank}</span>}
                </td>
                <td className="p-4 flex items-center gap-4">
                  <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full bg-slate-100" />
                  <span className="font-semibold text-slate-900 dark:text-white">{user.name}</span>
                </td>
                <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">{user.score}</td>
                <td className="p-4 text-right text-slate-600 hidden sm:table-cell">{user.examsTaken}</td>
                <td className="p-4 text-right text-slate-600 hidden md:table-cell">{user.avgScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
''',

r'(main)\profile\page.tsx': '''"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BookOpen, Target, Clock, Award } from "lucide-react";

const MOCK_USER = {
  name: "Trần Tuấn Anh",
  email: "tuananh@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  joinedAt: "Tháng 9, 2023",
  stats: { avgScore: 8.5, videoWatched: 120, examsTaken: 45 }
};

const chartData = [
  { name: "Tuần 1", score: 6.5 },
  { name: "Tuần 2", score: 7.0 },
  { name: "Tuần 3", score: 7.5 },
  { name: "Tuần 4", score: 8.2 },
  { name: "Tuần 5", score: 8.5 },
];

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Profile */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-8 flex flex-col md:flex-row items-center gap-8">
        <img src={MOCK_USER.avatar} alt="Avatar" className="w-32 h-32 rounded-full bg-slate-100 ring-4 ring-blue-50 dark:ring-blue-900" />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold mb-2">{MOCK_USER.name}</h1>
          <p className="text-slate-500 mb-4">{MOCK_USER.email} • Tham gia {MOCK_USER.joinedAt}</p>
          <button className="px-6 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg font-medium transition-colors">
            Chỉnh sửa thông tin
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <Award className="w-8 h-8 text-blue-500 mb-2" />
          <div className="text-sm text-slate-500">Điểm TB</div>
          <div className="text-2xl font-bold">{MOCK_USER.stats.avgScore}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <BookOpen className="w-8 h-8 text-green-500 mb-2" />
          <div className="text-sm text-slate-500">Đề đã làm</div>
          <div className="text-2xl font-bold">{MOCK_USER.stats.examsTaken}</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <Target className="w-8 h-8 text-orange-500 mb-2" />
          <div className="text-sm text-slate-500">Mục tiêu</div>
          <div className="text-2xl font-bold">9.0+</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <Clock className="w-8 h-8 text-purple-500 mb-2" />
          <div className="text-sm text-slate-500">Video đã xem</div>
          <div className="text-2xl font-bold">{MOCK_USER.stats.videoWatched}</div>
        </div>
      </div>

      {/* Chart & History */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-lg mb-6">Tiến độ học tập</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} domain={[0, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-lg mb-6">Lịch sử luyện đề</h3>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div>
                  <div className="font-medium">Đề thi Thử THPT QG 2024 - Đề {i}</div>
                  <div className="text-sm text-slate-500">Hôm qua</div>
                </div>
                <div className="font-bold text-blue-600">{(9.0 - i*0.5).toFixed(1)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
''',

r'(main)\about\page.tsx': '''import React from "react";

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
''',

r'(main)\contact\page.tsx': '''"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">Đừng ngần ngại để lại lời nhắn nếu bạn cần hỗ trợ hoặc có góp ý</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><Mail className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Email</div>
                  <div className="font-medium">support@mathacademy.vn</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><Phone className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Điện thoại</div>
                  <div className="font-medium">1900 1234</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><MapPin className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Địa chỉ</div>
                  <div className="font-medium">123 Đường Toán Học, Quận 1, TP. HCM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Họ và tên</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Nguyễn Văn A" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Chủ đề</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Cần hỗ trợ lỗi nộp bài" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none" placeholder="Viết nội dung của bạn ở đây..."></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
              <Send className="w-5 h-5" /> Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
'''
}

for rel_path, content in files.items():
    full_path = os.path.join(base_dir, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Created: {full_path}')
