import { OAuth2Repository } from '../../shared/providers/OAuth2Provider/repositories/OAuth2Repository';

export class AuthenticateUsersWithGoogleUseCase {
  constructor(private oAuth2Provider: OAuth2Repository) {}

  async execute() {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'openid',
    ];

    const authorizationUrl = await this.oAuth2Provider.generateAuthenticateUrl({
      access_type: 'offline',
      scope: scopes,
      include_granted_scopes: true,
    });

    return authorizationUrl;
  }
}
