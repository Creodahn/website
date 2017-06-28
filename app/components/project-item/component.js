import Ember from 'ember';

export default Ember.Component.extend({
  // computed properties
  title: Ember.computed('model.name', function() {
    return `${this.get('model.name')} Screenshots`;
  }),
  actions: {
    select() {
      this.sendAction('select', this.get('model'));
    },
    selectImages(images) {
      this.sendAction('selectImages', images, this.get('title'));
    }
  }
});
