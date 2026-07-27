"use client";

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
