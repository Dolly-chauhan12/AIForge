"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { SignIn } from "@clerk/nextjs";
export default function Page() {
  const { theme } = useTheme();
  return (
    <SignIn appearance={{ baseTheme: theme === "dark" ? dark : undefined }} />
  );
}
