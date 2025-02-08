// app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

let users: any[] = [];

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = users.find(user => user.email === email);
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 400 });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Login successful' }, { status: 200 });
}