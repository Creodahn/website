import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('main').get('workExperiences').then((exp) => {
      return exp;
    });
  },
  actions: {
    didTransition: function() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/work.jpg)');
    }
  }
});
