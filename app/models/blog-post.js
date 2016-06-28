import DS from 'ember-data';
import Imagable from '../mixins/imagable';

export default DS.Model.extend(Imagable, {
  content: DS.attr('string'),
  createdAt: DS.attr('date'),
  title: DS.attr('string'),
  updatedAt: DS.attr('date'),
  //relationships
  person: DS.belongsTo('person')
});
