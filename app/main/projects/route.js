import Ember from 'ember';

export default Ember.Route.extend({
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

    controller.set('sortProperties', ['started:desc']);
    controller.set('sortedProjects', Ember.computed.sort('model', 'sortProperties'));
    controller.addObserver('images', function() {
      if(this.get('images')) {
        $('#image-modal').modal('show');
      }
    });
  },
  actions: {
    didTransition() {
      this.controllerFor('main').set('style', 'background-image: url(assets/imgs/project.jpg)');
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
