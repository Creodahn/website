import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/about-me.jpg)');
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
