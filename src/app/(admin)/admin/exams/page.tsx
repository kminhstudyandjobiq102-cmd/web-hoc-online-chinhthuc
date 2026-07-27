'use client';

import { useState } from 'react';
import { Search, Plus, Edit, Trash2, FileText, Clock, FileQuestion, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const mockExams = Array.from({ length: 8 }).map((_, i) => ({
  id: `exam_${i}`,
  title: `Đề thi ${i % 2 === 0 ? 'Giữa kì' : 'Cuối kì'} Toán ${10 + (i % 3)}`,
  questions: Math.floor(Math.random() * 20) + 30,
  duration: 90, // minutes
  difficulty: i % 3 === 0 ? 'HARD' : i % 2 === 0 ? 'MEDIUM' : 'EASY',
  status: i % 5 === 0 ? 'DRAFT' : 'PUBLISHED',
  createdAt: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString('vi-VN')
}));

export default function AdminExamsPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quản lý Đề thi</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Tạo và quản lý các bài kiểm tra, đề thi</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm w-fit">
          <Plus className="w-4 h-4" />
          Thêm đề thi
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm đề thi..." 
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
                <th className="px-6 py-4">Đề thi</th>
                <th className="px-6 py-4">Chi tiết</th>
                <th className="px-6 py-4">Độ khó</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {mockExams.map((exam) => (
                <tr key={exam.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{exam.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Tạo ngày {exam.createdAt}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center gap-1.5"><FileQuestion className="w-3.5 h-3.5 text-slate-400" /> {exam.questions} Câu hỏi</div>
                      <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {exam.duration} Phút</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-md text-xs font-medium border",
                      exam.difficulty === 'HARD' ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800" :
                      exam.difficulty === 'MEDIUM' ? "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800" :
                      "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                    )}>
                      {exam.difficulty === 'HARD' ? 'Khó' : exam.difficulty === 'MEDIUM' ? 'Trung bình' : 'Dễ'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium",
                      exam.status === 'PUBLISHED' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    )}>
                      {exam.status === 'PUBLISHED' ? 'Đã xuất bản' : 'Bản nháp'}
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
          <p className="text-sm text-slate-500 dark:text-slate-400">Hiển thị <span className="font-medium text-slate-900 dark:text-white">8</span> đề thi</p>
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
