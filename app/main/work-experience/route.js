import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('main').get('workExperiences').then((exp) => {
      return exp;
    });
  }
});
