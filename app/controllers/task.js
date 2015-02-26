// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  description: '',

  actions: {
    createTask: function() {
      var task = this.store.createRecord('task', {
        name: this.get('name'),
        description: this.get('description'),
        list: this.get('model')
      });

      task.save();

      this.model.get('tasks').pushObject(task);
      this.model.save();

      this.send('closeModal');
      this.set('name', '');
      this.set('description', '');
    },

    updateTask: function() {
      this.model.save();
      this.send('closeModal');
    },

    cancelUpdate: function() {
      this.model.rollback();
      this.send('closeModal');
    }
  }
});
