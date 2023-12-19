import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getUserApiUsage } from "@/lib/api-limit";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiUsageCount = await getUserApiUsage();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar apiUsageCount={apiUsageCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
