import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('error');
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
});

export default Router;
