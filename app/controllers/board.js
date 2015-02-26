// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',

  actions: {
    createBoard: function() {
      var board = this.store.createRecord('board', {
        name: this.get('name')
      });

      board.save();
      this.send('closeModal');
      this.set('name', '');
    }
  }
});
