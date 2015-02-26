// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.
import DS from 'ember-data';

export default DS.Model.extend({
  lists: DS.hasMany('list'),
  name: DS.attr('string')
});
