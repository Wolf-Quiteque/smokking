// lib/squareClient.js
import { Client, Environment } from 'square/legacy';

let squareClient = null;

export function getSquareClient() {
  if (squareClient) return squareClient;

  const accessToken = process.env.SQUARE_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('SQUARE_ACCESS_TOKEN is not set');
  }

  const environment =
    process.env.SQUARE_ENVIRONMENT === 'production'
      ? Environment.Production
      : Environment.Sandbox;

  console.log('Creating Square client with environment:', environment);

  squareClient = new Client({
    bearerAuthCredentials: {
      accessToken,
    },
    environment,
  });

  return squareClient;
}
