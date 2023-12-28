"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";
export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className=" font-bold py-36 text-center space-y-4 ">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 dark:from-amber-400 via-blue-300 dark:via-amber-200 to-slate-400 dark:to-slate-100">
          <Typewriter
            options={{
              strings: [
                "ChatBot.",
                "Image Generation.",
                "Code Generation.",
                "Music Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400 dark:text-zinc-200">
        Create content using AI 10x faster
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full"
          >
            Start generating for free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal dark:text-zinc-200">
        No credit card required.
      </div>
    </div>
  );
};

export default LandingHero;
