import {GoogleGenerativeAI} from "@google/generative-ai";

export const getContentFromGeminiAi = async (req, res, next) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = req.body.question;

    const result = await model.generateContent(prompt);
    // console.log(result.response.text());
    return res.status(200).json(result.response.text());
  } catch (err) {
    console.log({ err });
  }
};
