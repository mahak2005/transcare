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
      console.error('An error occurred:', error);
      alert(`An error occurred: ${(error as Error).message || 'Please try again.'}`);
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