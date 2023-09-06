import { Request, Response } from 'express';

class UserController {
  static async me(req: Request, res: Response): Promise<void> {
    try {
      res.json({ message: "Rota acessada" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

export default UserController;
