import { moduleForModel, test } from 'ember-qunit';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('education', 'Unit | Model | education', {
  // Specify the other units that are required for this test.
  needs: [
    'model:person'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();

  assert.ok(!!model);
});

// attributes
test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'education', 'description', 'string', false, 'test');
});

test('graduated is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'education', 'graduated', 'date', false, new Date());
});

test('schoolName is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'education', 'schoolName', 'string', false, 'test');
});

test('started is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'education', 'started', 'date', false, new Date());
});

// relationships
test('belongs to person', function(assert) {
  runRelationshipTest.call(this, assert, 'education', 'person', 'belongsTo', 'person', null, false, false);
});
