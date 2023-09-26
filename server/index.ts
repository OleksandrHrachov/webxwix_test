import express from 'express';
import path from 'path';
import cors from 'cors';
import { productData } from './db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
})

app.get('/', (req, res) => {
  res.send(JSON.stringify(productData));
})

