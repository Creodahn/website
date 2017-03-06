import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Route.extend({
  // attributes
  session: service('session'),
  sessionAccount: service('session-account'),
  // hooks
  model() {
    return this.modelFor('main').get('projects').then(function(projects) {
      return projects;
    });
  },
  setupController(controller, model) {
    this._super(controller, model);

    if(controller.hasOwnProperty('sortedProjects')) {
      delete controller.sortedProjects;
    }

    controller.set('isAuthenticated', this.get('session.isAuthenticated'));
    controller.set('selected', this.store.createRecord('project'));
    controller.set('sortProperties', ['started:desc']);
    controller.set('sortedProjects', Ember.computed.sort('model', 'sortProperties'));
    controller.addObserver('images', function() {
      if(this.get('images')) {
        $('#image-modal').modal('show');
      }
    });
  },
  // actions
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/project.jpg)');
    },
    save() {
      const project = this.controller.get('selected');

      this.get('sessionAccount.profile').then((function(person) {
        project.set('person', person);

        project.save();
      }).bind(this));
    },
    select(project) {
      this.controller.set('selected', project);

      $('#modal-toggle').click();
    },
    selectImages(images, title) {
      const ctrl = this.controller;

      // reset images before selecting the image set
      ctrl.set('images', null);
      ctrl.set('images', images);
      ctrl.set('modal-title', title);
    },
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
