import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nav-bar'],
  tagName: 'div',
  didInsertElement: function() {
    $(this.element).attr('role', 'navigation');
  }
});
