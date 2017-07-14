import Ember from 'ember';
const { log } = Ember.Logger;

export default Ember.Component.extend({
  tagName: '',
  // lifecycle
  didInsertElement() {
    log('inserted calendar');
    Ember.run.scheduleOnce('afterRender', () => {
      log(`activating calendar ${this.get('id')}`);
      $(`#${this.get('id')}`).calendar();
    });
  }
});
