import DS from 'ember-data';

export default DS.Model.extend({
  schoolName: DS.attr('string'),
  started: DS.attr('date'),
  graduated: DS.attr('date'),
  description: DS.attr('string')
});
