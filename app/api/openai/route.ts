import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
});

export async function POST(request: NextRequest) {
  const question = await request.text();
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are not a very rude and a witty assistant. You will receive a question from the user and you have to respond with very harsh(as harsh as you can be) and witty responses which are funny and sometimes sarcastic also,yassociate some responses with global personalities. The goal is to make user laugh. Response should not be more than 80 words. ",
      },
      { role: "user", content: `${question}` },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    n: 1,
  });
  return NextResponse.json(completion.choices[0].message.content);
}
