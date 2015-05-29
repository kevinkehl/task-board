// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('list', 'List Model', {
  needs: ['model:board', 'model:task']
});

test('List Name', function(assert) {
  var list = this.subject({name: 'vikingship-sorrowy'});
  assert.ok(list);
  assert.ok(list instanceof DS.Model);

  assert.equal('vikingship-sorrowy', list.get('name'));
});
