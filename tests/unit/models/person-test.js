import { moduleForModel, test } from 'ember-qunit';
import moment from 'moment';
import runAttrTest from '../../helpers/attribute-test';
import runRelationshipTest from '../../helpers/relationship-test';

moduleForModel('person', 'Unit | Model | person', {
  // Specify the other units that are required for this test.
  needs: [
    'model:blog-post',
    'model:education',
    'model:image',
    'model:project',
    'model:skill',
    'model:work-experience'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

// attributes
test('birthDate is a date attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'birthDate', 'date', false, new Date());
});

test('description is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'description', 'string', false, 'test');
});

test('email is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'email', 'string', false, 'test');
});

test('firstName is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'firstName', 'string', false, 'test');
});

test('lastName is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'lastName', 'string', false, 'test');
});

test('linkedin is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'linkedin', 'string', false, 'test');
});

test('location is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'location', 'string', false, 'test');
});

test('resumeUrl is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'resumeUrl', 'string', false, 'test');
});

test('title is a string attribute', function(assert) {
  runAttrTest.call(this, assert, 'person', 'title', 'string', false, 'test');
});

// computed properties
test('age is the difference in years between birthDate and today', function(assert) {
  // month is 1 less than actual month, due to running 0-11
  const birth = moment().set({
          month: 11,
          date:28,
          year: 1986
        }),
        expected = moment().diff(birth, 'years'),
        person = this.subject({
          birthDate: '12/28/1986'
        });

    // causes a warning about a moment deprecation, but passes
    assert.equal(person.get('age'), expected, `expected ${expected}, got ${person.get('age')}. birth = ${birth}`);
});

test('fullName is firstName and lastName concatenated', function(assert) {
  const expected = 'Justin Drew',
        person = this.subject({
          firstName: 'Justin',
          lastName: 'Drew'
        });

  assert.equal(person.get('fullName'), expected, `expected ${expected}, got ${person.get('fullName')}`);
});

// relationships
test('has many blog-posts', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'blogPosts', 'hasMany', 'blog-post', null, false, false);
});

test('has many educations', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'educations', 'hasMany', 'education', null, false, false);
});

test('has many images', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'images', 'hasMany', 'image', null, false, false);
});

test('belongs to image as profilePicture', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'profilePicture', 'belongsTo', 'image', null, false, false);
});

test('has many projects', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'projects', 'hasMany', 'project', null, false, false);
});

test('has many skills', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'skills', 'hasMany', 'skill', null, false, false);
});

test('has many work-experiences', function(assert) {
  runRelationshipTest.call(this, assert, 'person', 'workExperiences', 'hasMany', 'work-experience', null, false, false);
});
