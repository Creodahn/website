import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  username: DS.attr('string'),
  // relationships
  person: DS.belongsTo('person')
});
