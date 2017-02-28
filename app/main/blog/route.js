import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('main').get('blogPosts');
  },
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/blog.jpg)');
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
