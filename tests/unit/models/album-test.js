import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('album', 'Unit | Model | album', {
  // Specify the other units that are required for this test.
  needs: [
    'model:image',
    'model:person'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();

  assert.ok(!!model);
});

// attributes
test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'album', 'createdAt', 'date', false, new Date());
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'album', 'description', 'string', false, 'test');
});

test('title is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'album', 'title', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'album', 'updatedAt', 'date', false, new Date());
});

// relationships
test('has many images', function(assert) {
  runRelationshipTest.call(this, assert, 'album', 'images', 'hasMany', 'image', 'imagable', false, false);
});

test('belongs to person', function(assert) {
  runRelationshipTest.call(this, assert, 'album', 'person', 'belongsTo', 'person', null, false, false);
});
