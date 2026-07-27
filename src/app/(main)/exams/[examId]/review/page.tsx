"use client";

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
