"use client";

import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  const { theme } = useTheme();
  return (
    <SignUp appearance={{ baseTheme: theme === "dark" ? dark : undefined }} />
  );
}
