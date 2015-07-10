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
      }, (error, userData) => {
        if (error) {
          console.log(error.message);
        } else {
          console.log("User was successfully created yo.")
        }
      })
    }
  }
});
