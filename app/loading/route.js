import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('supportsSVG', document.implementation.hasFeature('http:// www.w3.org/TR/SVG11/feature#Image', '1.1'));
  },
  actions: {
    willTransition() {
      this.controllerFor('main').set('style', '');
    }
  }
});
