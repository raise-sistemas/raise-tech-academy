import { dataBase } from '../../database/index.js';
import { randomUser } from '../Views/user.html.js';

export const About = () => {
  const user = dataBase.users[Math.floor(Math.random() * dataBase.users.length)]
  return new Response(randomUser(user), {
    headers: {
      'Content-Type': 'text/html',
    }
  });
}
