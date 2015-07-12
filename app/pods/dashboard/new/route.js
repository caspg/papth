import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.createRecord("thought");
  },

  activate: function() {
    this.controllerFor("dashboard").set("isNewForm", true);
  },
  deactivate: function() {
    this.controllerFor("dashboard").set("isNewForm", false);
  }
});
