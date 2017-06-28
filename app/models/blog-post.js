import BaseModel from 'personal-website/models/base-model';
import DS from 'ember-data';
import Imagable from '../mixins/imagable';

export default BaseModel.extend(Imagable, {
  content: DS.attr('string'),
  title: DS.attr('string'),
  // relationships
  person: DS.belongsTo('person')
});
