"use client";

import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BookOpen, Target, Clock, Award, Sparkles, Loader2 } from "lucide-react";

const MOCK_USER = {
  name: "Trần Tuấn Anh",
  email: "tuananh@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  joinedAt: "Tháng 9, 2023",
  stats: { avgScore: 8.5, videoWatched: 120, examsTaken: 45, accuracy: 82.5 },
  wrongAnswers: [
    { id: 1, examTitle: "Phòng luyện đề Toán", questionContent: "Cho hàm số y = f(x)... Đồ thị hàm số có bao nhiêu điểm cực trị?", correctAnswer: "3", userAnswer: "2", type: "Toán (Trắc nghiệm)" },
    { id: 2, examTitle: "Phòng luyện đề ĐGNL-ĐGTD", questionContent: "Sự phân bố dân cư nước ta hiện nay có đặc điểm gì?", correctAnswer: "Tập trung đông ở đồng bằng", userAnswer: "Tập trung đông ở miền núi", type: "ĐGNL" },
    { id: 3, examTitle: "Phòng luyện đề Lý", questionContent: "Câu 1: Chu kỳ dao động điều hòa của con lắc đơn", correctAnswer: "T = 2π√(l/g)", userAnswer: "T = 2π√(g/l)", type: "Lý (Đúng/Sai)" },
  ]
};

const chartData = [
  { name: "Tuần 1", score: 6.5 },
  { name: "Tuần 2", score: 7.0 },
  { name: "Tuần 3", score: 7.5 },
  { name: "Tuần 4", score: 8.2 },
  { name: "Tuần 5", score: 8.5 },
];

export default function ProfilePage() {
  const [aiExplanations, setAiExplanations] = useState<Record<number, { text?: string; loading?: boolean }>>({});

  const handleAskAI = async (item: any) => {
    setAiExplanations(prev => ({ ...prev, [item.id]: { loading: true } }));
    
    try {
      const res = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionContent: item.questionContent,
          correctAnswer: item.correctAnswer,
          userAnswer: item.userAnswer,
          type: item.type
        })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setAiExplanations(prev => ({ ...prev, [item.id]: { text: data.explanation, loading: false } }));
      } else {
        setAiExplanations(prev => ({ ...prev, [item.id]: { text: `Lỗi: ${data.error}`, loading: false } }));
      }
    } catch (err) {
      setAiExplanations(prev => ({ ...prev, [item.id]: { text: 'Không thể kết nối với AI. Vui lòng thử lại sau.', loading: false } }));
    }
  };

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
          <div className="text-sm text-slate-500">Tỉ lệ chính xác</div>
          <div className="text-2xl font-bold">{MOCK_USER.stats.accuracy}%</div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center">
          <Clock className="w-8 h-8 text-purple-500 mb-2" />
          <div className="text-sm text-slate-500">Video đã xem</div>
          <div className="text-2xl font-bold">{MOCK_USER.stats.videoWatched}</div>
        </div>
      </div>

      {/* Biểu đồ & Lịch sử */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Biểu đồ điểm số */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-6">Thống kê Điểm số</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#2563EB', fontWeight: 'bold' }}
                />
                <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={3} dot={{ r: 4, fill: '#2563EB' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Luyện lại câu sai */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse"></span>
            Các Câu Làm Sai Cần Ôn Lại
          </h2>
          <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2">
            {MOCK_USER.wrongAnswers.map((item) => (
              <div key={item.id} className="p-4 rounded-xl border border-red-100 bg-red-50/50 hover:bg-red-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-md">{item.type}</span>
                  <span className="text-xs text-slate-500">{item.examTitle}</span>
                </div>
                <p className="text-sm font-medium text-slate-800 mb-3 line-clamp-2">{item.questionContent}</p>
                
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex items-start gap-2 text-red-600">
                    <span className="font-medium shrink-0">Bạn chọn:</span>
                    <span className="line-through">{item.userAnswer}</span>
                  </div>
                  <div className="flex items-start gap-2 text-green-600">
                    <span className="font-medium shrink-0">Đáp án đúng:</span>
                    <span>{item.correctAnswer}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                    Làm lại
                  </button>
                  <button 
                    onClick={() => handleAskAI(item)}
                    disabled={aiExplanations[item.id]?.loading}
                    className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-1 shadow-sm"
                  >
                    {aiExplanations[item.id]?.loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    Hỏi AI
                  </button>
                </div>
                
                {aiExplanations[item.id] && (aiExplanations[item.id].text || aiExplanations[item.id].loading) && (
                  <div className="mt-3 p-4 bg-white rounded-xl border border-blue-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
                    <div className="flex items-center gap-2 mb-2 text-blue-700">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-semibold text-sm">Gia sư AI giải thích:</span>
                    </div>
                    {aiExplanations[item.id].loading ? (
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-slate-100 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-slate-100 rounded w-5/6 animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {aiExplanations[item.id].text}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
