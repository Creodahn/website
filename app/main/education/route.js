import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  model() {
    return this.modelFor('main').get('educations').then((e) => {
      return e;
    });
  },
  setupController(controller, model) {
    const auth = this.get('session.isAuthenticated');

    this._super(controller, model);

    controller.set('isAuthenticated', auth);
    if(auth) {
      controller.set('selected', this.store.createRecord('education'));
    }
  },
  actions: {
    cancel() {
      this.set('selected', this.store.createRecord('education'));
    },
    save() {
      const ed = this.controller.get('selected');

      this.get('sessionAccount.profile').then((function(person) {
        ed.set('person', person);

        ed.save();
      }).bind(this));
    },
    select(ed) {
      this.controller.set('selected', ed);

      $('#modal-toggle').click();
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
