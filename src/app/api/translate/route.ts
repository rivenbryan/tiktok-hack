import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";
import OpenAI from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest) {
  const { originalLanguage, resultLanguage, content } = await request.json();

  if (!originalLanguage || !resultLanguage || !content) {
    return new NextResponse("Bad request", { status: 400 });
  }
  const prompt = `Translate the following ${originalLanguage} text to ${resultLanguage} and only reply me with the result of translation: ${content}`;

  try {
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({
      data: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
    return new NextResponse("Error translating the text", { status: 500 });
  }
}
