import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('work-experience', 'Unit | Model | work experience', {
  // Specify the other units that are required for this test.
  needs: [
    'model:project'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('company is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'company', 'string', false, 'test');
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'description', 'string', false, 'test');
});

test('ended is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'ended', 'date', false, new Date());
});

test('position is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'position', 'string', false, 'test');
});

test('started is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'started', 'date', false, new Date());
});

test('url is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'work-experience', 'url', 'string', false, 'test');
});

// relationships
test('has many projects', function(assert) {
  runRelationshipTest.call(this, assert, 'work-experience', 'projects', 'hasMany', 'project', null, false, false);
});
