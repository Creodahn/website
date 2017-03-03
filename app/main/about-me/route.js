import Ember from 'ember';
const { service } = Ember.inject;
export default Ember.Route.extend({
  session: service('session'),
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
  },
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/about-me.jpg)');
    },
    save() {
      this.controller.get('model').save();
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
