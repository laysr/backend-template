import { Router } from 'express';

import { UserController } from '../../controllers/UserController';

const userRoutes = Router();

const userController = new UserController();

userRoutes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default userRoutes;
