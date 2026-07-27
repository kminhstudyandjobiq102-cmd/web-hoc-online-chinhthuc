"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Đã xảy ra lỗi khi đăng ký");
        setIsLoading(false);
      } else {
        alert("Đăng ký thành công! Đang chuyển hướng tới trang Đăng nhập...");
        router.push("/login");
      }
    } catch (err) {
      setError("Không thể kết nối đến máy chủ.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-card border rounded-2xl shadow-sm">
      <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Đăng ký</h1>
      <p className="text-muted-foreground mb-8 text-center">Tạo tài khoản học sinh mới</p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
          {error}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên (Không bắt buộc)</label>
          <input
            name="name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Ví dụ: Nguyễn Văn A"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tên đăng nhập <span className="text-red-500">*</span></label>
          <input
            name="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Ví dụ: hocsinh123"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mật khẩu <span className="text-red-500">*</span></label>
          <input
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 transition-colors mt-2"
        >
          {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Đăng ký tài khoản"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-muted-foreground">
        Đã có tài khoản?{" "}
        <Link href="/login" className="text-blue-600 font-medium hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
