import { MessageCircle, ImageIcon, Video, Code2, Music4 } from "lucide-react";
export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Conversation",
    icon: MessageCircle,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video Generation",
    icon: Video,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Code Generation",
    icon: Code2,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Music Generation",
    icon: Music4,
    color: "text-yellow-500",
    bgColor: "bg-yello-500/10",
  },
];
