import { moduleFor, test } from 'ember-qunit';

moduleFor('route:main/about-me', 'Unit | Route | main/about me', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
