import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('dashboard').set('isNewForm', true);
  },
  deactivate: function() {
    this.controllerFor('dashboard').set('isNewForm', false);
  }
});
