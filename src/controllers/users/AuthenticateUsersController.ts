import { FastifyReply, FastifyRequest } from 'fastify';
import { authenticateUsersUseCase } from '../../usecases/users';
import { AuthenticateUsersUseCase } from '../../usecases/users/AuthenticateUsersUseCase';

export class AuthenticateUsersController {
  async handle(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    const authorizationUrl = await authenticateUsersUseCase.execute();

    return reply.redirect(authorizationUrl);
  }
}
