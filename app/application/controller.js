import Ember from 'ember';

export default Ember.Controller.extend({
  mainCtrl: Ember.inject.controller('main'),
  currentPathChange: function() {
    console.log(this.get('currentPath'));
    if(this.get('currentPath') !== 'main.index') {
      this.get('mainCtrl').set('fullTitle', false);
    }
  }.observes('currentPath')
});
