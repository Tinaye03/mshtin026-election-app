/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k6pjElcKGR8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: "url('/background.jpg')", backgroundSize: "cover"}}>
      <header className="py-6 md:py-5">
        <div className="container flex items-center justify-between px-8 md:px2">
          <div className="space-y-1 text-center mx-auto">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-1xl md:text-4xl">
            EmpowerTech Solutions Limited (ZW)
            </h1>
            <p className="text-gray-500 dark:text-gray-400">EmpowerTech Solutions is a trailblazing organization at the forefront of the technology industry, 
            distinguished by its strong commitment to</p>
            <p className="text-gray-500 dark:text-gray-400">fostering diversity and empowering women in the field. Vote for the incoming Chief Technology Officer from the candidates below:</p>
          </div>
          <Link
            className="inline-flex h-11 items-center justify-center rounded-md bg-black text-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Return To Home
          </Link>
        </div>
      </header>
      <main className="flex-1 py-8 lg:py-6">
        <div className="container grid items-start gap-4 px-4 text-center md:px-6 lg:gap-10 lg:grid-cols-2 xl:gap-16">
          <Card className="w-full grid gap-1 p-1">
            <CardHeader className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-center">Tinaye Mushore</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">"My motivation stems from a desire to drive innovation and bring diverse perspectives to the table, leveraging unique insights to propel our organization forward."</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="mx-auto flex w-[350px] items-center justify-center p-2 sm:p-2">
                <img
                  alt="Amelia Johnson"
                  className="rounded-full"
                  height="200"
                  src="/member-01.jpeg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <Button className="mx-auto w-[300px]">Vote</Button>
            </CardContent>
          </Card>
          <Card className="w-full grid gap-1 p-1">
            <CardHeader className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-center">Tanatswa Mhanzi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">"I am driven to empower other women in the organization by demonstrating that leadership roles in technology are accessible and achievable for females. Women can drive innovation."</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="mx-auto flex w-[350px] items-center justify-center p-2 sm:p-2">
                <img
                  alt="Ethan Williams"
                  className="rounded-full"
                  height="200"
                  src="/member-02.jpeg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <Button className="mx-auto w-[300px]">Vote</Button>
            </CardContent>
          </Card>
          <Card className="w-full grid gap-1 p-1">
            <CardHeader className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-center">Florence Muirimi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">"As a female candidate, I am motivated to lead as CTO to provide representation and serve as a role model for other women aspiring to advance in the technology industry."</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="mx-auto flex w-[350px] items-center justify-center p-2 sm:p-2">
                <img
                  alt="Olivia Brown"
                  className="rounded-full"
                  height="200"
                  src="/member-03.jpeg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <Button className="mx-auto w-[300px]">Vote</Button>
            </CardContent>
          </Card>
          <Card className="w-full grid gap-1 p-1">
            <CardHeader className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-center">Kiwi Mupfupi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-center">"I am passionate about advocating for gender diversity and inclusion in the technology sector, and leading as CTO allows me to champion initiatives that promote equality and create a supportive environment for all employees."</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="mx-auto flex w-[350px] items-center justify-center p-2 sm:p-2">
                <img
                  alt="Noah Lee"
                  className="rounded-full"
                  height="200"
                  src="/member-04.jpeg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <Button className="mx-auto w-[300px]">Vote</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

