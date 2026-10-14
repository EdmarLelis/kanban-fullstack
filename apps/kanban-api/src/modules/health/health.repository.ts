import { prisma } from '../../lib/prisma.js';

export const checkConnection = async (): Promise<boolean> => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.log(`Database connection failed: ${error}`);
    return false;
  }
};
