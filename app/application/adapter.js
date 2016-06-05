import DS from 'ember-data';
import ENV from 'personal-website/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: ENV.APP.apiURL
});
