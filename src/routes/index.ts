import { Router } from 'express';

import authRoutes from './auth';
import externalRoutes from './external';
import managementRoutes from './management';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/external', externalRoutes);
routes.use('/management', ensureAuthenticated, managementRoutes);

export default routes;
