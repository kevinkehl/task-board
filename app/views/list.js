// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['list'],

  dragOver: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    var task = this.get('controller.store').getById('task', event.dataTransfer.getData('taskId'));
    var oldList = task.get('list');
    var model = this.get('controller.model');

    if (oldList === model) {
      return;
    }

    oldList.get('tasks').removeObject(task);
    oldList.save();

    task.set('list', this.get('controller.model'));
    task.save();

    model.get('tasks').pushObject(task);
    model.save();
  }
});
