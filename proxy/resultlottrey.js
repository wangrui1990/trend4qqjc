/**
 * Created by wr on 2016/6/17.
 */
var models     = require('../models');
var Reply      = models.Reply;

exports.newAndSave = function (kjtime, kjjg, callback) {
    var reply       = new Reply();
    reply.kjtime   = kjtime;
    reply.kjjg  = kjjg;

    reply.save(function (err) {
        callback(err, reply);
    });
};