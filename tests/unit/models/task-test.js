// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('task', 'Task Model', {
  needs: ['model:list', 'model:board']
});

test('Task Display Name', function(assert) {
  var task = this.subject({name: 'archinfamy-originatress'});
  assert.ok(task);
  assert.ok(task instanceof DS.Model);

  assert.equal('Archinfamy-originatress', task.get('displayName'));
});
