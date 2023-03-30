import fastify from 'fastify';
import { userRoutes } from './routes/users.routes';
import * as dotenv from 'dotenv';
dotenv.config();

const app = fastify();

app.register(userRoutes, { prefix: 'users' });

export { app };
