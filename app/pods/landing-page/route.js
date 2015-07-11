import Ember from 'ember';
import Firebase from 'firebase';
import config from 'papth/config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("user");
  },

  actions: {
    saveUser() {
      var model = this.modelFor(this.routeName);
      var ref = new Firebase(config.firebase);
      ref.createUser({
        email: model.get("email"),
        password: model.get("password")
      }, (error) => {
        if (error) {
          console.log(error.message);
        } else {
          console.log("User was successfully created yo.");
        }
      });
    },

    signIn() {
      var model = this.modelFor(this.routeName);
      this.get("session").authenticate("authenticator:firebase", {
        "email": model.get("email"),
        "password": model.get("password")
      }).catch((reason) => {
        console.log(reason);
      });
    }
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({"isSignIn": true, "isSignUp": false});
  }
});
