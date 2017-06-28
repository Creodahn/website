import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  //  attributes
  session: service('session'),
  sessionAccount: service('session-account'),
  //  hooks
  model() {
    return this.modelFor('main').get('workExperiences').then((exp) => {
      return exp.map((e) => {
        e.get('projects');
        return e;
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model);

    if(controller.hasOwnProperty('sortedWork')) {
      delete controller.sortedWork;
    }

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
    controller.set('selected', this.store.createRecord('work-experience'));
    controller.set('sort', ['started:desc']);
    controller.set('sortedWork', Ember.computed.sort('model', 'sort'));
  },
  //  actions
  actions: {
    cancel() {
      this.set('selected', this.store.createRecord('work-experience'));
    },
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/work.jpg)');
    },
    save() {
      const exp = this.controller.get('selected');

      this.get('sessionAccount.profile').then((function(person) {
        exp.set('person', person);

        exp.save();
      }).bind(this));
    },
    select(exp) {
      this.controller.set('selected', exp);

      $('#modal-toggle').click();
    },

    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
