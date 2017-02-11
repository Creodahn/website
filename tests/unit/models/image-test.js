import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('image', 'Unit | Model | image', {
  // Specify the other units that are required for this test.
  needs: [
    'mixin:imagable',
    'model:person'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'image', 'description', 'string', false, 'test');
});

test('fileName is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'image', 'fileName', 'string', false, 'test');
});

test('url is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'image', 'url', 'string', false, 'test');
});

// relationships
test('polymorphic relationship imagable', function(assert) {
  runRelationshipTest.call(this, assert, 'image', 'imagable', 'belongsTo', 'imagable', null, false, true);
});

test('belongs to person', function(assert) {
  runRelationshipTest.call(this, assert, 'image', 'uploader', 'belongsTo', 'person', 'images', false, false);
});
