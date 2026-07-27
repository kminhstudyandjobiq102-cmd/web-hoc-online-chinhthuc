"use client";

import React, { useState } from "react";
import { Trophy, Medal } from "lucide-react";

const MOCK_RANKINGS = Array.from({ length: 20 }).map((_, i) => ({
  rank: i + 1,
  name: `Nguyễn Văn ${String.fromCharCode(65 + i)}`,
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  score: 9500 - i * 150,
  examsTaken: 45 - i,
  avgScore: (9.5 - i * 0.1).toFixed(1)
}));

export default function RankingsPage() {
  const [filter, setFilter] = useState("Tuần này");

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-3">
          <Trophy className="w-10 h-10 text-yellow-500" /> Bảng Xếp Hạng
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4">Cập nhật thành tích của các học viên xuất sắc nhất</p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        {["Tuần này", "Tháng này", "Tất cả"].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-full font-medium ${filter === f ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-50'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Hạng</th>
              <th className="p-4 font-medium">Học viên</th>
              <th className="p-4 font-medium text-right">Tổng điểm</th>
              <th className="p-4 font-medium text-right hidden sm:table-cell">Số đề</th>
              <th className="p-4 font-medium text-right hidden md:table-cell">Điểm TB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {MOCK_RANKINGS.map((user) => (
              <tr key={user.rank} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="p-4">
                  {user.rank === 1 && <Medal className="w-8 h-8 text-yellow-500" />}
                  {user.rank === 2 && <Medal className="w-8 h-8 text-slate-400" />}
                  {user.rank === 3 && <Medal className="w-8 h-8 text-amber-600" />}
                  {user.rank > 3 && <span className="w-8 inline-block text-center font-bold text-slate-500">{user.rank}</span>}
                </td>
                <td className="p-4 flex items-center gap-4">
                  <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full bg-slate-100" />
                  <span className="font-semibold text-slate-900 dark:text-white">{user.name}</span>
                </td>
                <td className="p-4 text-right font-bold text-blue-600 dark:text-blue-400">{user.score}</td>
                <td className="p-4 text-right text-slate-600 hidden sm:table-cell">{user.examsTaken}</td>
                <td className="p-4 text-right text-slate-600 hidden md:table-cell">{user.avgScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
