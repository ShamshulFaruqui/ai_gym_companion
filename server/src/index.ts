import express, { Express, Request, Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const model = new OpenAI({
  temperature: 0.7,
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
  baseURL: "https://openrouter.ai/api/v1", // Point to OpenRouter API
  },
});

const template = `
As a certified fitness trainer with 10+ years of experience, provide detailed advice on:
{question}

Include:
1. Step-by-step instructions
2. Common mistakes to avoid
3. Recommended equipment (if applicable)
4. Safety precautions

Format your response in clear paragraphs with proper spacing.`;

app.post('/api/ask', async (req: Request, res: Response) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const prompt = new PromptTemplate({ template, inputVariables: ["question"] });
    const formattedPrompt = await prompt.format({ question });
    const answer = await model.invoke(formattedPrompt);

    return res.json({ answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
});

// Serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/public')));

// Handle client-side routing
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});