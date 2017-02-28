import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('blog-post');
  },
  actions: {
    save() {
      const post = this.controller.get('model');

      post.set('person', this.modelFor('main'));

      post.save();
    }
  }
});
