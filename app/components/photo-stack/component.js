import Ember from 'ember';

export default Ember.Component.extend({
  //attributes
  tagName: '',
  //computed properties
  carouselId: Ember.computed('modal-id', function() {
    return this.get('modal-id') + '-carousel';
  }),
  dataTarget: Ember.computed('modal-id', function() {
    return '#' + this.get('modal-id');
  }),
  firstImage: Ember.computed('model', function() {
    return this.get('model').get('firstObject');
  }),
  didInsertElement() {
    $('#' + this.get('carouselId')).carousel();
  },
  actions: {
    selectImages() {
      this.sendAction('selectImages', this.get('model'));
    }
  }
});
