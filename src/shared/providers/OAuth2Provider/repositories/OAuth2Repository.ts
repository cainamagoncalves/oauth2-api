import { Credentials } from 'google-auth-library';

export interface OAuth2Repository<T = unknown> {
  generateAuthenticateUrl(options?: T): Promise<string>;
  setAuthenticateCredentials(authorizationToken: string): Promise<void>;
  getOAuth2Credentials(): Promise<Credentials>;
}
