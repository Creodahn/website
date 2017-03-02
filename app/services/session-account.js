import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),
  // computed properties
  profile: Ember.computed('session.data.login', function() {
    const accountLogin = this.get('session.data.login');

    if(!Ember.isEmpty(accountLogin)) {
      return this.get('store').query('person', {
        filter: {
          email: accountLogin
        }
      }).then(function(records) {
        return records.toArray()[0];
      });
    } else {
      return null;
    }
  }),
  user: Ember.computed('session.data.login', function() {
    const accountLogin = this.get('session.data.login');

    if(!Ember.isEmpty(accountLogin)) {
      return this.get('store').query('user', {
        filter: {
          username: accountLogin
        }
      }).then(function(records) {
        return records.toArray()[0];
      });
    } else {
      return null;
    }
  })
});
