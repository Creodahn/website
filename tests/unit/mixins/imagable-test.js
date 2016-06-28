import Ember from 'ember';
import ImagableMixin from 'personal-website/mixins/imagable';
import { module, test } from 'qunit';

module('Unit | Mixin | imagable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ImagableObject = Ember.Object.extend(ImagableMixin);
  let subject = ImagableObject.create();
  assert.ok(subject);
});
