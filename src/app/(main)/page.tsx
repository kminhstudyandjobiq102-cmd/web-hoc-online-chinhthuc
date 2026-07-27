'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { CountdownTimer } from '@/components/shared/CountdownTimer';
import { CourseCard } from '@/components/shared/CourseCard';
import { ExamCard } from '@/components/shared/ExamCard';

const toanCourses = [
  { id: 't1', title: 'Khóa ĐGNL-ĐGTD', description: 'Ôn luyện kỳ thi ĐGNL & ĐGTD toàn diện', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
  { id: 't2', title: 'Khóa thực tế THPTQG', description: 'Bám sát đề thi thật THPTQG', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
  { id: 't3', title: 'Khóa VD-VDC', description: 'Chinh phục điểm 9, 10 môn Toán', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
  { id: 't4', title: 'Khóa Giải Đề', description: 'Luyện đề thực chiến môn Toán', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
];

const lyCourses = [
  { id: 'l1', title: 'Khóa luyện đề lý thuyết', description: 'Chống sai ngu lý thuyết Vật Lý', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
  { id: 'l2', title: 'Khóa luyện đề', description: 'Luyện đề thực chiến môn Vật Lý', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
];

const anhCourses = [
  { id: 'a1', title: 'Khóa luyện đề Tiếng Anh', description: 'Luyện đề thực chiến môn Tiếng Anh', videoCount: 0, exerciseCount: 0, difficulty: 'hard' as const },
];

const mockExams = [
  { id: 'e1', title: 'Phòng luyện đề ĐGNL-ĐGTD', duration: 150, questionCount: 50, difficulty: 'hard' as const },
  { id: 'e2', title: 'Phòng luyện đề Toán', duration: 90, questionCount: 22, difficulty: 'hard' as const },
  { id: 'e3', title: 'Phòng luyện đề Lý', duration: 50, questionCount: 22, difficulty: 'hard' as const },
  { id: 'e4', title: 'Phòng luyện đề Tiếng Anh', duration: 50, questionCount: 40, difficulty: 'hard' as const },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Học Miễn Phí <br />
                <span className="text-primary">Cùng Minh Đi Giải Đề</span>
              </h1>
              
              <div className="space-y-4">
                {[
                  'Chữa đề chi tiết, lấy gốc thần tốc',
                  'Khóa học Toán, Lý, Tiếng Anh chất lượng',
                  'Phòng luyện đề chuẩn cấu trúc THPT Quốc Gia',
                  'Hoàn toàn miễn phí 100%'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <a href="https://www.tiktok.com/@do.hnue.thi.doi.ten208" target="_blank" rel="noopener noreferrer" className="h-14 px-8 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                  Theo dõi TikTok
                </a>
                <a href="https://zalo.me/0369331622" target="_blank" rel="noopener noreferrer" className="h-14 px-8 inline-flex items-center justify-center rounded-xl bg-background border-2 border-border text-foreground font-semibold text-lg hover:bg-muted hover:border-foreground/20 transition-all hover:-translate-y-1">
                  Vào nhóm Zalo
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden md:block"
            >
              {/* Abstract Geometric Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
                  <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-primary rounded-2xl shadow-xl flex items-center justify-center text-5xl font-bold text-white opacity-90 transform rotate-12"
                  >
                    ∑
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full shadow-xl flex items-center justify-center text-4xl font-bold text-white opacity-90"
                  >
                    π
                  </motion.div>
                  <motion.div 
                    animate={{ x: [0, 15, 0], y: [0, 15, 0] }} 
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-card border border-border rounded-3xl shadow-2xl flex items-center justify-center p-6"
                  >
                    <div className="w-full h-full border-4 border-primary/30 rounded-2xl flex items-center justify-center text-6xl font-extrabold text-foreground">
                      ∫
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-3xl p-8 shadow-sm border border-border">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Kỳ thi THPT Quốc Gia 2027</h2>
              <p className="text-muted-foreground">Hãy bắt đầu ôn tập ngay hôm nay!</p>
            </div>
            <CountdownTimer targetDate={new Date('2027-06-11T07:00:00')} />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Các Khóa Học Toán</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {toanCourses.map((course, index) => (
                <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Các Khóa Học Lý</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
              {lyCourses.map((course, index) => (
                <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Các Khóa Học Tiếng Anh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
              {anhCourses.map((course, index) => (
                <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Exams Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Các Phòng Luyện Đề</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Trải nghiệm thi thử như thật với các phòng thi đa dạng môn học.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockExams.map((exam, index) => (
              <motion.div key={exam.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <ExamCard {...exam} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
