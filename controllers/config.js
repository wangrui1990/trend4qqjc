/**
 * Created by wr on 2016/6/20.
 */
var Config       = require('../proxy').Config;
exports.update = function (req, res, next) {
    var cookie = req.body._cookies;
    Config.updatecookie(cookie, function (err) {});
};