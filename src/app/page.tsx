/**
 * v0 by Vercel.
 * @see https://v0.dev/t/G3k3CNoH9gO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link"
import { Voter } from "@/models/voter";
import database from "./database";
import { useEffect, useState } from "react";
import { Vote } from "@/models/vote";

export default function Component() {

  const [votes, setVotes] = useState<Vote[]>([]);
  


  useEffect(() => {
    fetchVotes();
  }, []
  );

  const getVotesByCandidate = () => {
    const candidateIDs: { [key: string]: number } = {};

    for (const { candidateID } of votes) {
      candidateIDs[candidateID] = (candidateIDs[candidateID] || 0) + 1;
    }

    return candidateIDs;
  }


  const fetchVotes = async () => {
    const votes = await database.getVotes();
    setVotes(votes)
  }

  const getTotalVotes = () => {
    if (votes) {
      return votes.length;
    }
    0;
  }

  return (
    <div className="grid min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center md:px-6" style={{ backgroundImage: "url('/background2.jpg')", backgroundSize: "cover" }}>
      <div className="space-y-10">
        <div className="space-y-5">
          {/* <img
            alt="Company Logo"
            className="mx-auto mb-8"
            height={100}
            src="/logo.png"
            style={{
              aspectRatio: "120/60",
              objectFit: "cover",
            }}
            width={220}
          /> */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">EmpowerTech Solutions</h2>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-2xl">Chief Technology Officer Vote Results</h1>
          <p className="text-gray-500 dark:text-black-400">We extend our gratitude to all who participated.</p>
          <p className="text-gray-500 dark:text-black-400">Kindly find the voting results displayed below:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Tinaye Mushore"
                className="rounded-full"
                height={120}
                src="/member-01.jpeg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Tinaye Mushore</div>
            </div>
            <div className="text-sm text-black-500 dark:text-black-400"
              style={{
                width:`${Math.round(
                  getVotesByCandidate()[0] / votes.length * 100
                )}%`,
              }}>
              {Math.round(
                getVotesByCandidate()[0] / votes.length * 100
              )
              } %
              <p>Vote Count: {getVotesByCandidate()[0]}</p>
            </div>
          </div>
          {/* <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div> */}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Tanatswa Mhanzi"
                className="rounded-full"
                height={120}
                src="/member-02.jpeg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Tanatswa Mhanzi</div>
            </div>
            <div className="text-sm text-black-500 dark:text-black-400"
              style={{
                width: `${Math.round(
                  getVotesByCandidate()[1] / votes.length * 100
                )}%`,
              }}>
              {Math.round(
                getVotesByCandidate()[1] / votes.length * 100
              )
              } %
              <p>Vote Count: {getVotesByCandidate()[1]}</p>
            </div>
          </div>
          {/* <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div> */}


          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Florence Muirimi"
                className="rounded-full"
                height={120}
                src="/member-03.jpeg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <div className="text-lg font-medium ml-2">Florence Muirimi</div>
            </div>
            <div className="text-sm text-black-500 dark:text-black-400"
              style={{
                width: `${Math.round(
                  getVotesByCandidate()[2] / votes.length * 100
                )}%`,
              }}>
              {Math.round(
                getVotesByCandidate()[2] / votes.length * 100
              )
              } %
              <p>Vote Count: {getVotesByCandidate()[2]}</p>
            </div>
          </div>
          {/* <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div> */}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                alt="Kiwi Mupfupi"
                className="rounded-full"
                height={120}
                src="/member-04.jpeg"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />


              <div className="text-lg font-medium ml-2">Kiwi Mupfupi</div>
            </div>
            <div className="text-sm text-black-500 dark:text-black-400"
              style={{
                width: `${Math.round(
                  getVotesByCandidate()[3] / votes.length * 100
                )}%`,
              }}>
              {Math.round(
                getVotesByCandidate()[3] / votes.length * 100
              )
              } %
              <p>Vote Count: {getVotesByCandidate()[3]}</p>
            </div>
          </div>
          {/* <div className="h-4 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-blue-500"
              style={{
                width: "25%",
              }}
            />
          </div> */}
        </div>
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus-visible:ring-blue-600"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus-visible:ring-blue-600"
          href="/register"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

