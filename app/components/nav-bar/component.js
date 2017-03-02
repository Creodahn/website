import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement() {
    $(this.element).attr('role', 'navigation');
  },
  actions: {
    login() {
      this.sendAction('login');
    },
    logout() {
      this.sendAction('logout');
    }
  }
});
