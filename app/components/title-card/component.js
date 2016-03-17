import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  actions: {
    scrollTitle: function() {
      $('.title-card').removeClass('content-section').removeClass('title-card');
    }
  }
});
