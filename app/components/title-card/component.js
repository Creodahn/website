import Ember from 'ember';
const $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'main',
  actions: {
    alterTitle: function() {
      $('.title-card').find('.btn-transparent').addClass('hidden');
      $('.title-card').removeClass('content-section').removeClass('title-card');

      this.sendAction('alterTitle');
    }
  }
});
