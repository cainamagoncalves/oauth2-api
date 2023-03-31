import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthenticateUsersWithGoogleUseCase } from '../../usecases/users/AuthenticateUsersUseCase';

export class AuthenticateUsersWithGoogleController {
  constructor(
    private authenticateUsersWithGoogleUseCase: AuthenticateUsersWithGoogleUseCase
  ) {}

  async handle(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    const authorizationUrl =
      await this.authenticateUsersWithGoogleUseCase.execute();

    return reply.redirect(authorizationUrl);
  }
}
