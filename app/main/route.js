import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findRecord('person', 1);
  },
  actions: {
    didTransition: function() {
      $('.title-card').switchClass('container small-title', 'content-section title-card');
      this.controller.set('fullTitle', true);
      return true; // Bubble the didTransition event
    }
  }
});
