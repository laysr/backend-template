import { Router } from 'express';

import userRoutes from './user.routes';

const externalRoutes = Router();

externalRoutes.use('/user', userRoutes);

export default externalRoutes;
