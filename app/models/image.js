import DS from 'ember-data';

export default DS.Model.extend({
  fileName: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('string')
});
