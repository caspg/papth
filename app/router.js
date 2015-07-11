import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing-page', { path: '/' });
  this.route('dashboard', function() {
    this.route('new');
  });
});

export default Router;
