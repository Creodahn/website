import DS from 'ember-data';

export default DS.Model.extend({
  // attributes
  description: DS.attr('string'),
  graduated: DS.attr('date'),
  schoolName: DS.attr('string'),
  started: DS.attr('date'),
  // relationships
  person: DS.belongsTo('person')
});
