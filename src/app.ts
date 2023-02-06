import express from 'express';
import validateData from './middlewares/validateData.middleware';
import calculateRoutes from './routes/calculate.routes';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/calculate/', validateData, calculateRoutes);

app.listen(3000, () => {
  console.log('Server running 🥳');
});
