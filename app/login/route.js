import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: service('session'),
  sessionAccount: service('session-account'),
  genericError: '<p>Could not authenticate your account with the provided information.</p><p>Please try again</p>',
  actions: {
    authenticate() {
      this.actions.authenticateWithOAuth2.call(this);
      $('button').blur();
    },
    authenticateWithOAuth2() {
      const { username, password } = this.controller.getProperties('username', 'password'),
            session = this.get('session');

      // Ensure error message is blank to start
      this.set('error',  null);

      // Authenticate
      session.authenticate('authenticator:oauth2', username, password).catch((function(reason) {
        this.set('error', (reason.error || this.get('genericError')));
      }).bind(this));
    },
  }
});
