"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white">Đã gửi email</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Vui lòng kiểm tra email của bạn để nhận link đặt lại mật khẩu.
        </p>
        <div className="mt-6">
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Quay lại trang đăng nhập
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Đặt lại mật khẩu</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
          <div className="mt-1">
            <input type="email" required className="appearance-none block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Gửi link đặt lại mật khẩu"}
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm">
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">Quay lại trang đăng nhập</Link>
      </p>
    </div>
  );
}
