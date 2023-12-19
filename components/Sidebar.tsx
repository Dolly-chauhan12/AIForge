"use client";

import Link from "next/link";
import Image from "next/image";
import FreeCounter from "./FreeCounter";
import { cn } from "@/lib/utils";
import { Jost } from "next/font/google";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageCircle,
  ImageIcon,
  Video,
  Code2,
  Music4,
  Settings,
} from "lucide-react";

const JostFont = Jost({ weight: "500", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Code Generation",
    icon: Code2,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Music Generation",
    icon: Music4,
    href: "/music",
    color: "text-yellow-500",
  },
  {
    label: "Setttings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  apiUsageCount: number;
}

const Sidebar = ({ apiUsageCount = 0 }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.jpeg" />
          </div>
          <h1
            className={cn(
              "text-3xl text-orange-700 font-bold",
              JostFont.className
            )}
          >
            AiForge
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                route.href === pathname
                  ? " text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiUsageCount={apiUsageCount} />
    </div>
  );
};

export default Sidebar;
