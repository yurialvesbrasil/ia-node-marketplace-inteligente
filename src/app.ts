import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import OpenAI from 'openai';

const app = express();
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
app.use(express.json());

app.post('/generate', async (req, res) => {
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    max_completion_tokens: 100,
    messages: [
      {
        role: 'developer',
        content: 'Liste três produtos que atendam a necessidade do usuário. Responda em JSON no formato { produtos: string[] }',
      },
      {
        role: 'user',
        content: req.body.message,
      },
    ],
  });

  res.json({ message: completion.choices[0].message.content });
});

export default app;
