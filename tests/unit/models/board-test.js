// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import DS from 'ember-data';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('board', 'Board Model', {
  needs: ['model:list', 'model:task']
});

test('Board Name', function(assert) {
  var board = this.subject({name: 'unpaying-calisthenic'});
  assert.ok(board);
  assert.ok(board instanceof DS.Model);

  assert.equal('unpaying-calisthenic', board.get('name'));
});
