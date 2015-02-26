// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['task'],
  attributeBindings: ['draggable'],
  draggable: true,

  click: function() {
    this.get('controller').send('editTask', this.get('controller.model'));
  },

  dragStart: function(event) {
    event.dataTransfer.setData('taskId', this.get('controller.model.id'));
  }
});
