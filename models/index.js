/**
 * Created by xx on 2016/6/16.
 */
var mongoose = require('mongoose');
var config   = require('../config');

mongoose.connect(config.db, {
    server: {poolSize: 20}
}, function (err) {
    if (err) {
        process.exit(1);
    }
});

// models
require('./lottreyResult');
require('./config');
exports.Config        = mongoose.model('Config');
exports.Batch        = mongoose.model('Batch');
