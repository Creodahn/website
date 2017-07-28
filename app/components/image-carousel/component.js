import Ember from 'ember';
// const { log } = Ember.Logger;

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', () => {
      $('.fotorama').fotorama();
    });
  }
});
