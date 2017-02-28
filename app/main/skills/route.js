import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('main').set('style', '');
  },
  model() {
    return this.modelFor('main').get('skills').then((skills) => {
      return skills;
    });
  },
  afterModel() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/skills.jpg)');
  }
});
