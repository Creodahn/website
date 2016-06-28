import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('main').set('style', '');
  },
  model: function() {
    return this.modelFor('main').get('skills').then((skills) => {
      return skills;
    });
  },
  afterModel: function() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/skills.jpg)');
  }
});
