'use strict';
const controller = require('egg').Controller;

class NewsController extends controller {
  * list() {
    const dataList = {
      list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    yield this.ctx.render('list.tpl', dataList);
  }
}
module.exports = NewsController;
