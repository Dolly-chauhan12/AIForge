import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="text-xl text-red-500 ">
      <div> Landing page (Unprotected)</div>
      <div className="w-full md:w-1/2 flex justify-between">
        <Link href="/sign-up">
          <Button>SignUp</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
