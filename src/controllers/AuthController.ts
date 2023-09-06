import { Request, Response } from 'express';
import { SECRET_KEY } from '../constant/SECRETKEY';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Password from '../models/Password';

const user = new User();

class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const userFinded = user.findUserByUsername(username);

      if (!userFinded || !(await bcrypt.compare(password, userFinded.password))) {
        res.status(401).json({ message: 'Credenciais inválidas' });
        return;
      }

      const token = jwt.sign({ id: userFinded.id }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async signup(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;

      const passowrdHashed = await Password.hashPassword(password);

      user.create(username, passowrdHashed);

      res.json({ message: "Criado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

export default AuthController;
