"use client";

import React, { useState } from "react";
import { CourseCard } from "@/components/shared/CourseCard";
import { SearchBar } from "@/components/shared/SearchBar";
import { motion } from "framer-motion";

const MOCK_COURSES = [
  { id: "1", title: "Toán 12 Cơ bản", description: "Ôn tập toàn diện kiến thức cơ bản", videoCount: 20, exerciseCount: 150, difficulty: "easy" as const, icon: "book" },
  { id: "2", title: "Hàm số và Đồ thị", description: "Chuyên đề hàm số luyện thi", videoCount: 15, exerciseCount: 100, difficulty: "medium" as const, icon: "activity" },
  { id: "3", title: "Tích phân Vận dụng cao", description: "Giải quyết các bài toán khó", videoCount: 10, exerciseCount: 50, difficulty: "hard" as const, icon: "infinity" },
  { id: "4", title: "Hình học Không gian", description: "Hình học không gian lớp 12", videoCount: 25, exerciseCount: 200, difficulty: "hard" as const, icon: "box" },
  { id: "5", title: "Đại số Tổ hợp", description: "Xác suất và tổ hợp", videoCount: 12, exerciseCount: 80, difficulty: "easy" as const, icon: "calculator" },
  { id: "6", title: "Số phức Cơ bản & Nâng cao", description: "Toàn tập về số phức", videoCount: 18, exerciseCount: 120, difficulty: "medium" as const, icon: "sigma" },
];

export default function CoursesPage() {
  const [filter, setFilter] = useState("Tất cả");
  const filters = ["Tất cả", "Cơ bản", "Trung bình", "Nâng cao", "Vận dụng cao"];
  
  const mapFilterToDifficulty = (f: string) => {
    if (f === "Cơ bản") return "easy";
    if (f === "Trung bình") return "medium";
    if (f === "Nâng cao" || f === "Vận dụng cao") return "hard";
    return "";
  };

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
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
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
        {MOCK_COURSES.filter(c => filter === "Tất cả" || c.difficulty === mapFilterToDifficulty(filter)).map(course => (
          <motion.div key={course.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <CourseCard {...course} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
