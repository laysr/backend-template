import { Router } from 'express';

import { CreateUserController } from '../../controllers/user/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post('/', createUserController.handle);

export default userRoutes;
