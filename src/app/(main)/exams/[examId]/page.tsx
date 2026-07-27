"use client";

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
