import Ember from 'ember';

export default Ember.Component.extend({
  //attributes
  classNames: ['project-item'],
  tagName: 'div',
  //computed properties
  modalId: Ember.computed('model.name', function() {
    return this.get('model.name').replace(' ', '');
  })
});
