import { FastifyInstance } from 'fastify';
import { authenticateUsersController } from '../controllers/users';
import { oAuth2GoogleProviver } from '../shared/providers/OAuth2Provider/implementations';

async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/authenticate/google', (request, reply) => {
    return authenticateUsersController.handle(request, reply);
  });

  fastify.get('/authenticate/google/callback', async (request, reply) => {
    const requestQuery = request.query as any;

    console.log(decodeURI(requestQuery.code), 'asdoihadhasiud');

    try {
      await oAuth2GoogleProviver.setAuthenticateCredentials(requestQuery.code);
    } catch (error) {
      console.log(error);
    }
  });

  fastify.get('/token', async (request, reply) => {
    const credentials = await oAuth2GoogleProviver.getOAuth2Credentials();

    return { credentials };
  });
}

export { userRoutes };
