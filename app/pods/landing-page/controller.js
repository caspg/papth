import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleTitle() {
      this.setProperties({
        "isSignIn": !this.get("isSignIn"),
        "isSignUp": !this.get("isSignUp"),
        "model.email": "",
        "model.password": ""
      });
      return false;
    }
  }
});
