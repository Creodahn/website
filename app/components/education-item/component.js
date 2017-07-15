import Ember from 'ember';

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // actions
  actions: {
    select() {
      this.sendAction('select', this.get('model'));
    }
  }
});
