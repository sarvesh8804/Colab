import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, editorContent } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // if (!message.trim()) {
    //     return NextResponse.json({ reply: "Hi there! How can I assist you today?" });
    // }

    // Including editor content as context for chatbot
    const chatbotPrompt = `You are a helpful AI assistant. The user is working on a document and needs assistance. Below is the document content for reference:\n\n"${editorContent}"\n\nUser: ${message}\nAI:`;

    const result = await model.generateContent(chatbotPrompt);
    const response = await result.response;
    const botReply = response.text();

    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return NextResponse.json({ error: "Failed to generate response." }, { status: 500 });
  }
}
