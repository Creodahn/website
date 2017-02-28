import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
const { service } = Ember.inject,
      log = Ember.Logger.log;

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: service('session'),
  genericError: '<p>Could not authenticate your account with the provided information.</p><p>Please try again</p>',
  actions: {
    authenticate() {
      this.actions.authenticateWithOAuth2.call(this);
      $('button').blur();
    },
    authenticateWithOAuth2() {
      const { username, password } = this.controller.getProperties('username', 'password'),
            ctrl = this.controller,
            session = this.get('session');

      // Ensure error message is blank to start
      ctrl.set('error',  null);

      // Authenticate
      session.authenticate('authenticator:oauth2', username, password).catch((function(reason) {
        const reasonObj = JSON.parse(reason);

        ctrl.set('error', (reasonObj.errors[0] ? reasonObj.errors[0].detail : this.get('genericError')));
      }).bind(this));
    },
    cancel() {
      this.transitionTo('main.about-me');
    },
    willTransition() {
      $('#login-modal').modal('hide');
    }
  }
});
