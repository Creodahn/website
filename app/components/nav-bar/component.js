import Ember from 'ember';

export default Ember.Component.extend({
  //  attributes
  tagName: '',
  //  computed properties
  isDev: Ember.computed('environment', function() {
    return this.get('environment') === 'development';
  }),
  //  hooks
  didInsertElement() {
    $(this.element).attr('role', 'navigation');
  },
  //  actions
  actions: {
    login() {
      this.sendAction('login');
    },
    logout() {
      this.sendAction('logout');
    }
  }
});
