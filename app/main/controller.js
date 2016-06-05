import Ember from 'ember';

export default Ember.Controller.extend({
  fullTitle: true,
  actions: {
    alterTitle: function() {
      //$('.title-card').find('.btn-transparent').addClass('hidden');
      //$('.title-card').removeClass('content-section').removeClass('title-card');
      this.set('fullTitle', false);
      this.transitionToRoute('main.about-me');
    }
  }
});
