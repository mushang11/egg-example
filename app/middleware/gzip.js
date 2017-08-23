'use strict';
const isJSON = require('koa-is-json');
const zlib = require('zlib');
module.exports = (options, app) => {
  return async function gzip(ctx, next) {
    await next();
    const body = ctx.body;
    if (!body) return;
    if (options.threshold && ctx.length < options.threshold) { return; }
    if (isJSON(body)) body = JSON.stringify(body);
    ctx.body = zlib.createGzip().end(body);
    ctx.set('Content-Encoding', 'gzip');
  };
};
