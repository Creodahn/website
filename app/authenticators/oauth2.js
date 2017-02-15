import ENV from 'personal-website/config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.APP.apiURL}/api/login`,
  refreshAccessTokens: true,
  serverTokenRevocationEndpoint: null
});
