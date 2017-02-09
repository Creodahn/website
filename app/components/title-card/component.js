import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'main',
  actions: {
    alterTitle() {
      if(this.get('fullTitle')) {
        this.sendAction('alterTitle');
      }
    }
  }
});
