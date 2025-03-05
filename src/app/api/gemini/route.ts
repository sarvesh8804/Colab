// // app/api/gemini/route.ts
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from 'next/server';

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { text } = await req.json();
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const modifiedText = `${text} (correct grammar, suggest formal changes and autocomplete, 3-4 line response, no bold texts, dont give examples, dont use list format)`;

//     const result = await model.generateContent(modifiedText);
//     const response = await result.response;
//     let geminiText = response.text();

//     // Split after every full stop, handling potential edge cases
//     geminiText = geminiText.replace(/(\.(?!\s*$))(?!(?:\w\.\w)|(?:[A-Z][a-z]\.))/g, '.\n');

//     return NextResponse.json({ result: geminiText });
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return NextResponse.json({ error: "Failed to generate content." }, { status: 500 });
//   }
// }







// app/api/gemini/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { text } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const modifiedText = `${text} (list incorrect grammar with line number, suggest formal changes and autocomplete, short response, no bold texts, dont give examples, dont use list format)`;

    const result = await model.generateContent(modifiedText);
    const response = await result.response;
    let geminiText = response.text();

    // Split after every full stop, handling potential edge cases
    geminiText = geminiText.replace(/(\.(?!\s*$))(?!(?:\w\.\w)|(?:[A-Z][a-z]\.))/g, '.\n');

    return NextResponse.json({ result: geminiText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate content." }, { status: 500 });
  }
}