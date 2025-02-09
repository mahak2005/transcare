/* eslint-disable @typescript-eslint/no-empty-object-type */
// app/api/signup/route.ts
import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
interface User {
  id: number;
  name: string;
  email: string;
  // Add other properties as needed
}

const users: User[] = [];
export async function POST(request: Request) {
  const { lastName, email } = await request.json();

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const user: User = {
    id: users.length + 1,
    name: lastName,
    email,
    // Add other properties as needed
  };
  users.push(user);

  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}