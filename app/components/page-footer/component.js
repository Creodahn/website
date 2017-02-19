import Ember from 'ember';

export default Ember.Component.extend({
  date: new Date().getFullYear(),
  tagName: '',
  actions: {
    login() {
      this.sendAction('login');
    }
  }
});
