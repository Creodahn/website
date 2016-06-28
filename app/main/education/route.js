import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('main').set('style', '');
  },
  afterModel: function() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/education.jpg)');
  }
});
