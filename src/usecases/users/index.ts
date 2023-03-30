import { OAuth2GoogleProvider } from '../../shared/providers/OAuth2Provider/implementations/OAuth2GoogleProvider';
import { AuthenticateUsersUseCase } from './AuthenticateUsersUseCase';

const oAuth2GoogleProvider = new OAuth2GoogleProvider();
const authenticateUsersUseCase = new AuthenticateUsersUseCase(
  oAuth2GoogleProvider
);

export { authenticateUsersUseCase };
