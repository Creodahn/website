import Ember from 'ember';
const { log } = Ember.Logger;

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog-post', params['blog-post_id']).then((post) => {
      log(post);
      return post;
    });
  },
  actions: {
    modalClosed() {
      this.transitionTo('main.blog');
    }
  }
});
