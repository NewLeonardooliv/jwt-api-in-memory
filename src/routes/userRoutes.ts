import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/me', UserController.me);

export default router;