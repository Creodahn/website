import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('blog-post', 'Unit | Model | blog post', {
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
test('content is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'blog-post', 'content', 'string', false, 'test');
});

test('createdAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'blog-post', 'createdAt', 'date', false, new Date());
});

test('title is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'blog-post', 'title', 'string', false, 'test');
});

test('updatedAt is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'blog-post', 'updatedAt', 'date', false, new Date());
});

//relationships
test('has many images', function(assert) {
  runRelationshipTest.call(this, assert, 'blog-post', 'images', 'hasMany', 'image', 'imagable', false, false);
});

test('belongs to person', function(assert) {
  runRelationshipTest.call(this, assert, 'blog-post', 'person', 'belongsTo', 'person', null, false, false);
});
