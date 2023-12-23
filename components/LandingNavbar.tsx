"use client";

import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const JostFont = Jost({ weight: "500", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="logo" src="/logo.jpeg" />
          <h1
            className={cn(
              "text-2xl font-bold text-white ml-10",
              JostFont.className
            )}
          >
            AIForge
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            {isSignedIn ? "Get started" : "Sign Up"}
          </Button>
        </Link>
      </div>
    </nav>
  );
};
