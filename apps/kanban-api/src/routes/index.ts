import { Router } from 'express';
import type { Router as ExpressRouter } from 'express';
import { checkHealth } from '../modules/health/health.controller.js';

const router: ExpressRouter = Router();

router.get('/health', checkHealth);

export default router;
