import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //  due to a bug in Ember 2.11.0, can't declare a custom error route
  //  this.route('error');
  this.route('loading');
  this.route('main', { path: '/' }, function() {
    this.route('about-me', function() {
      this.route('resume-viewer');
    });
    this.route('education');
    this.route('loading');
    this.route('work-experience');
    this.route('skills');
    this.route('projects');
    this.route('blog');
  });
  this.route('login');
});

export default Router;
