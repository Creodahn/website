import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/blog', 'Unit | Route | main/blog', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
