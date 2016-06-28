import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('main').set('style', '');
  },
  model: function() {
    return this.modelFor('main').get('projects').then((projects) => {
      return projects;
    });
  },
  afterModel: function() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/project.jpg)');
  }
});
