/**
 * Created by wr on 2016/6/20.
 */
var models     = require('../models');
var Config      = models.Config;

exports.getReply = function (callback) {
    Config.findOne({_id: id}, callback);
};
exports.updatecookie = function (cookie, callback) {
    Config.findOne({},function(err,config){
        if(err !=null)
        {
            var newconfig = new Config();
            newconfig.updatetime = Date();
            newconfig._cookie  = cookie;
            newconfig.save(callback (err));
        }
        else {//如果err==null，则person就能取到数据
            config._cookie = cookie;
            config.updatetime=Date();
            config.save(callback(err));
        }
    });
};