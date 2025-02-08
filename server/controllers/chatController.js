import { GoogleGenerativeAI } from "@google/generative-ai";

export const getContentFromGeminiAi = async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = req.body.question;

    const result = await model.generateContent(prompt);
    return res.status(200).json(result.response.text());
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to fetch Gemini response" });
  }
};
