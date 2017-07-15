import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/blog/post', 'Unit | Route | main/blog/post', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
