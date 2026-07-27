'use client';

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const mockQuestions = Array.from({ length: 6 }).map((_, i) => ({
  id: `q_${i}`,
  content: i % 2 === 0 
    ? 'Giải phương trình sau: $x^2 - 4x + 3 = 0$' 
    : 'Tính tích phân: $\\int_{0}^{1} x^2 dx$',
  exam: `Đề thi ${i % 2 === 0 ? 'Giữa kì' : 'Cuối kì'} Toán ${10 + (i % 3)}`,
  type: i % 3 === 0 ? 'Tự luận' : 'Trắc nghiệm',
}));

export default function AdminQuestionsPage() {
  const [search, setSearch] = useState('');

  // Helper to render math mixed with text
  const renderContent = (content: string) => {
    // Basic regex to find inline math enclosed in $ $
    const parts = content.split(/(\$.*?\$)/g);
    return (
      <span className="text-sm">
        {parts.map((part, idx) => {
          if (part.startsWith('$') && part.endsWith('$')) {
            return <InlineMath key={idx} math={part.slice(1, -1)} />;
          }
          return <span key={idx}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Ngân hàng Câu hỏi</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Quản lý câu hỏi toán học với hỗ trợ LaTeX</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm w-fit">
          <Plus className="w-4 h-4" />
          Thêm câu hỏi
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm câu hỏi..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase font-medium text-xs border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 w-1/2">Nội dung câu hỏi</th>
                <th className="px-6 py-4">Thuộc đề / Bài tập</th>
                <th className="px-6 py-4">Loại</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {mockQuestions.map((q) => (
                <tr key={q.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded mt-0.5">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div className="text-slate-900 dark:text-slate-200 whitespace-normal line-clamp-2 max-w-md">
                        {renderContent(q.content)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    {q.exam}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {q.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">Hiển thị <span className="font-medium text-slate-900 dark:text-white">6</span> câu hỏi</p>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
