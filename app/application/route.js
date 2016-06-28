import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error, transition) {
      if(error) {
        this.transitionTo('error');
      }
    }
  }
});
