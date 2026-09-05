import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Netlify limit aşımını önlemek için Gemini API geçici olarak devreden çıkarıldı.
  return NextResponse.json(
    { reply: 'Maalesef yoğunluk sebebiyle Sırdaş şu an inzivaya çekildi. İnşallah daha sonra tekrar görüşmek üzere...' },
    { status: 200 }
  );
}
