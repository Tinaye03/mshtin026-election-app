/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mWxEJqUk5F5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-2">
        <CardTitle className="text-2xl">Login to Vote</CardTitle>
        <CardDescription>Enter your email below to login to your EmpowerTech Solutions account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input className="hover:shadcn-outline-accent" id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block text-sm underline" href="/register">
              Forgot your password?
            </Link>
          </div>
          <Input className="hover:shadcn-outline-accent" id="password" required type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/vote"><Button
          className="w-full"
          style={{
            // "--tw-scale": "0.99",
          }}
        >
          Sign in
        </Button></Link>
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

