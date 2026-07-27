'use client';

import { Users, BookOpen, FileText, Video, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { cn } from '@/lib/utils';

const registrationData = [
  { name: '01/07', count: 12 }, { name: '05/07', count: 18 }, { name: '10/07', count: 32 },
  { name: '15/07', count: 25 }, { name: '20/07', count: 48 }, { name: '25/07', count: 38 },
  { name: '30/07', count: 52 },
];

const examData = [
  { name: 'T2', count: 120 }, { name: 'T3', count: 150 }, { name: 'T4', count: 180 },
  { name: 'T5', count: 140 }, { name: 'T6', count: 210 }, { name: 'T7', count: 250 },
  { name: 'CN', count: 310 },
];

const recentActivities = [
  { id: 1, type: 'user_register', user: 'Nguyễn Văn A', time: '10 phút trước', desc: 'đã đăng ký tài khoản mới' },
  { id: 2, type: 'course_complete', user: 'Trần Thị B', time: '35 phút trước', desc: 'đã hoàn thành khóa học Đại số 10' },
  { id: 3, type: 'exam_submit', user: 'Lê Văn C', time: '1 giờ trước', desc: 'đã nộp bài kiểm tra Hình học không gian (Điểm: 9.5)' },
  { id: 4, type: 'user_register', user: 'Phạm Thị D', time: '2 giờ trước', desc: 'đã đăng ký tài khoản mới' },
  { id: 5, type: 'course_enroll', user: 'Hoàng Văn E', time: '3 giờ trước', desc: 'đã tham gia khóa học Giải tích 12' },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue }: any) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
        <Icon className="w-6 h-6" />
      </div>
      <div className={cn(
        "flex items-center text-sm font-medium px-2.5 py-1 rounded-full",
        trend === 'up' ? "text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-400" : "text-red-700 bg-red-50 dark:bg-red-900/30 dark:text-red-400"
      )}>
        {trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5 mr-1" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-1" />}
        {trendValue}
      </div>
    </div>
    <div>
      <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Tổng quan</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Theo dõi hoạt động của hệ thống Math Academy</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Tải báo cáo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Tổng số học sinh" value="12,450" icon={Users} trend="up" trendValue="12.5%" />
        <StatCard title="Tổng khóa học" value="48" icon={BookOpen} trend="up" trendValue="4.2%" />
        <StatCard title="Bài kiểm tra" value="356" icon={FileText} trend="up" trendValue="18.3%" />
        <StatCard title="Video bài giảng" value="1,240" icon={Video} trend="up" trendValue="8.1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Học sinh đăng ký mới (30 ngày)</h2>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={registrationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRegistrations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: '#fff', color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="count" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorRegistrations)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Lượt nộp bài (Tuần này)</h2>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={examData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip 
                  cursor={{ fill: '#F1F5F9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Hoạt động gần đây</h2>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">Xem tất cả</button>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-4 sm:p-6 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{activity.user.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900 dark:text-white">
                  <span className="font-medium mr-1">{activity.user}</span> 
                  {activity.desc}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
