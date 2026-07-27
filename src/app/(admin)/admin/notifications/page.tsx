'use client';

import { useState } from 'react';
import { Bell, Send, CheckCircle2, AlertCircle, Info, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const mockNotifications = Array.from({ length: 5 }).map((_, i) => ({
  id: `notif_${i}`,
  title: i === 0 ? 'Bảo trì hệ thống' : i === 1 ? 'Cập nhật khóa học mới' : 'Nhắc nhở làm bài tập',
  content: 'Hệ thống sẽ bảo trì từ 2h-4h sáng ngày mai. Các bạn chú ý hoàn thành bài tập trước thời gian này nhé.',
  type: i === 0 ? 'WARNING' : i === 1 ? 'SUCCESS' : 'INFO',
  createdAt: new Date(Date.now() - Math.random() * 1000000000).toLocaleString('vi-VN'),
  sent: true
}));

export default function AdminNotificationsPage() {
  const [type, setType] = useState('INFO');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Thông báo hệ thống</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Gửi và quản lý thông báo đến toàn bộ học sinh</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Create Notification */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Gửi thông báo mới</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Loại thông báo</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 'INFO', label: 'Thông tin', icon: Info, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                    { val: 'SUCCESS', label: 'Thành công', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
                    { val: 'WARNING', label: 'Cảnh báo', icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' }
                  ].map((t) => (
                    <button
                      key={t.val}
                      type="button"
                      onClick={() => setType(t.val)}
                      className={cn(
                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all",
                        type === t.val 
                          ? `border-${t.color.split('-')[1]}-500 ${t.bg} shadow-sm` 
                          : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750"
                      )}
                    >
                      <t.icon className={cn("w-5 h-5 mb-1", type === t.val ? t.color : "text-slate-400")} />
                      <span className={cn("text-xs font-medium", type === t.val ? "text-slate-900 dark:text-white" : "text-slate-500")}>
                        {t.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Tiêu đề</label>
                <input 
                  type="text" 
                  placeholder="Nhập tiêu đề thông báo..." 
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Nội dung</label>
                <textarea 
                  rows={4}
                  placeholder="Nhập nội dung chi tiết..." 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm">
                <Send className="w-4 h-4" />
                Gửi thông báo ngay
              </button>
            </form>
          </div>
        </div>

        {/* History Notifications */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-full">
            <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Lịch sử thông báo</h2>
            </div>
            
            <div className="divide-y divide-slate-100 dark:divide-slate-700 max-h-[600px] overflow-y-auto">
              {mockNotifications.map((notif) => (
                <div key={notif.id} className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-2.5 rounded-full mt-1 shrink-0",
                      notif.type === 'INFO' ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                      notif.type === 'SUCCESS' ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400" :
                      "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                    )}>
                      {notif.type === 'INFO' && <Info className="w-5 h-5" />}
                      {notif.type === 'SUCCESS' && <CheckCircle2 className="w-5 h-5" />}
                      {notif.type === 'WARNING' && <AlertCircle className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white truncate">{notif.title}</h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          {notif.createdAt}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {notif.content}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-md w-fit">
                        <Check className="w-3.5 h-3.5" />
                        Đã gửi thành công
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
