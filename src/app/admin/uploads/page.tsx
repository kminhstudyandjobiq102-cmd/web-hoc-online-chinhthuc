"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, FileVideo, FileText, Copy, Loader2, Link as LinkIcon } from "lucide-react";

export default function AdminUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedUrl(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setUploadedUrl(data.url);
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setError(data.error || "Lỗi tải lên");
      }
    } catch (err) {
      setError("Không thể kết nối đến máy chủ.");
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(window.location.origin + uploadedUrl);
      alert("Đã copy đường link! Bạn có thể dán vào bài giảng.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Quản lý Tài liệu & Video</h1>
      <p className="text-slate-500 mb-8">Khu vực tải lên tài liệu nội bộ. Bạn có thể up PDF, Word, hoặc Video (MP4) và lấy link dán vào khóa học.</p>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        {/* Vùng kéo thả / Chọn file */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 transition-colors rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer text-center group"
        >
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.mp4,.png,.jpg,.jpeg"
          />
          
          {file ? (
            <div className="flex flex-col items-center">
              {file.type.includes("video") ? (
                <FileVideo className="w-16 h-16 text-blue-500 mb-4" />
              ) : (
                <FileText className="w-16 h-16 text-blue-500 mb-4" />
              )}
              <span className="font-medium text-slate-800 text-lg">{file.name}</span>
              <span className="text-slate-500 text-sm mt-1">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-lg font-semibold text-blue-900 mb-2">Bấm vào đây để chọn File</p>
              <p className="text-sm text-blue-600/70">Hỗ trợ: PDF, Word, MP4, Hình ảnh</p>
            </>
          )}
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 text-center">
            {error}
          </div>
        )}

        {/* Nút Upload */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors shadow-sm"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tải lên hệ thống...
              </>
            ) : (
              <>
                <UploadCloud className="w-5 h-5" />
                Bắt đầu tải lên
              </>
            )}
          </button>
        </div>

        {/* Kết quả sau khi upload */}
        {uploadedUrl && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
            <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
              <CheckCircle2 className="w-6 h-6" />
              Tải lên thành công!
            </div>
            
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-green-100">
              <LinkIcon className="w-5 h-5 text-slate-400 shrink-0" />
              <input 
                type="text" 
                readOnly 
                value={uploadedUrl} 
                className="flex-1 bg-transparent outline-none text-slate-700 text-sm font-mono"
              />
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-md transition-colors flex items-center gap-1 shrink-0"
              >
                <Copy className="w-4 h-4" />
                Copy Link
              </button>
            </div>
            <p className="text-xs text-green-600 mt-3">
              * Gợi ý: Hãy copy đường link trên và dán vào phần tạo Video bài giảng hoặc Tài liệu đính kèm.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
