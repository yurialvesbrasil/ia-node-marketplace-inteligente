import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

client.chat.completions
  .create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: 'Escreva uma mensagem de uma frase sobre unicórnios.',
      },
    ],
  })
  .then((completion) => {
    console.log(completion.choices[0].message.content);
  });
