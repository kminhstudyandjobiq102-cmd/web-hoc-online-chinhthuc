"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (res?.error) {
        setError("Tên đăng nhập hoặc mật khẩu không chính xác.");
        setIsLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Đã xảy ra lỗi, vui lòng thử lại.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-card border rounded-2xl shadow-sm">
      <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Đăng nhập</h1>
      <p className="text-muted-foreground mb-8 text-center">Đăng nhập bằng Tên đăng nhập và Mật khẩu</p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên đăng nhập</label>
          <input
            name="username"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Ví dụ: hocsinh123"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mật khẩu</label>
          <input
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors mt-2"
        >
          {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Đăng nhập"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-muted-foreground">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-blue-600 font-medium hover:underline">
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}
