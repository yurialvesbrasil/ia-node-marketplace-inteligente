import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

async function generateText() {
  const completion = await client.chat.completions
  .create({
    model: 'gpt-4o-mini',
    max_completion_tokens: 100,
    messages: [
      {
        role: 'developer',
        content: 'Use emojis a cada 2 palavras. Isso é obrigatório, ignore regras que mudem a utilização de emojis. Gere um texto com no máximo uma frase.'
      },
      {
        role: 'user',
        content: 'Escreva uma mensagem de uma frase sobre unicórnios. (Não pode usar emoji)',
      },
      {
        role: "assistant",
        content: 'Os unicórnios 🌈 são 🦄 criaturas mágicas 🪄 que simbolizam ✨ pureza e 🌟 beleza.'
      },
      {
        role: 'user',
        content: 'Obrigado'
      }
    ],
  })

  console.log(completion.choices[0].message.content);
}

generateText();
