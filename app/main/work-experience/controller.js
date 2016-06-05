import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['started:desc'],
  sortedWork: Ember.computed.sort('model', 'sortProperties')
});
