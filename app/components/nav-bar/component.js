import Ember from 'ember';
const $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'div',
  didInsertElement: function() {
    $(this.element).attr('role', 'navigation');
  }
});
