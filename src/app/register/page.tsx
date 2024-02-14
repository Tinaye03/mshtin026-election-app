/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9LZlW3nSZcd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4">
        <div className="container grid items-center gap-4 px-4">
          <Link className="flex items-center gap-2 text-xl font-bold" href="#">
            <HomeIcon className="w-6 h-6" />
            Home
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center">
        <div className="mx-auto max-w-[400px] px-4 space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register to Vote</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to register to vote for the incoming Chief Technology Officer</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="id-number">ID Number</Label>
              <Input id="id-number" placeholder="Enter your ID number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Register</Button>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex justify-center items-center h-14 px-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">EmpowerTech Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
