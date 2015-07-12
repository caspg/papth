import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("thought");
  },

  actions: {
    saveThougth() {
      var model = this.modelFor(this.routeName);
      model.set("content", model.get("content"));
      model.save().then(() => {
        this.transitionTo("dashboard");
      }, function(reason) {
        console.log(reason);
      });
    }
  },

  activate: function() {
    this.controllerFor("dashboard").set("isNewForm", true);
  },
  deactivate: function() {
    this.controllerFor("dashboard").set("isNewForm", false);
  }
});
