import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service('session'),
  sessionAccount: service('session-account'),
  //  hooks
  model() {
    return this.modelFor('main').get('skills').then((skills) => {
      return skills;
    });
  },
  setupController(controller, model) {
    this._super(controller, model);

    if(controller.hasOwnProperty('sortedSkills')) {
      delete controller.sortedSkills;
    }

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
    controller.set('sort', ['years:desc']);
    controller.set('selected', this.store.createRecord('skill'));
    controller.set('sortedSkills', Ember.computed.sort('model', 'sort'));
  },
  //  actions
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/skills.jpg)');
    },
    remove(skill) {
      skill.destroyRecord();

      this.refresh();
    },
    save() {
      const skill = this.controller.get('selected');

      this.get('sessionAccount.profile').then((function(person) {
        skill.set('person', person);

        skill.save();
      }).bind(this));
    },
    select(skill) {
      this.controller.set('selected', skill);
    },
    willTranstition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
