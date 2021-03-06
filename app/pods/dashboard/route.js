import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll("thought");
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("isNewForm", false)
  }
});
