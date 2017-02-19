import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('main').set('style', '');
  },
  model() {
    return this.modelFor('main').get('projects').then((projects) => {
      return projects;
    });
  },
  afterModel() {
    this.controllerFor('main').set('style', 'background-image: url(assets/imgs/project.jpg)');
  },
  setupController(controller, model) {
    this._super(controller, model);

    if(controller.hasOwnProperty('sortedProjects')) {
      delete controller.sortedProjects;
    }

    controller.set('modal-id', );
    controller.set('sortProperties', ['started:desc']);
    controller.set('sortedProjects', Ember.computed.sort('model', 'sortProperties'));
    controller.addObserver('images', function() {
      if(this.get('images')) {
        $('#image-modal').modal('show');
      }
    });
  },
  actions: {
    selectImages(images, title) {
      const ctrl = this.controller;

      ctrl.set('images', images);
      ctrl.set('modal-title', title);
    }
  }
});
