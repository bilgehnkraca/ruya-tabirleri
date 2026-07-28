import { NextResponse } from 'next/server';
import { getSearchableSymbols } from '@/lib/data';

// Cache the response at the edge for 24 hours
export const revalidate = 86400;

export async function GET() {
  const symbols = getSearchableSymbols();
  
  return NextResponse.json(symbols, {
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}
