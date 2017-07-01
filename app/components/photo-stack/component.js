import Ember from 'ember';
const { log } = Ember.Logger;

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // computed properties
  carouselId: Ember.computed('modal-id', function() {
    return `${this.get('modal-id')}-carousel`;
  }),
  firstImage: Ember.computed('model', function() {
    return this.get('model').get('firstObject');
  }),
  actions: {
    selectImages() {
      log('selected images');
      this.sendAction('selectImages', this.get('model'));
      $(`#${this.get('modal-id')}`).modal('show');
    }
  }
});
