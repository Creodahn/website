import Ember from 'ember';
// const { log } = Ember.Logger;

export default Ember.Component.extend({
  // attributes
  tagName: '',
  //  computed properties
  isDev: Ember.computed('environment', function() {
    return this.get('environment') === 'development';
  }),
  // lifecycle
  didInsertElement() {
    Ember.run.schedule('afterRender', () => {
      this.getIsSmall();

      $(window).resize((/* e */) => {
        this.getIsSmall();
      });
    });
  },
  // functions
  getIsSmall() {
    let isSmall = false;

    if($(window).width() < 992) {
      isSmall = true;
    }

    this.set('isSmall', isSmall);
  },
  // actions
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
