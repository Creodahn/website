import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('main').set('style', '');
  },
  model: function() {
    return this.modelFor('main').get('workExperiences').then((exp) => {
      return exp;
    });
  },
  afterModel: function() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/work.jpg)');
  }
});
