import Ember from 'ember';

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    if(!this.get('type')) {
      this.set('type', 'text');
    }
  }
});
