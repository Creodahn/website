import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service('session'),
  actions: {
    didTransition() {
      $('body').removeClass('modal-open');
    },
    error(error/* , transition */) {
      if(error) {
        this.transitionTo('error');
      }
    }
  }
});
