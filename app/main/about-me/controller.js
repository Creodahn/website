import Ember from 'ember';

export default Ember.Controller.extend({
  // computed properties
  isAuthenticated: Ember.computed('session', function() {
    return this.get('session.isAuthenticated');
  }),
  // actions
  actions: {
    save() {
      this.get('model').save();
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
  }
});
