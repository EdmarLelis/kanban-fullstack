import type { Request, Response } from 'express';
import { getHealth } from './health.usecase.js';

export const checkHealth = async (req: Request, res: Response) => {
  const response = await getHealth();
  if (!response.dbIsConnected) {
    res.status(503).json(response);
    return;
  }
  res.status(200).json(response);
};
