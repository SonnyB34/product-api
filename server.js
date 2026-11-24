import 'dotenv/config.js';
import express from 'express';
import connectDB from './config/connection.js';
import productRoutes from './routes/ProductRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/products', productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});
