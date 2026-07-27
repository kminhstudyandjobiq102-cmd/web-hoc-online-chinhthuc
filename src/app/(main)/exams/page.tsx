"use client";

import React, { useState } from "react";
import { ExamCard } from "@/components/shared/ExamCard";
import { motion } from "framer-motion";

const MOCK_EXAMS = [
  { id: "1", title: "Đề thi Thử THPT QG 2024 - Đề 1", difficulty: "hard" as const, questionCount: 50, duration: 90 },
  { id: "2", title: "Kiểm tra 1 tiết Đại số chương 1", difficulty: "medium" as const, questionCount: 25, duration: 45 },
  { id: "3", title: "Ôn tập Học kì 1 Toán 12", difficulty: "easy" as const, questionCount: 50, duration: 90 },
  { id: "4", title: "Đề thi Thử THPT QG 2024 - Đề 2", difficulty: "hard" as const, questionCount: 50, duration: 90 },
];

export default function ExamsPage() {
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
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Luyện Đề</h1>
      
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
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

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOCK_EXAMS.filter(e => filter === "Tất cả" || e.difficulty === mapFilterToDifficulty(filter)).map(exam => (
          <motion.div key={exam.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ExamCard {...exam} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
