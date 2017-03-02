import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  sessionAccount: service('session-account'),
  model() {
    return this.get('sessionAccount.user').then(function(user) {
      return user;
    });
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
