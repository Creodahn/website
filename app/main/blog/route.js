import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  //  attributes
  session: service('session'),
  sessionAccount: service('session-account'),
  //  hooks
  model() {
    return this.modelFor('main').get('blogPosts');
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
    controller.set('selected', this.store.createRecord('blog-post'));
  },
  //  actions
  actions: {
    cancel() {
      this.set('selected', this.store.createRecord('blog-post'));
    },
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/blog.jpg)');
    },
    save() {
      const post = this.controller.get('selected');

      this.get('sessionAccount.profile').then((function(person) {
        post.set('person', person);

        post.save();
      }).bind(this));
    },
    select(post) {
      this.controller.set('selected', post);
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
