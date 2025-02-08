// app/api/signup/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

let users: any[] = [];

export async function POST(request: Request) {
  const { lastName, email, password } = await request.json();

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const user = { lastName, email, password };
  users.push(user);

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}