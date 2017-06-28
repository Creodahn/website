import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  //  attributes
  session: service(),
  sessionAccount: service(),
  //  hooks
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
    controller.set('profilePickOptions', {
      accept: 'image/* ',
      fromSources: 'local_file_system',
      maxFiles: 1,
      minFiles: 1
    });
    controller.set('resumePickOptions', {
      accept: '.pdf',
      fromSources: 'local_file_system',
      maxFiles: 1,
      minFiles: 1
    });
  },
  //  actions
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/about-me.jpg)');
    },
    save() {
      this.controller.get('model').save();
    },
    uploadProfilePic(results) {
      if(results[0]) {
        const result = results[0];

        Ember.RSVP.Promise.resolve(this.get('sessionAccount.profile')).then((function(person) {
          this.store.createRecord('image', {
            fileName: result.name,
            url: result.url,
            uploader: person
          }).save().then((function(image) {
            person.set('profilePicture', image);

            person.save().then((function() {
              this.refresh();
            }).bind(this));
          }).bind(this));
        }).bind(this));
      }
    },
    uploadResume(results) {
      if(results[0]) {
        const result = results[0];

        Ember.RSVP.Promise.resolve(this.get('sessionAccount.profile')).then((function(person) {
          person.set('resumeUrl', result.url);

          person.save().then((function() {
            this.refresh();
          }).bind(this));
        }).bind(this));
      }
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
