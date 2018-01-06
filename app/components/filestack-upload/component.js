import Ember from 'ember';

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // hooks
  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', (function() {
      this.set('client', filestack.init('AGfPm0pN1Q3SY6LVzGqvKz'));
    }).bind(this));
  },
  didReceiveAttrs() {
    const opts = this.get('options');

    this.set('options', opts ? opts : {});
  },
  // actions
  actions: {
    showPicker() {
      this.get('client').pick(this.get('options')).then((function(result) {
        this.sendAction('upload', result.filesUploaded);
      }).bind(this));
    }
  }
});
