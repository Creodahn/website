import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['started:desc'],
  sortedProjects: Ember.computed.sort('model', 'sortProperties')
});
