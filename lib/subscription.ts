import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { DAY_IN_MS } from "@/constants";

export const checkProSubscription = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) return false;

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
};
