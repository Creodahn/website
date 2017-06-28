import DS from 'ember-data';

export default DS.Model.extend({
  //  attributes
  color: DS.attr('string'),
  description: DS.attr('string'),
  hoverColor: DS.attr('string'),
  name: DS.attr('string'),
  years: DS.attr('number'),
  //  relationships
  person: DS.belongsTo('person'),
  projects: DS.hasMany('project', { readOnly: true }),
});
