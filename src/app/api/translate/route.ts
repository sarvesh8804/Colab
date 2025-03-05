export async function POST(req: Request) {
    try {
      const { text, targetLang } = await req.json();
  
      if (!text || !targetLang) {
        return new Response(JSON.stringify({ error: "Missing text or target language" }), { status: 400 });
      }
  
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
      );
  
      const data = await response.json();
  
      // Type-safe extraction of translated text
      const translatedText = (data[0] as [string, string, null, null][])
        .map(item => item[0])
        .join(" ");
  
      return new Response(JSON.stringify({ translatedText }), { status: 200 });
    } catch (error) {
      console.error("Translation API Error:", error);
      return new Response(JSON.stringify({ error: "Failed to translate" }), { status: 500 });
    }
  }
  