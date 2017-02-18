import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service('session'),
  sessionAuthenticated() {
    console.log('session authenticated');
  },
  sessionInvalidated() {
    console.log('session invalidated');
  },
  actions: {
    error(error/* , transition */) {
      if(error) {
        this.transitionTo('error');
      }
    }
  }
});
