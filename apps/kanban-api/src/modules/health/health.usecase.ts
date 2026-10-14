import { checkConnection } from './health.repository.js';

export const getHealth = async () => {
  const response = {
    apiIsConnected: true,
    dbIsConnected: await checkConnection(),
  };
  return response;
};
