import { UserButton } from "@clerk/nextjs";
import { getUserApiUsage } from "@/lib/api-limit";
import { checkProSubscription } from "@/lib/subscription";
import MobileSidebar from "./Mobile-Sidebar";
import ThemeToggle from "./ThemeToggle";

const Navbar = async () => {
  const apiUsageCount = await getUserApiUsage();
  const isPro = await checkProSubscription();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiUsageCount={apiUsageCount} />
      <div className="flex w-full justify-end gap-x-4">
        <ThemeToggle />
        <div className="pt-0.5">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
