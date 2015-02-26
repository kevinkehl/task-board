// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newBoard: function() {
      this.render('boards/new', {
        into: 'application',
        outlet: 'modal',
        controller: 'board'
      });
    },

    newList: function(board) {
      this.render('lists/new', {
        into: 'application',
        outlet: 'modal',
        controller: 'list',
        model: board
      });
    },

    newTask: function(list) {
      this.render('tasks/new', {
        into: 'application',
        outlet: 'modal',
        controller: 'task',
        model: list
      });
    },

    editTask: function(task) {
      this.render('tasks/edit', {
        into: 'application',
        outlet: 'modal',
        controller: 'task',
        model: task
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
