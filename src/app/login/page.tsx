/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mWxEJqUk5F5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import { useRouter } from "next/navigation"
import { auth, firestore } from "../firebase"
import {signInWithEmailAndPassword} from"firebase/auth";

export default function Component() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is a required field for login");
    }

    if (!password) {
      setPasswordError("Password is a required field for login");
    }

    if (password && email) {
      router.push("/vote")
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);})
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-2">
        <img
          alt="Company Logo"
          className="mx-auto mb-8"
          height={100}
          src="/logo.png"
          style={{
            aspectRatio: "90/60",
            objectFit: "cover",
          }}
          width={220}
        />
        <CardTitle className="text-2xl">Login to Vote</CardTitle>
        <CardDescription>Enter your email below to login to your EmpowerTech Solutions account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            className={`placeholder-gray-300 ${emailError && "border-red-500"}`}
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange} />
          {emailError && (<p className="text-red-500 text-sm">{emailError}</p>)}
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block text-sm underline" href="/register">
              Forgot your password?
            </Link>
          </div>

          <Input className={`placeholder-gray-300 ${passwordError && "border-red-500"}`}
            id="password"
            required
            type="password"
            value={password}
            onChange={handlePasswordChange} />
          {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/vote">
          <Button
            className="w-full"
            onClick={handleSubmit}
          >
            Sign in
          </Button></Link>
        {/* {successMessage && <div className="text-green-500">{successMessage}</div>} */}
      </CardFooter>
      <div className="flex items-end justify-left h-full mt-1">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-black-200 bg-black px-8 text-white text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-black dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-black"
          href="/"
        >Return To Home
        </Link>
      </div>
    </Card>
  )
}

