import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  content: DS.attr("string"),

  validations: {
    content: {
      presence: true
    }
  }
});
