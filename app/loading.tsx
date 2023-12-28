import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <>
      <div className="h-10 w-48  rounded-md bg-stone-100 dark:bg-stone-800" />
      <div className="flex h-full w-full items-center justify-center gap-x-2 text-lg">
        <Loader2 className="w-10 h-10 animate-spin " />
        Please wait a moment...
      </div>
    </>
  );
}
