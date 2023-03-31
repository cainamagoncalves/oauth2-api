import { makeAuthenticateUsersWithGoogleUseCase } from '../../usecases/factories/makeAuthenticateUsersWithGoogleUseCase';
import { AuthenticateUsersWithGoogleController } from './AuthenticateUsersWithGoogleController';

const authenticateUsersController = new AuthenticateUsersWithGoogleController(
  makeAuthenticateUsersWithGoogleUseCase()
);

export { authenticateUsersController };
