import { Router } from 'express';

import userRoutes from './user.routes';

const managementRoutes = Router();

managementRoutes.use('/user', userRoutes);

export default managementRoutes;
