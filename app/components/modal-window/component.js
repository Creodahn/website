import Ember from 'ember';
//  const log = Ember.Logger.log;

export default Ember.Component.extend({
  //  attributes
  tagName: '',
  //  hooks
  didRender() {
    const id = `#${this.get('id')}`;

    if(this.get('show-on-transition')) {
      $(id).modal('show');
    }
  },
  //  actions
  actions: {
    cancelAction() {
      this.sendAction('cancelAction');
    },
    formAction() {
      this.sendAction('formAction');
      if(this.get('single-footer-button') || this.get('close-on-action')) {
        $(`#${this.get('id')}`).modal('hide');
      }
    }
  }
});
