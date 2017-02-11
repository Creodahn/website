import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('project', 'Unit | Model | project', {
  // Specify the other units that are required for this test.
  needs: [
    'model:image',
    'model:skill'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'project', 'description', 'string', false, 'test');
});

test('ended is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'project', 'ended', 'date', false, new Date());
});

test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'project', 'name', 'string', false, 'test');
});

test('started is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'project', 'started', 'date', false, new Date());
});

test('url is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'project', 'url', 'string', false, 'test');
});

// relationships
test('has many images', function(assert) {
  runRelationshipTest.call(this, assert, 'project', 'images', 'hasMany', 'image', 'imagable', false, false);
});

test('has many skills', function(assert) {
  runRelationshipTest.call(this, assert, 'project', 'skills', 'hasMany', 'skill', null, false, false);
});
