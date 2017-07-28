import Ember from 'ember';
// const log = Ember.Logger.log;

export default Ember.Component.extend({
  // attributes
  tagName: '',
  // lifecycle
  didInsertElement() {
    this._super();

    Ember.run.scheduleOnce('afterRender', () => {
      const id = `#${this.get('id')}`;

      $(id).modal({
        onHidden: () => {
          this.sendAction('modalClosed');
        }
      });

      if(this.get('showOnTransition')) {
        $(id).modal('show');
      }
    });
  }
});
