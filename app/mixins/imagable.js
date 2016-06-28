import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  images: DS.hasMany('image', { inverse: 'imagable' })
});
