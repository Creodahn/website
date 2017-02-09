import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    alterTitle() {
      if(this.get('fullTitle')) {
        this.sendAction('alterTitle');
      }
    }
  }
});
