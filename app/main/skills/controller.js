import Ember from 'ember';

export default Ember.Controller.extend({
  //attributes
  sortProperties: ['years:desc'],
  //computed properties
  sortedSkills: Ember.computed.sort('model', 'sortProperties')
});
