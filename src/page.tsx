/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G3k3CNoH9gO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="grid min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            alt="Company Logo"
            className="mx-auto mb-4"
            height={60}
            src="/placeholder.svg"
            style={{
              aspectRatio: "220/60",
              objectFit: "cover",
            }}
            width={220}
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Results</h1>
          <p className="text-gray-500 dark:text-gray-400">Vote for your favorite candidate</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="John Doe"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">John Doe</div>
            </div>
            <div className="text-sm text-blue-500 dark:text-blue-400">25%</div>
          </div>
          <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Alice Johnson"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Alice Johnson</div>
            </div>
            <div className="text-sm text-blue-500 dark:text-blue-400">20%</div>
          </div>
          <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "20%",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Michael Smith"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Michael Smith</div>
            </div>
            <div className="text-sm text-blue-500 dark:text-blue-400">30%</div>
          </div>
          <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "30%",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Sophia Williams"
                className="rounded-full"
                height={120}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Sophia Williams</div>
            </div>
            <div className="text-sm text-blue-500 dark:text-blue-400">25%</div>
          </div>
          <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus-visible:ring-blue-600"
          href="#"
        >
          Login
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus-visible:ring-blue-600"
          href="#"
        >
          Registration
        </Link>
      </div>
    </div>
  )
}