import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathChange: function() {
    console.log(this.get('currentPath'));
  }.observes('currentPath'),
  actions: {
    alterTitle: function() {
      this.transitionToRoute('main.about-me');
    }
  }
});
