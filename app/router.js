import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // due to a bug in Ember 2.11.0, can't declare a custom error route
  // this.route('error');
  this.route('loading');
  this.route('main', {path: '/'}, function() {
    this.route('about-me');
    this.route('education');
    this.route('loading');
    this.route('work-experience');
    this.route('skills');
    this.route('projects');
    this.route('admin', function() {
      this.route('profile-editor');
      this.route('education-editor');
      this.route('skill-editor');
      this.route('work-editor');
      this.route('project-editor');
      this.route('blog-editor');
    });
    this.route('blog');
  });
  this.route('login');
});

export default Router;
