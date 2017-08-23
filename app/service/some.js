'use strict';
module.exports = app => {
  class SomeService extends app.service {
    * list() {
      const rule = this.app.config.robot.ua;
    }
    }
  return SomeService;
};
