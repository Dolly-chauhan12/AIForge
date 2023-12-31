"use client";

import { useState } from "react";
import { useProModal } from "@/hooks/use-pro-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { Badge } from "./ui/badge";
import { tools } from "@/constants";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/payment");

      window.location.href = await response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
      toast.error("Something went wrong.Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center gap-x-1 pb-2 font-bold">
            Upgrade to AIForge
            <Badge className="uppercase text-sm font-bold" variant="premium">
              Pro
            </Badge>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 sapce-y-2 text-zinc-900 font-medium ">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 flex items-center justify-between mb-2"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <CheckCircle className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Sparkles className="w-4 h-4 fill-white ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
