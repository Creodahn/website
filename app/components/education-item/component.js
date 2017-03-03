import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    select() {
      this.sendAction('select', this.get('model'));
    }
  }
});
