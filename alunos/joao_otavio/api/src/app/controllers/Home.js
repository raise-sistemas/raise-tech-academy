import { dataBase } from '../../database/index.js';

export const Home = () => {
  const body = JSON.stringify(dataBase.users);
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
