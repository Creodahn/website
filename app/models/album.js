import DS from 'ember-data';
import Imagable from '../mixins/imagable';

export default DS.Model.extend(Imagable, {
  createdAt: DS.attr('date'),
  description: DS.attr('string'),
  title: DS.attr('string'),
  updatedAt: DS.attr('date'),
  //relationships
  person: DS.belongsTo('person')
});
