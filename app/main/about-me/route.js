import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  //  attributes
  session: service(),
  sessionAccount: service(),
  //  hooks
  setupController(controller, model) {
    this._super(controller, model);

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
});
