import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  sessionAccount: service('session-account'),
  model() {
    return this.store.createRecord('blog-post');
  },
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('froalaEditor', {
      params: {
        toolbarInline: true,
        placeholderText: 'Enter..'
          // For more params refer: 'https://www.froala.com/wysiwyg-editor/docs/options'
      },
    });
  },
  actions: {
    save() {
      const person = this.get('sessionAccount.profile');

      if(person) {
        Ember.RSVP.Promise.resolve(person).then((function(person) {
          const post = this.get('model');

          post.set('person', person);
          post.save().catch((function(reason) {
            const reasonObj = JSON.parse(reason);

            this.set('error', reasonObj.errors ? reasonObj.errors[0].detail: 'Encountered an error');
          }).bind(this));
        }).bind(this.controller));
      } else {
        this.controller.set('error', 'Was not able to load your user profile to save this post');
      }
    }
  }
});
