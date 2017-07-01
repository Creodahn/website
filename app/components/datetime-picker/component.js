import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  didInserElement() {
    Ember.scheduleOnce('afterRender', () => {
      $(`#${this.get('id')}`).calendar();
    });
  }
});
