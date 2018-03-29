var api = {
    '/search': {
    target: 'http://localhost:8080/unusedgoods/goods_search',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/search': ''    //需要rewrite重写
    }
   },
   '/logIn': {
    target: 'http://localhost:8080/unusedgoods/login_userIn',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/logIn': ''    //需要rewrite重写
    }
   },
   '/add_user_recode': {
    target: 'http://localhost:8080/unusedgoods/user_registered',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/add_user_recode': ''    //需要rewrite重写
    }
   },
   '/add_user': {
    target: 'http://localhost:8080/unusedgoods/user_add',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/add_user_recode': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_feedback': {
    target: 'http://localhost:8080/unusedgoods/suggestion_submit',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_feedback': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_detail': {
    target: 'http://localhost:8080/unusedgoods/user_userDetail',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_detail': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/logIn_account_proving_new': {
    target: 'http://localhost:8080/unusedgoods/user_registered',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/logIn_account_proving_new': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/logIn_account_proving_code': {
    target: 'http://localhost:8080/unusedgoods/user_retrievePassword',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/logIn_account_proving_code': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/logIn__new': {
    target: 'http://localhost:8080/unusedgoods/user_add',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/logIn__new': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/logIn_code': {
    target: 'http://localhost:8080/unusedgoods/user_add',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/logIn_code': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/add_userdlg': {
    target: 'http://localhost:8080/unusedgoods/user_addDialog',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/add_userdlg': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/add_save': {
    target: 'http://localhost:8080/unusedgoods/user_collection',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/add_save': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/account_proving': {
    target: 'http://localhost:8080/unusedgoods/user_verification',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/account_proving': ''    //需要rewrite重写
    }
   }
   ,
   '/unusedgoods/out': {
    target: 'http://localhost:8080/unusedgoods/login_out',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/out': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_onsell_goods': {
    target: 'http://localhost:8080/unusedgoods/goods_ownPostList',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_onsell_goods': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_upsell_goods': {
    target: 'http://localhost:8080/unusedgoods/goods_ownUnderShelfList',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_upsell_goods': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_save_upsell_save': {
    target: 'http://localhost:8080/unusedgoods/goods_ownCollectUnderShelf',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_save_upsell_save': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_save_onsell_save': {
    target: 'http://localhost:8080/unusedgoods/goods_ownCollect',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_save_onsell_save': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_message': {
    target: 'http://localhost:8080/unusedgoods/user_listDialog',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_message': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_goods_up': {
    target: 'http://localhost:8080/unusedgoods/goods_underShelfGoods',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_goods_up': ''    //需要rewrite重写终点
    }
   },
   '/unusedgoods/user_goods_delete': {
    target: 'http://localhost:8080/unusedgoods/goods_deleteUnderShelfGoods',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_goods_delete': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_save_delete': {
    target: 'http://localhost:8080/unusedgoods/goods_cancleCollection',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_save_delete': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/user_islogin': {
    target: 'http://localhost:8080/unusedgoods/login_currentInfo',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/user_islogin': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/message_delete': {
    target: 'http://localhost:8080/unusedgoods/user_deleteDialog',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/message_delete': ''    //需要rewrite重写
    }
   },
   '/unusedgoods/message_fackback': {
    target: 'http://localhost:8080/unusedgoods/user_reply ',//接口域名
    changeOrigin: true,//是否跨域ev
    pathRewrite: {
      '^/unusedgoods/message_fackback': ''    //需要rewrite重写
    }
   }
}
module.exports = api