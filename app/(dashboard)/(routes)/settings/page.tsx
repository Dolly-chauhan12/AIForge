import { Settings } from "lucide-react";

import Heading from "@/components/Heading";
import { checkProSubscription } from "@/lib/subscription";
import { Subscriptionbutton } from "@/components/SubscriptionButton";

const SettingsPage = async () => {
  const isPro = await checkProSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings}
        iconColor="text-gray-500"
        bgColor="bg-gray-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on pro a plan"
            : "You are currently on a free plan"}
        </div>
        <Subscriptionbutton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
