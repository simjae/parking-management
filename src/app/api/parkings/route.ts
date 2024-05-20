import { NextResponse } from 'next/server';
import { supabase } from '@utils/supabaseClient';

export async function GET() {
  const { data, error } = await supabase
    .from('parkings')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}