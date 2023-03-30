import { OAuth2Repository } from '../repositories/OAuthRepository';
import OAuth2Client, { google } from 'googleapis';
import oAuth2Config from '../../../../config/oAuth2.config';
import { GenerateAuthUrlOpts } from 'google-auth-library';

export class OAuth2GoogleProvider implements OAuth2Repository {
  oauth2Client: OAuth2Client.Common.OAuth2Client;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2({
      clientId: oAuth2Config.googleOAuthClientId,
      clientSecret: oAuth2Config.googleOAuthClientSecret,
      redirectUri: oAuth2Config.googleOAuthRedirectUri,
    });
  }

  async generateAuthenticateUrl(
    options?: GenerateAuthUrlOpts
  ): Promise<string> {
    const authorizationUrl = this.oauth2Client.generateAuthUrl({
      ...options,
    });

    return authorizationUrl;
  }

  async setAuthenticateCredentials(authorizationToken: string): Promise<void> {
    const { tokens } = await this.oauth2Client.getToken(
      decodeURI(authorizationToken)
    );

    this.oauth2Client.setCredentials(tokens);
  }

  async getOAuth2Credentials() {
    return this.oauth2Client.credentials;
  }
}
