'use strict';
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.post('createPost',app.controller.post.create());
};
