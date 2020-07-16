/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594178783123_1039';

  // add your middleware config here
  config.middleware = ["adminauth"];
  config.adminauth={
    match: '/admin',//通用设置,只有/admin开头的路由使用这个中间件
  }

  
  //配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
      '.nj': 'nunjucks',//[egg可以配置多种模板引擎使用,业务需求而定]
    },
  };
   //配置session
  config.session={
    key:'SESSION_ID',
    maxAge:864000,  //时间限制
    httpOnly: true, //只能服务端访问
    encrypt: true, //加密
    renew: true //  延长会话有效期       
  };

  // 配置mongoose
  config.mongoose = {
    client: {
      url: 'mongodb://egg_mi:803216@127.0.0.1/egg_mi',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    },
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
