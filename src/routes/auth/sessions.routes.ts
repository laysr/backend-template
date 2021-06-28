import { Router } from 'express';

import { AuthenticateUserController } from '../../controllers/AuthenticateUserController';

const sessionsRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

sessionsRoutes.post('/login', authenticateUserController.handle);

export default sessionsRoutes;
