import { GoogleGenAI } from "@google/genai";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3000;

const genAI = new GoogleGenAI({
  apiKey: "AIzaSyA56jxfoesQscVu5HN7OTK-OOiV_QoXe2A",
});

// Middleware to parse JSON bodies
app.use(express.json());

// Basic Route (The Root)
app.post("/ask-gemini", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await genAI.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  res.status(200).json({
    response: response,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is vibrating on http://localhost:${PORT}`);
});
