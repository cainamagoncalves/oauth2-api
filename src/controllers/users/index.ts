import { OAuth2GoogleProvider } from '../../shared/providers/OAuth2Provider/implementations/OAuth2GoogleProvider';
import { AuthenticateUsersWithGoogleUseCase } from '../../usecases/users/AuthenticateUsersUseCase';
import { AuthenticateUsersWithGoogleController } from './AuthenticateUsersWithGoogleController';

const oAuth2GoogleProvider = new OAuth2GoogleProvider();
const authenticateUsersWithGoogleUseUseCase =
  new AuthenticateUsersWithGoogleUseCase(oAuth2GoogleProvider);

const authenticateUsersController = new AuthenticateUsersWithGoogleController(
  authenticateUsersWithGoogleUseUseCase
);

export { authenticateUsersController };
