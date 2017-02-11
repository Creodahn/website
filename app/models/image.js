import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  fileName: DS.attr('string'),
  url: DS.attr('string'),
  //relationships
  imagable: DS.belongsTo('imagable', {polymorphic: true }),
  uploader: DS.belongsTo('person', { inverse: 'images' })
});
