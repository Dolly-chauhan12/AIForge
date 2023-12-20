"use client";

import axios from "axios";
import { useState } from "react";
import { Sparkles } from "lucide-react";

import { Button } from "./ui/button";

export const Subscriptionbutton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/payment");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={handleClick}
    >
      {isPro ? "Manage subscription" : "Upgrade"}
      {!isPro && <Sparkles className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
