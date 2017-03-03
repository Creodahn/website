import DS from 'ember-data';

export default DS.Model.extend({
  //attributes
  company: DS.attr('string'),
  description: DS.attr('string'),
  ended: DS.attr('date'),
  position: DS.attr('string'),
  started: DS.attr('date'),
  url: DS.attr('string'),
  //relationships
  person: DS.belongsTo('person'),
  projects: DS.hasMany('project')
});
