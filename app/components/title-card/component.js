import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  actions: {
    alterTitle: function() {
      this.sendAction('alterTitle');
    }
  }
});
