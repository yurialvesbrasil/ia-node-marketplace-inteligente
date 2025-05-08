import express from 'express';
import { createEmbeddingsBatch, createEmbeddingsBatchFile, createVector, embedProducts, generateCart, generateEmbedding, generateProducts, getBatch, getFileContent, uploadFile } from "./openai";
import { produtosSimilares, todosProdutos } from "./database";
import { createReadStream } from "node:fs";
import path from "node:path";

const app = express();
app.use(express.json());

app.post('/generate', async (req, res) => {
  try {
    const products = await generateProducts(req.body.message);
    res.json(products);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/cart", async (req, res) => {
  const { message } = req.body;
  const embedding = await generateEmbedding(message);
  if (!embedding) {
    res.status(500).json({ error: 'Embedding não gerada' });
    return;
  }
  const produtos = produtosSimilares(embedding);
  res.json(produtos.map(p => ({ nome: p.nome, similaridade: p.similaridade })));
});

app.post('/embeddings', async (req, res) => {
  await embedProducts();
  console.log(todosProdutos());
  res.status(201).end();
});

app.post('/embedding', async (req, res) => {
  const { input } = req.body;
  await generateEmbedding(input);
  res.status(201).end();
});

app.post('/response', async (req, res) => {
  const { input } = req.body;

  const cart = await generateCart(input, todosProdutos().map(p => p.nome));

  res.json(cart);
})

app.post('/upload', async (req, res) => {
  const file = createReadStream(path.join(__dirname, '..', 'static', 'recipes.md'));
  uploadFile(file)
  res.status(201).end();
})

app.post('/vector-store', async (req, res) => {
  await createVector();
  res.status(201).end();
})

app.post('/embeddings-batch', async (req, res) => {
  const file = await createEmbeddingsBatchFile(['sorvete', 'alface']);
  const batch = await createEmbeddingsBatch(file.id);
  res.json(batch);
})

app.post('/embeddings-batch/result', async (req, res) => {
  const batch = await getBatch('batch_681cef110b348190ac52d60760584d26');

  if (batch.status !== 'completed' || !batch.output_file_id) {
    res.json(batch);
    return;
  }

  console.log('TODO: process results', batch.output_file_id);

  const file = await getFileContent(batch.output_file_id);
  console.log(file);

  res.json(batch);
})

export default app;
