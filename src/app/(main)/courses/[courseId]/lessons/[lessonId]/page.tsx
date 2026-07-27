"use client";

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
          <VideoPlayer id={MOCK_LESSON.id} src={MOCK_LESSON.videoUrl} />
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
          {activeTab === "notes" && <NoteEditor id={MOCK_LESSON.id} />}
          {activeTab === "docs" && <PDFViewer src={MOCK_LESSON.pdfUrl} title={MOCK_LESSON.title} />}
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
