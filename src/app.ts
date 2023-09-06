import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import authenticateToken from './middlewares/authMiddleware';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
