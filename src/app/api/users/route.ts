import { NextResponse } from 'next/server';
import { supabase } from '@utils/supabaseClient';

export async function GET() {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.log("data", data)
  return NextResponse.json(data, { status: 200 });
}