// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return Ember.RSVP.hash({
      lists: this.store.find('list'),
      tasks: this.store.find('task')
    });
  },

  model: function(params) {
    return this.store.find('board', params.id);
  }
});
