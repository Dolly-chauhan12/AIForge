"use client";

import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

const JostFont = Jost({ weight: "500", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-10 mr-4">
          <Image
            fill
            alt="logo"
            src="/logo.png"
            className="bg-gray-100 dark:bg-transparent"
          />
          <h1 className={cn("text-3xl font-bold  ml-12", JostFont.className)}>
            AIForge
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <ThemeToggle />
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="outline"
            className="rounded-full outline outline-2 outline-yellow-400 dark:outline-none dark:bg-white dark:text-black"
          >
            {isSignedIn ? "Get started" : "Sign Up"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
