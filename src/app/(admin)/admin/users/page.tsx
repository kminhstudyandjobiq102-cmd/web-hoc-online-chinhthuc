'use client';

import { useState } from 'react';
import { Search, Filter, MoreHorizontal, Edit, Trash2, Mail, Shield, User, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const mockUsers = Array.from({ length: 15 }).map((_, i) => ({
  id: `usr_${i}`,
  name: `Học sinh ${i + 1}`,
  email: `student${i + 1}@example.com`,
  role: i % 7 === 0 ? 'ADMIN' : 'STUDENT',
  avatar: `https://i.pravatar.cc/150?u=${i}`,
  joinedAt: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString('vi-VN'),
  status: i % 10 === 0 ? 'inactive' : 'active'
}));

export default function AdminUsersPage() {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Quản lý người dùng</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Danh sách tất cả người dùng trong hệ thống</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm w-fit">
          <Plus className="w-4 h-4" />
          Thêm người dùng
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tên hoặc email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-lg">
              {['ALL', 'STUDENT', 'ADMIN'].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilter(r)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                    filter === r 
                      ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" 
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {r === 'ALL' ? 'Tất cả' : r === 'STUDENT' ? 'Học sinh' : 'Quản trị viên'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase font-medium text-xs border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4">Người dùng</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Vai trò</th>
                <th className="px-6 py-4">Ngày tham gia</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700" />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white flex items-center gap-2">
                          {user.name}
                          {user.status === 'inactive' && <span className="w-2 h-2 rounded-full bg-red-500" title="Đã khóa"></span>}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                      user.role === 'ADMIN' 
                        ? "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800"
                        : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                    )}>
                      {user.role === 'ADMIN' ? <Shield className="w-3 h-3" /> : <User className="w-3 h-3" />}
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    {user.joinedAt}
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
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hiển thị <span className="font-medium text-slate-900 dark:text-white">1</span> đến <span className="font-medium text-slate-900 dark:text-white">15</span> trong <span className="font-medium text-slate-900 dark:text-white">124</span> kết quả
          </p>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-sm font-medium w-8 h-8 flex items-center justify-center">1</button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-500 text-sm font-medium w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-md text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
