import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog-post', params['blog-post_id']);
  },
  actions: {
    modalClosed() {
      this.transitionTo('main.blog');
    }
  }
});
