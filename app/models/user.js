import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  email: DS.attr('string'),
  password: DS.attr('strnig'),

  validations: {
    email: {
      presence: true,
      format: {
        with: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'your email is invalid'
      }
    },
    password: {
      presence: true,
      length: { minimum: 6 }
    }
  }
});
