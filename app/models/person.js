import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  //attributes
  birthDate: DS.attr('date'),
  description: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  linkedin: DS.attr('string'),
  location: DS.attr('string'),
  resumeUrl: DS.attr('string'),
  //computed properties
  age: Ember.computed('birthDate', function() {
    let today = moment(Date()),
        birth = moment(this.get('birthDate'));

    return today.diff(birth, 'years');
  }),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),
  //relationships
  blogPosts: DS.hasMany('blog-post'),
  educations: DS.hasMany('education'),
  images: DS.hasMany('image'),
  profilePicture: DS.belongsTo('image', {inverse: null}),
  projects: DS.hasMany('projects'),
  skills: DS.hasMany('skill'),
  workExperiences: DS.hasMany('work-experience')
});
