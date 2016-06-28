import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bottom-spacer', 'nav-bar'],
  tagName: 'div',
  didInsertElement: function() {
    $(this.element).attr('role', 'navigation');
  }
});
