import Ember from 'ember';
//  const log = Ember.Logger.log;

export default Ember.Component.extend({
  //  attributes
  tagName: '',
  //  hooks
  didRender() {
    const id = `#${this.get('modal-id')}`;

    $(id).on('shown.bs.modal', function() {
      if(!$('body').hasClass('modal-open')) {
        $('body').addClass('modal-open');
      }
    });

    if(this.get('flex-modal')) {
      $(id).on('show.bs.modal', function() {
        $(id).addClass('flex-modal');
      });
    }

    if(this.get('show-on-transition')) {
      $(id).modal('show');
    }

    if(!this.get('stay-open-on-cancel')) {
      $(`${id}-cancel`).attr('data-dismiss', 'modal');
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
        $(`#${this.get('modal-id')}`).modal('hide');
      }
    }
  }
});
