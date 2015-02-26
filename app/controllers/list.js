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
    createList: function() {
      var list = this.store.createRecord('list', {
        name: this.get('name'),
        board: this.get('model')
      });

      list.save();

      this.model.get('lists').pushObject(list);
      this.model.save();

      this.send('closeModal');

      this.set('name', '');
    },

    addTask: function() {
      this.send('newTask', this.get('model'));
    }
  }
});
