// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  list: DS.belongsTo('list'),
  name: DS.attr('string'),
  description: DS.attr('string'),

  displayName: Ember.computed('name', function() {
    return this.get('name').capitalize();
  })
});
