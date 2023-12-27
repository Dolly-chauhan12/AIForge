"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  MessageCircle,
  ImageIcon,
  Video,
  Music4,
  Code2,
} from "lucide-react";
import { useRouter } from "next/navigation";
const tools = [
  {
    label: "Conversation",
    icon: MessageCircle,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Code Generation",
    icon: Code2,
    href: "/code",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Music Generation",
    icon: Music4,
    href: "/music",
    color: "text-yellow-500",
    bgColor: "bg-yello-500/10",
  },
];
export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Forge, Innovate, Excel with AIForge.
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Interact with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4 ">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-blue-400 dark:border-gray-300 flex items-center justify-between cursor-pointer hover:scale-105 transition"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <div>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
