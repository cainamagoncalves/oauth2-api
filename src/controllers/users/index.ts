import { makeAuthenticateUsersWithGoogleUseCase } from '../../usecases/factories/makeAuthenticateUsersWithGoogleUseCase';
import { AuthenticateUsersWithGoogleController } from './AuthenticateUsersWithGoogleController';

const authenticateUsersWithGoogleController =
  new AuthenticateUsersWithGoogleController(
    makeAuthenticateUsersWithGoogleUseCase()
  );

export { authenticateUsersWithGoogleController };
