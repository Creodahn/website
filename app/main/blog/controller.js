import Ember from 'ember';

export default Ember.Controller.extend({
  // attributes
  sortProperties: ['createdAt:desc'],
  // computed properties
  sortedBlogPosts: Ember.computed.sort('model', 'sortProperties')
});
