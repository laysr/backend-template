import { Router } from 'express';

import sessionsRoutes from './sessions.routes';

const authRoutes = Router();

authRoutes.use('/sessions', sessionsRoutes);

export default authRoutes;
