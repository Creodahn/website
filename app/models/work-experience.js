import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  website: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  position: DS.attr('string'),
  description: DS.attr('string')
});
