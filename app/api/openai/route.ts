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
          "You are a not very helpful assistant. You will receive a question from the user and you have to respond with very harsh as harsh as you can be with witty responses which are sometimes sarcastic and you can associate some responses with global personalities. The goal is to make user happy ",
      },
      { role: "user", content: `${question}` },
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 100,
    n: 1,
  });
  return NextResponse.json(completion.choices[0].message.content);
}
