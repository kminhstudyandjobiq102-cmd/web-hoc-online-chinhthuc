"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">Đừng ngần ngại để lại lời nhắn nếu bạn cần hỗ trợ hoặc có góp ý</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><Mail className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Email</div>
                  <div className="font-medium">support@mathacademy.vn</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><Phone className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Điện thoại</div>
                  <div className="font-medium">1900 1234</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-full"><MapPin className="w-6 h-6" /></div>
                <div>
                  <div className="text-blue-200 text-sm">Địa chỉ</div>
                  <div className="font-medium">123 Đường Toán Học, Quận 1, TP. HCM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-6">Gửi tin nhắn</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Họ và tên</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Nguyễn Văn A" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Chủ đề</label>
              <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Cần hỗ trợ lỗi nộp bài" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nội dung</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none" placeholder="Viết nội dung của bạn ở đây..."></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
              <Send className="w-5 h-5" /> Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
