import DS from 'ember-data';
import ENV from 'personal-website/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: 'api',
  host: ENV.APP.apiURL,
  authorizer: 'authorizer:application'
});
