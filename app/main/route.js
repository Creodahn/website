import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service('session'),
  model() {
    return this.store.findRecord('person', 1);
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
  },
  actions: {
    didTransition() {
      $('.title-card').switchClass('container small-title', 'content-section title-card');
      this.controller.set('fullTitle', true);
      return true; // Bubble the didTransition event
    },
    login() {
      this.transitionTo(this.get('session.isAuthenticated') ? 'main.admin' : 'login');
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
