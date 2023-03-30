import * as dotenv from 'dotenv';
dotenv.config();

export default {
  googleOAuthClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
  googleOAuthClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  googleOAuthRedirectUri: 'http://localhost:3000',
};
