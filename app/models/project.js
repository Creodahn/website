import DS from 'ember-data';

export default DS.Model.extend({
  //attributes
  description: DS.attr('string'),
  ended: DS.attr('date'),
  name: DS.attr('string'),
  started: DS.attr('date'),
  url: DS.attr('string'),
  //relationships
  images: DS.hasMany('image')
});
