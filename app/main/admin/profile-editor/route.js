import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('main.admin').get('person');
  },
  setupController(controller, model) {
    this._super(controller, model);
  },
  actions: {
    save() {
      this.controller.get('model').save();
    }
  }
});
