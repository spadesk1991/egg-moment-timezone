'use strict';
const moment = require('moment-timezone');
/**
 * @param {Egg.Application} app egg application
 */
module.exports = app => {
  const { timezone } = app.config.momentTimezone;
  app.moment = moment.tz.setDefault(timezone || 'Asia/Shanghai');// 默认上海
};
