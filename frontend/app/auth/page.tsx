// // app/auth/page.tsx
// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import bcrypt from 'bcryptjs';
// import { useRouter } from 'next/navigation';
// import { AuthForm } from "@/components/AuthForm";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const router = useRouter();

//   const handleSubmit = async (data: { lastName?: string; email: string; password: string }) => {
//     if (isLogin) {
//       // Handle login
//       try {
//         const response = await axios.post('/api/login', { email: data.email, password: data.password });
//         alert(response.data.message);
//         router.push('/'); // Redirect to home page after successful login
//       } catch (error) {
//         alert('Login failed');
//       }
//     } else {
//       // Handle signup
//       const hashedPassword = bcrypt.hashSync(data.password, 10);
//       try {
//         const response = await axios.post('/api/signup', { lastName: data.lastName, email: data.email, password: hashedPassword });
//         alert(response.data.message);
//         setIsLogin(true); // Switch to login form after successful signup
//       } catch (error) {
//         alert('Signup failed');
//       }
//     }
//   };

//   return (
//     <AuthForm
//       isLogin={isLogin}
//       onSubmit={handleSubmit}
//       onToggleAuthMode={() => setIsLogin(!isLogin)}
//     />
//   );
// }
// app/auth/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthForm } from "@/components/AuthForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = async (data: { lastName?: string; email: string; password: string }) => {
    const url = isLogin ? '/api/login' : '/api/signup';
    const body = isLogin
      ? { email: data.email, password: data.password }
      : { lastName: data.lastName, email: data.email, password: data.password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        if (isLogin) {
          router.push('/'); // Redirect to home page after successful login
        } else {
          setIsLogin(true); // Switch to login form after successful signup
        }
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <AuthForm
      isLogin={isLogin}
      onSubmit={handleSubmit}
      onToggleAuthMode={() => setIsLogin(!isLogin)}
    />
  );
}