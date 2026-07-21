import { NextResponse } from 'next/server';
import { getAllSymbols } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const symbols = getAllSymbols();
  const lowerQuery = query.toLowerCase();

  const results = symbols
    .filter(s => 
      s.title.toLowerCase().includes(lowerQuery) || 
      s.shortDescription.toLowerCase().includes(lowerQuery)
    )
    .slice(0, 5)
    .map(s => ({
      slug: s.slug,
      title: s.title,
      shortDescription: s.shortDescription
    }));

  return NextResponse.json({ results });
}
