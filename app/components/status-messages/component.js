import Ember from 'ember';
// const log = Ember.Logger.log;

export default Ember.Component.extend({
  // attributes
  alertType: '',
  error: '',
  success: '',
  tagName: '',
  // computed properties
  message: Ember.computed('error', 'success', function() {
    return this.get('error') || this.get('success');
  }),
  wrapText: Ember.computed('allowWrap', 'message.length', function() {
    return this.get('message.length') > 0 && this.get('allowWrap');
  }),
  // observers
  // set timer when error is received
  watchError: function() {
    if(this.get('error')) {
      this.set('alertType', 'alert-danger');
      Ember.run.later(((function() {
        this.set('error', '');
      }).bind(this)), this.get('timeout'));
    }
  }.observes('error'),
  // handle showing message
  watchMessage: function() {
    const element = $(this.element).find('.alert');

    if(this.get('message')) {
      Ember.run.later((function() {
        $(element).addClass('wrap');
      }), 300);
    } else {
      $(element).removeClass('wrap');
    }
  }.observes('message'),
  // set timer when success is received
  watchSuccess: function() {
    if(this.get('success')) {
      this.set('alertType', 'alert-success');
      Ember.run.later(((function() {
        this.set('success', '');
      }).bind(this)), this.get('timeout'));
    }
  }.observes('success'),
  // event hooks
  didReceiveAttrs() {
    const t = this.get('timeout'),
          transition = this.get('transition');

    this.set('timeout', t ? t : 3000);

    this.set('transition', transition ? transition : 'hide-vertical');
  }
});
