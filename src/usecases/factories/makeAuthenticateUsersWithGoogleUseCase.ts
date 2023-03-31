import { OAuth2GoogleProvider } from '../../shared/providers/OAuth2Provider/implementations/OAuth2GoogleProvider';
import { AuthenticateUsersWithGoogleUseCase } from '../users/AuthenticateUsersUseCase';

export function makeAuthenticateUsersWithGoogleUseCase() {
  const oAuth2GoogleProvider = new OAuth2GoogleProvider();
  const authenticateUsersWithGoogleUseCase =
    new AuthenticateUsersWithGoogleUseCase(oAuth2GoogleProvider);

  return authenticateUsersWithGoogleUseCase;
}
