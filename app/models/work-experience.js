import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr('string'),
  description: DS.attr('string'),
  ended: DS.attr('date'),
  position: DS.attr('string'),
  started: DS.attr('date'),
  url: DS.attr('string')
});
