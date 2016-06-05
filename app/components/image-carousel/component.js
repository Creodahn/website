import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  //computed properties
  target: Ember.computed('carousel-id', function() {
    return '#' + this.get('carousel-id');
  })
});
