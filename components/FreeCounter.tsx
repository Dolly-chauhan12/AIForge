"use client";
import { useState, useEffect } from "react";
import { useProModal } from "@/hooks/use-pro-modal";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface FreeCounterProps {
  apiUsageCount: number;
}

const FreeCounter = ({ apiUsageCount = 0 }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0 ">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-4">
            <p>
              {apiUsageCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiUsageCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            className="w-full"
            variant="premium"
            onClick={proModal.onOpen}
          >
            Upgrade <Sparkles className="w-4 h-4 ml-2 fill-white " />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
