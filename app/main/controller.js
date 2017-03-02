import Ember from 'ember';

export default Ember.Controller.extend({
  // attributes
  fullTitle: true,
  // actions
  actions: {
    alterTitle() {
      $('.title-card').switchClass('content-section title-card', 'container small-title');

      this.set('fullTitle', false);
      this.transitionToRoute('main.about-me');
    }
  }
});
