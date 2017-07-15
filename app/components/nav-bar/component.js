import Ember from 'ember';
// const { log } = Ember.Logger;

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
    },
    showModal() {
      const currentModal = $('.ui.modal').get(0);
      $(currentModal).modal('show');
    }
  }
});
