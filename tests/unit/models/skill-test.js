import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('skill', 'Unit | Model | skill', {
  // Specify the other units that are required for this test.
  needs: [
    'model:person',
    'model:project'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('color is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'skill', 'color', 'string', false, 'test');
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'skill', 'description', 'string', false, 'test');
});

test('hoverColor is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'skill', 'hoverColor', 'string', false, 'test');
});

test('name is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'skill', 'name', 'string', false, 'test');
});

test('years is a number attribute', function(assert) {
  runAttrTest.call(this, assert, 'skill', 'years', 'number', false, 4);
});

// relationships
test('belongs to person', function(assert) {
  runRelationshipTest.call(this, assert, 'skill', 'person', 'belongsTo', 'person', null, false, false);
});

test('has many projects', function(assert) {
  runRelationshipTest.call(this, assert, 'skill', 'projects', 'hasMany', 'project', null, true, false);
});
