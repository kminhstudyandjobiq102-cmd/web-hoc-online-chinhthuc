import React from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 bg-[url('/grid.svg')] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Logo className="h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          Minh Đi Giải Đề
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-slate-800 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-200 dark:border-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
}
