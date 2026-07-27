import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Chưa cấu hình API Key cho Google Gemini.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { questionContent, correctAnswer, userAnswer, type } = body;

    if (!questionContent || !correctAnswer || !userAnswer) {
      return NextResponse.json(
        { error: 'Thiếu thông tin câu hỏi hoặc đáp án.' },
        { status: 400 }
      );
    }

    const prompt = `Đóng vai một thầy/cô giáo chuyên môn cao, cực kỳ thân thiện và tận tâm. Học sinh vừa làm sai một câu hỏi thuộc loại bài: ${type}.
- Đề bài: ${questionContent}
- Đáp án đúng của thầy/cô: ${correctAnswer}
- Em học sinh đã chọn nhầm: ${userAnswer}

Hãy giải thích thật ngắn gọn, dễ hiểu tại sao đáp án của em ấy bị sai (có thể do nhầm công thức, quên dấu, hiểu sai khái niệm...).
Sau đó hướng dẫn nhanh cách tư duy đúng để ra được đáp án chính xác.
Giọng điệu: Xưng hô "Thầy/Cô" và "Em", thân thiện, khích lệ. Dùng Markdown để in đậm các từ khóa quan trọng. Không cần lặp lại đề bài quá dài.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return NextResponse.json({ explanation: response.text });
  } catch (error) {
    console.error('Lỗi khi gọi AI:', error);
    return NextResponse.json(
      { error: 'Hệ thống AI đang bận hoặc gặp lỗi. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
