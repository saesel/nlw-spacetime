import cors from '@fastify/cors';
import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 Server running at http://localhost/3333'));
