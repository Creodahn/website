import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date', { readOnly: true }),
  updatedAt: DS.attr('date', { readOnly: true })
});
