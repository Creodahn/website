import Ember from 'ember';
import ENV from 'personal-website/config/environment';

export default Ember.Controller.extend({
  // attributes
  fullTitle: true,
  // hooks
  init() {
    this.set('environment', ENV.environment);
  },
  // actions
  actions: {
    alterTitle() {
      $('.title-card').switchClass('content-section title-card', 'container small-title');

      this.set('fullTitle', false);
      this.transitionToRoute('main.about-me');
    }
  }
});
