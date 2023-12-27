"use client";

import * as React from "react";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  const { theme } = useTheme();

  return (
    <Button
      size="icon"
      variant="outline"
      className=" border-none bg-transparent hover:bg-transparent hover:outline "
    >
      {theme === "dark" ? (
        <SunIcon
          className="h-[1.5rem] w-[1.5rem] "
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonStar
          className="h-[1.5rem] w-[1.5rem] "
          onClick={() => setTheme("dark")}
        />
      )}
    </Button>
  );
}
