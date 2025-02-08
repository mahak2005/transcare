// // app/api/login/route.ts
// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';

// let users: any[] = [];

// export async function POST(request: Request) {
//   const { email, password } = await request.json();

//   const user = users.find(user => user.email === email);
//   if (!user) {
//     return NextResponse.json({ message: 'User not found' }, { status: 400 });
//   }

//   const isPasswordValid = bcrypt.compareSync(password, user.password);
//   if (!isPasswordValid) {
//     return NextResponse.json({ message: 'Invalid password' }, { status: 400 });
//   }

//   return NextResponse.json({ message: 'Login successful' }, { status: 200 });
// }
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const response = await fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: data.detail || 'Login failed' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Login successful', token: data.token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
