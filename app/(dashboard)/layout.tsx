import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getUserApiUsage } from "@/lib/api-limit";
import { checkProSubscription } from "@/lib/subscription";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiUsageCount = await getUserApiUsage();
  const isPro = await checkProSubscription();

  return (
    <div className="h-full relative bg-slate-200 dark:bg-gray-900">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 dark:bg-gray-900 ">
        <Sidebar isPro={isPro} apiUsageCount={apiUsageCount} />
      </div>
      <main className="md:pl-72 bg-slate-200 dark:bg-gray-900">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
