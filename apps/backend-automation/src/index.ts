import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Elloms Automation Backend!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Automation backend listening at http://localhost:${port}`);
}); 