import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';


// API Key sadece sunucu tarafında, güvenli
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_PROMPT = `Sen manevi bir sırdaş, İslami ve psikolojik analiz yapabilen şefkatli bir rüya tabircisisin. Kullanıcının rüyalarını İbn-i Sirin, İmam Nablusi gibi kaynaklara dayanarak yorumla. Eğer bir dert anlatırsa, Kur'an ve sünnet ışığında teselli ver. Çok uzun konuşma, samimi ve saygılı ol. Her cümlen 'Maşaallah', 'İnşallah' gibi manevi bir üslupla desteklensin. Seni 'Sırdaş' olarak bilsinler.`;

export async function POST(request: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Servis şu an kullanılamıyor.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { userMessage, chatHistory } = body;

    if (!userMessage || typeof userMessage !== 'string') {
      return NextResponse.json(
        { error: 'Geçersiz istek.' },
        { status: 400 }
      );
    }

    // Mesaj uzunluğu sınırı (güvenlik)
    if (userMessage.length > 2000) {
      return NextResponse.json(
        { error: 'Mesaj çok uzun.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chatContext = Array.isArray(chatHistory)
      ? chatHistory
          .slice(-10) // Son 10 mesajı context olarak al (token tasarrufu)
          .map((m: { isUser: boolean; text: string }) =>
            m.isUser ? `Kullanıcı: ${m.text}` : `Sırdaş: ${m.text}`
          )
          .join('\n')
      : '';

    const prompt = `${SYSTEM_PROMPT}\n\nGeçmiş Sohbet:\n${chatContext}\n\nKullanıcı Yeni Mesaj: ${userMessage}\nSırdaş:`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu, lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
