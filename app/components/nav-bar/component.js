import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInsertElement() {
    $(this.element).attr('role', 'navigation');
  }
});
