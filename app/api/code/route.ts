import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { checkApiLimit, increaseApiUsageCount } from "@/lib/api-limit";
import { checkProSubscription } from "@/lib/subscription";

const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are a code generator. You must answer in markdown code snippets.Use code comments for explanations",
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized ", { status: 401 });
    }

    /*if (!OpenAIconfig.apiKey) {
      return new NextResponse("OpenAI API key not configured ", {
        status: 500,
      });
    }*/

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = checkProSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Your usage limit is exhausted", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    if (!isPro) {
      await increaseApiUsageCount();
      console.log("Reached for increasing the request count");
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal error ", { status: 500 });
  }
}
