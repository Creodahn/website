import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', {path: '/'}, function() {
    this.route('about-me');
    this.route('education');
    this.route('work-experience');
    this.route('skills');
    this.route('projects');
    this.route('contact-me');
  });
});

export default Router;
