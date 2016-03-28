import DS from 'ember-data';

export default DS.Model.extend({
  schoolName: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  description: DS.attr('string')
});
