"use client";

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
