import Ember from 'ember';

export default Ember.Controller.extend({
  currentPathChange: function() {
    console.log(this.get('currentPath'));
  }.observes('currentPath')
});
