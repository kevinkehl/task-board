// Copyright (c) 2015, RetailNext, Inc.
// This material contains trade secrets and confidential information of
// RetailNext, Inc.  Any use, reproduction, disclosure or dissemination
// is strictly prohibited without the explicit written permission
// of RetailNext, Inc.
// All rights reserved.

import ApplicationRoute from './application';

export default ApplicationRoute.extend({
  model: function() {
    return this.store.find('board');
  }
});
