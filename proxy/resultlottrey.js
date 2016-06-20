/**
 * Created by wr on 2016/6/17.
 */
var models     = require('../models');
var Batch      = models.Batch;

exports.newAndSave = function (batchno, batchresult,starttime, textResult, callback) {

    var batch       = new Batch();
    batch.batchno   = batchno;
    batch.batchresult  = batchresult;
    batch.starttime   = starttime;
    batch.textResult  = textResult;
    console.log(batch);
    batch.save(function (err) {
        callback(err, batch);
    });
};