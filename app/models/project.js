import DS from 'ember-data';
import Imagable from '../mixins/imagable';

export default DS.Model.extend(Imagable, {
  //attributes
  description: DS.attr('string'),
  ended: DS.attr('date'),
  name: DS.attr('string'),
  started: DS.attr('date'),
  url: DS.attr('string'),
  //relationships
  skills: DS.hasMany('skill')
});
